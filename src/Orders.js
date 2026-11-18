import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBoxOpen } from "react-icons/fa";

function Orders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(savedOrders);
  }, [navigate]);

  const formatDate = (value) => {
    try {
      return new Date(value).toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (error) {
      return value;
    }
  };

  return (
    <div className="orders-page">
      <div className="container py-4">
        <h1 className="orders-title">My Orders</h1>
        <p className="orders-subtitle">
          Track your recent purchases from M/s Nikhil Enterprises.
        </p>

        {orders.length === 0 ? (
          <div className="orders-empty">
            <FaBoxOpen size={48} />
            <h2>No orders yet</h2>
            <p>When you place an order, it will appear here.</p>
            <Link to="/products" className="orders-btn">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map((order) => (
              <div className="orders-card" key={order.id}>
                <div className="orders-card-top">
                  <div>
                    <h2>Order #{order.id}</h2>
                    <p>{formatDate(order.date)}</p>
                  </div>
                  <span className="orders-status">{order.status || "Placed"}</span>
                </div>

                <div className="orders-items">
                  {(order.items || []).map((item) => (
                    <div
                      className="orders-item"
                      key={`${order.id}-${item.id}-${item.quantityName}`}
                    >
                      <img src={item.image} alt={item.name} />
                      <div>
                        <h4>{item.name}</h4>
                        <p>
                          {item.quantityName} × {item.quantity}
                        </p>
                      </div>
                      <strong>₹{item.price * item.quantity}</strong>
                    </div>
                  ))}
                </div>

                <div className="orders-meta">
                  <div>
                    <strong>Deliver to</strong>
                    <p>
                      {order.customer?.name}
                      <br />
                      {order.customer?.address}, {order.customer?.city} -{" "}
                      {order.customer?.pincode}
                      <br />
                      Mobile: {order.customer?.mobile}
                    </p>
                  </div>
                  <div className="orders-total">
                    <p>Payment: {order.payment || "COD"}</p>
                    <h3>Total: ₹{order.grandTotal}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .orders-page {
          min-height: 70vh;
          background: #f5f7f6;
          padding-bottom: 40px;
        }
        .orders-title {
          font-size: 32px;
          margin-bottom: 6px;
          color: #122018;
        }
        .orders-subtitle {
          color: #66756c;
          margin-bottom: 24px;
        }
        .orders-empty {
          background: #fff;
          border-radius: 16px;
          padding: 60px 20px;
          text-align: center;
          color: #5f6f66;
          box-shadow: 0 8px 24px rgba(18, 48, 32, 0.06);
        }
        .orders-empty h2 {
          margin: 14px 0 8px;
          color: #1d2d24;
        }
        .orders-btn {
          display: inline-flex;
          margin-top: 14px;
          border-radius: 10px;
          background: #198754;
          color: #fff;
          padding: 12px 20px;
          text-decoration: none;
        }
        .orders-btn:hover {
          background: #146c43;
          color: #fff;
        }
        .orders-list {
          display: grid;
          gap: 18px;
        }
        .orders-card {
          background: #fff;
          border-radius: 16px;
          padding: 22px;
          box-shadow: 0 8px 24px rgba(18, 48, 32, 0.06);
        }
        .orders-card-top {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: flex-start;
          margin-bottom: 16px;
        }
        .orders-card-top h2 {
          font-size: 20px;
          margin: 0 0 4px;
        }
        .orders-card-top p {
          margin: 0;
          color: #708078;
          font-size: 14px;
        }
        .orders-status {
          background: #e8f7ee;
          color: #146c43;
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
        }
        .orders-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
          border-top: 1px solid #eef3ef;
        }
        .orders-item img {
          width: 58px;
          height: 58px;
          object-fit: contain;
          border: 1px solid #e8efe9;
          border-radius: 10px;
          background: #fafcfa;
        }
        .orders-item h4 {
          margin: 0 0 4px;
          font-size: 15px;
        }
        .orders-item p {
          margin: 0;
          color: #708078;
          font-size: 13px;
        }
        .orders-item strong {
          margin-left: auto;
        }
        .orders-meta {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #eef3ef;
        }
        .orders-meta p {
          margin: 6px 0 0;
          color: #55655d;
          font-size: 14px;
          line-height: 1.5;
        }
        .orders-total {
          text-align: right;
        }
        .orders-total h3 {
          margin: 6px 0 0;
          font-size: 20px;
          color: #122018;
        }
        @media (max-width: 768px) {
          .orders-meta {
            flex-direction: column;
          }
          .orders-total {
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
}

export default Orders;
