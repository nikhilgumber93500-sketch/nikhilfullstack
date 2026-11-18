import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaCheckCircle } from "react-icons/fa";

function Checkout() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [placedOrderId, setPlacedOrderId] = useState("");
  const [form, setForm] = useState({
    name: localStorage.getItem("userName") || "",
    mobile: localStorage.getItem("userMobile") || "",
    address: "",
    city: "Sirsa",
    pincode: "",
    payment: "COD",
  });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, [navigate]);

  const totalPrice = cart.reduce(
    (sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 0),
    0
  );
  const deliveryCharge = totalPrice >= 1000 || totalPrice === 0 ? 0 : 30;
  const handlingCharge = cart.length === 0 ? 0 : 10;
  const grandTotal = totalPrice + deliveryCharge + handlingCharge;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty");
      return;
    }

    if (
      !form.name.trim() ||
      !form.mobile.trim() ||
      !form.address.trim() ||
      !form.city.trim() ||
      !form.pincode.trim()
    ) {
      alert("Please fill all delivery details");
      return;
    }

    if (!/^[0-9]{10}$/.test(form.mobile.trim())) {
      alert("Please enter a valid 10 digit mobile number");
      return;
    }

    if (!/^[0-9]{6}$/.test(form.pincode.trim())) {
      alert("Please enter a valid 6 digit pincode");
      return;
    }

    const orderId = `NE${Date.now().toString().slice(-8)}`;
    const newOrder = {
      id: orderId,
      date: new Date().toISOString(),
      items: cart,
      totalPrice,
      deliveryCharge,
      handlingCharge,
      grandTotal,
      payment: form.payment,
      status: "Placed",
      customer: {
        name: form.name.trim(),
        mobile: form.mobile.trim(),
        address: form.address.trim(),
        city: form.city.trim(),
        pincode: form.pincode.trim(),
      },
    };

    const oldOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    localStorage.setItem("orders", JSON.stringify([newOrder, ...oldOrders]));
    localStorage.setItem("cart", JSON.stringify([]));
    window.dispatchEvent(new Event("cartUpdated"));

    setCart([]);
    setPlacedOrderId(orderId);
    setShowSuccess(true);
  };

  if (cart.length === 0 && !showSuccess) {
    return (
      <div className="checkout-page">
        <div className="checkout-empty">
          <FaShoppingCart size={48} />
          <h2>No items to checkout</h2>
          <p>Add products to your cart first.</p>
          <Link to="/products" className="checkout-btn">
            Shop Now
          </Link>
        </div>
        <style>{checkoutStyles}</style>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container py-4">
        <h1 className="checkout-title">Checkout</h1>
        <p className="checkout-subtitle">
          Confirm your delivery details and place the order.
        </p>

        <div className="row g-4">
          <div className="col-lg-7">
            <form className="checkout-card" onSubmit={handlePlaceOrder}>
              <h2>Delivery Details</h2>

              <div className="checkout-field">
                <label>Full Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>

              <div className="checkout-field">
                <label>Mobile Number</label>
                <input
                  name="mobile"
                  value={form.mobile}
                  maxLength="10"
                  onChange={(e) => {
                    if (/^[0-9]*$/.test(e.target.value)) {
                      handleChange(e);
                    }
                  }}
                  placeholder="10 digit mobile number"
                />
              </div>

              <div className="checkout-field">
                <label>Address</label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="House no, street, landmark"
                  rows="3"
                />
              </div>

              <div className="row g-3">
                <div className="col-md-6">
                  <div className="checkout-field">
                    <label>City</label>
                    <input
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="City"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="checkout-field">
                    <label>Pincode</label>
                    <input
                      name="pincode"
                      value={form.pincode}
                      maxLength="6"
                      onChange={(e) => {
                        if (/^[0-9]*$/.test(e.target.value)) {
                          handleChange(e);
                        }
                      }}
                      placeholder="6 digit pincode"
                    />
                  </div>
                </div>
              </div>

              <div className="checkout-field">
                <label>Payment Method</label>
                <select
                  name="payment"
                  value={form.payment}
                  onChange={handleChange}
                >
                  <option value="COD">Cash on Delivery</option>
                  <option value="UPI">UPI</option>
                  <option value="Card">Card</option>
                </select>
              </div>

              <button type="submit" className="checkout-btn w-100">
                Place Order · ₹{grandTotal}
              </button>
            </form>
          </div>

          <div className="col-lg-5">
            <div className="checkout-card">
              <h2>Order Summary</h2>

              {cart.map((item) => (
                <div
                  className="checkout-item"
                  key={`${item.id}-${item.quantityName}`}
                >
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>
                      {item.quantityName} × {item.quantity}
                    </p>
                    <strong>₹{item.price * item.quantity}</strong>
                  </div>
                </div>
              ))}

              <div className="checkout-bill">
                <p>
                  Items total <span>₹{totalPrice}</span>
                </p>
                <p>
                  Delivery{" "}
                  <span>
                    {deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}
                  </span>
                </p>
                <p>
                  Handling <span>₹{handlingCharge}</span>
                </p>
                <hr />
                <h3>
                  Grand total <span>₹{grandTotal}</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="checkout-success-overlay">
          <div className="checkout-success-popup">
            <FaCheckCircle className="checkout-success-icon" />
            <h2>Order Placed Successfully</h2>
            <p>
              Your order <strong>{placedOrderId}</strong> has been placed.
            </p>
            <button
              type="button"
              className="checkout-btn"
              onClick={() => navigate("/orders")}
            >
              View My Orders
            </button>
          </div>
        </div>
      )}

      <style>{checkoutStyles}</style>
    </div>
  );
}

