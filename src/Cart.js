import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaTimes, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Cart({ open, onClose }) {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const loadCart = () => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  };
useEffect(() => {
  const loadCart = () => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  };
  loadCart();
  window.addEventListener("cartUpdated", loadCart);
  window.addEventListener("storage", loadCart);
  return () => {
    window.removeEventListener("cartUpdated", loadCart);
    window.removeEventListener("storage", loadCart);
  };
}, []);
  const updateCart = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    window.dispatchEvent(new Event("cartUpdated"));
  };
  const increase = (product) => {
    updateCart(
      cart.map((item) =>
        item.id === product.id &&
        item.quantityName === product.quantityName
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };
  const decrease = (product) => {
    updateCart(
      cart
        .map((item) =>
          item.id === product.id &&
          item.quantityName === product.quantityName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryCharge = totalPrice >= 1000 ? 0 : 30;
const handlingCharge =  10;
const grandTotal = totalPrice + deliveryCharge + handlingCharge;
  if (!open) return null;
  return (
    <div className="mycart-overlay" onClick={onClose}>
      <div
        className="mycart-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mycart-header">
          <button onClick={onClose}>
            <FaArrowLeft />
          </button>
          <h4>My Cart ({totalItems})</h4>
          <button onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="mycart-content">
          <div className="mycart-savings">
            Your shopping cart
            <span>{totalItems} items</span>
          </div>
          {cart.length === 0 ? (
            <div className="mycart-empty">
              <FaShoppingCart size={45} />
              <h3>Your cart is empty</h3>
              <p>Add products to your cart.</p>
              <button
                onClick={() => {
                  onClose();
                  navigate("/products");
                }}
              >
                Shop Now
              </button>
            </div>
          ) : (
            <>
              <div className="mycart-delivery">
                <strong>Delivery  as soon as possible  with in 20-30 Min.</strong>
                <p>Shipment of {totalItems} items</p>
              </div>
              {cart.map((item) => (
                <div
                  className="mycart-item"
                  key={`${item.id}-${item.quantityName}`} >
                  <img src={item.image} alt={item.name} />
                  <div className="mycart-info">
                    <h5>{item.name}</h5>
                    <p>{item.quantityName}</p>
                    <strong>₹{item.price}</strong>
                  </div>
                  <div className="mycart-qty">
                    <button onClick={() => decrease(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increase(item)}>+</button>
                  </div>
                </div>
              ))}
              <div className="mycart-bill">
  <h3>Bill details</h3>
  <p> Items total<span>₹{totalPrice}</span></p>
  <p> Delivery charge<span>{deliveryCharge === 0 ? (<span style={{ color: "green" }}>FREE</span>
 ) : (        `₹${deliveryCharge}`
      )}
    </span>
  </p>
  <p> Handling charge<span>₹{handlingCharge}</span></p>
  <hr />
  <h3>Grand total<span>₹{grandTotal}</span></h3>
  {deliveryCharge > 0 && ( <p style={{ color: "green" }}>
      ₹{1000 - totalPrice} more shopping for FREE delivery!
    </p>
  )}
</div>
<button
  className="mycart-proceed"
  onClick={() => {
    const isLoggedIn =
      localStorage.getItem("isLoggedIn") === "true";
    onClose();
    navigate(isLoggedIn ? "/checkout" : "/login");
  }}
>
  <span>₹{grandTotal}<small>TOTAL</small></span> Proceed 
</button> </>
          )}
        </div>
      </div>
      <style>{`
        .mycart-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,.68);
          z-index: 10000;
        }
        .mycart-panel {
          position: absolute;
          top: 10px;
          right: 0;
          width: 390px;
          max-width: 100%;
          height: 100%;
          background: #f4f6ff;
          display: flex;
          flex-direction: column;
        }
        .mycart-header {
          display: flex;
          align-items: center;
          gap: 20px;
          justify-content: space-between;
          background: white;
          padding: 16px;
        }
        .mycart-header h4 {
          font-size: 19px;
          margin: 0;
          flex: 1;
        }
        .mycart-header button {
          border: none;
          background: transparent;
          font-size: 20px;
          cursor: pointer;
        }
        .mycart-content {
          padding: 14px;
          overflow-y: auto;
          flex: 1;
          padding-bottom: 25px;
        }
        .mycart-savings {
          display: flex;
          justify-content: space-between;
          background: #95f900;
          color: #010100;
          padding: 15px;
          border-radius: 20px;
          margin-bottom: 19px;
        }
        .mycart-delivery {
          background: white;
          padding: 20px;
          border-radius: 16px ;
        }
        .mycart-delivery p {
          margin: 5px ;
          color: #777;
          font-size: 14px;
        }
        .mycart-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px;
          background: white;
          border-bottom: 1px solid #eee;
        }
        .mycart-item img {
          width: 75px;
          height: 75px;
          object-fit: contain;
          border: 1px solid #eee;
          border-radius: 10px;
        }
        .mycart-info {
          flex: 1;
          min-width: 0;
        }
        .mycart-info h5 {
          font-size: 14px;
          margin: 0 0 6px;
        }
        .mycart-info p {
          color: #777;
          font-size: 13px;
          margin: 4px 0;
        }
        .mycart-qty {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 7px;
          color: white;
          background: #1d201c;
          border-radius: 8px;
        }
        .mycart-qty button {
          border: none;
          color: white;
          background: transparent;
          font-weight: bold;
          cursor: pointer;
          font-size: 17px;
        }
        .mycart-bill {
          background: white;
          border-radius: 16px;
          padding: 18px;
          margin: 25px 0 15px;
        }
        .mycart-bill h3 {
          font-size: 17px;
          font-weight: bold;
        }
        .mycart-bill p,
        .mycart-bill h3 span {
          display: flex;
          justify-content: space-between;
          gap: 12px;
        }
        .mycart-bill h3 span {
          font-size: 17px;
        }
        .mycart-proceed {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-shrink: 0;
          margin: 10px 14px 16px;
          padding: 16px;
          border: none;
          border-radius: 10px;
          background: #262826;
          color: white;
          font-size: 19px;
          cursor: pointer;
        }
        .mycart-proceed small {
          display: block;
          font-size: 12px;
        }
        .mycart-empty {
          text-align: center;
          padding: 65px 10px;
          color: #555;
        }
        .mycart-empty button {
          background: #16851d;
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 8px;
        }
        @media (max-width: 500px) {
          .mycart-panel {
            width: 100%;
          }
          .mycart-item {
            gap: 8px;
            padding: 10px 5px;
          }
          .mycart-item img {
            width: 60px;
            height: 65px;
          }
          .mycart-qty {
            gap: 6px;
          }
        }
      `}</style>
    </div>
  );
}
export default Cart;