const checkoutStyles = `
  .checkout-page {
    min-height: 70vh;
    background: #f5f7f6;
    padding-bottom: 40px;
  }
  .checkout-title {
    font-size: 32px;
    margin-bottom: 6px;
    color: #122018;
  }
  .checkout-subtitle {
    color: #66756c;
    margin-bottom: 24px;
  }
  .checkout-card {
    background: #fff;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 8px 24px rgba(18, 48, 32, 0.06);
  }
  .checkout-card h2 {
    font-size: 20px;
    margin-bottom: 18px;
  }
  .checkout-field {
    margin-bottom: 16px;
  }
  .checkout-field label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #24352c;
  }
  .checkout-field input,
  .checkout-field textarea,
  .checkout-field select {
    width: 100%;
    border: 1px solid #d7e4db;
    border-radius: 10px;
    padding: 12px 14px;
    font-size: 15px;
    outline: none;
    background: #fff;
  }
  .checkout-field input:focus,
  .checkout-field textarea:focus,
  .checkout-field select:focus {
    border-color: #198754;
    box-shadow: 0 0 0 3px rgba(25, 135, 84, 0.12);
  }
  .checkout-item {
    display: flex;
    gap: 12px;
    padding: 12px 0;
    border-bottom: 1px solid #eef3ef;
  }
  .checkout-item img {
    width: 64px;
    height: 64px;
    object-fit: contain;
    border: 1px solid #e8efe9;
    border-radius: 10px;
    background: #fafcfa;
  }
  .checkout-item h4 {
    font-size: 15px;
    margin: 0 0 4px;
  }
  .checkout-item p {
    margin: 0 0 4px;
    color: #708078;
    font-size: 13px;
  }
  .checkout-bill p,
  .checkout-bill h3 {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    font-size: 15px;
  }
  .checkout-bill h3 {
    font-size: 18px;
  }
  .checkout-btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 10px;
    background: #198754;
    color: #fff;
    padding: 13px 20px;
    font-size: 16px;
    text-decoration: none;
    cursor: pointer;
  }
  .checkout-btn:hover {
    background: #146c43;
    color: #fff;
  }
  .checkout-empty {
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #5f6f66;
    text-align: center;
    padding: 40px 16px;
  }
  .checkout-success-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 20px;
  }
  .checkout-success-popup {
    width: 100%;
    max-width: 380px;
    background: #fff;
    border-radius: 16px;
    padding: 28px;
    text-align: center;
  }
  .checkout-success-icon {
    font-size: 52px;
    color: #198754;
    margin-bottom: 12px;
  }
  .checkout-success-popup h2 {
    font-size: 22px;
    margin-bottom: 8px;
  }
  .checkout-success-popup p {
    color: #666;
    margin-bottom: 20px;
  }
`;

export default Checkout;
