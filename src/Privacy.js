import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Privacy() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
    setUserName(localStorage.getItem("userName") || "");
    setUserMobile(localStorage.getItem("userMobile") || "");
    setUserEmail(localStorage.getItem("userEmail") || "");

    if (!loggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="privacy-page">
      <div className="container py-4">
        <h1>Account Privacy</h1>
        <p className="privacy-subtitle">
          Your account information and privacy settings for M/s Nikhil
          Enterprises.
        </p>

        <div className="privacy-card">
          <h2>Your Account Details</h2>
          <div className="privacy-row">
            <span>Name</span>
            <strong>{userName || "Not set"}</strong>
          </div>
          <div className="privacy-row">
            <span>Mobile</span>
            <strong>{userMobile || "Not set"}</strong>
          </div>
          <div className="privacy-row">
            <span>Email</span>
            <strong>{userEmail || "Not set"}</strong>
          </div>
          <Link to="/profile" className="privacy-link-btn">
            Update Profile
          </Link>
        </div>

        <div className="privacy-card">
          <h2>Privacy Policy</h2>
          <ul>
            <li>
              We collect your name, mobile number, and email only to manage
              your account and orders.
            </li>
            <li>
              Your login details and order history are stored securely in your
              browser for this store app.
            </li>
            <li>
              We do not sell or share your personal information with third
              parties for marketing.
            </li>
            <li>
              Payment and delivery details are used only to complete your
              purchase.
            </li>
            <li>
              You can update your profile anytime from the My Profile section.
            </li>
            <li>
              Logging out clears your cart and order data from this device.
            </li>
          </ul>
        </div>

        <div className="privacy-card">
          <h2>Your Controls</h2>
          <p>
            You can manage your account from these options:
          </p>
          <div className="privacy-actions">
            <Link to="/profile">My Profile</Link>
            <Link to="/orders">My Orders</Link>
            <Link to="/">Continue Shopping</Link>
          </div>
        </div>
      </div>

      <style>{`
        .privacy-page {
          min-height: 70vh;
          background: #f5f7f6;
          padding-bottom: 40px;
        }
        .privacy-page h1 {
          font-size: 32px;
          margin-bottom: 6px;
          color: #122018;
        }
        .privacy-subtitle {
          color: #66756c;
          margin-bottom: 24px;
        }
        .privacy-card {
          background: #fff;
          border-radius: 16px;
          padding: 22px;
          margin-bottom: 16px;
          box-shadow: 0 8px 24px rgba(18, 48, 32, 0.06);
        }
        .privacy-card h2 {
          font-size: 18px;
          margin: 0 0 14px;
          color: #1d2d24;
        }
        .privacy-row {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid #eef3ef;
          font-size: 15px;
        }
        .privacy-row span {
          color: #708078;
        }
        .privacy-link-btn {
          display: inline-flex;
          margin-top: 16px;
          background: #198754;
          color: #fff;
          text-decoration: none;
          padding: 10px 16px;
          border-radius: 10px;
        }
        .privacy-card ul {
          margin: 0;
          padding-left: 18px;
          color: #44554c;
          line-height: 1.7;
        }
        .privacy-card p {
          color: #55655d;
          margin: 0 0 12px;
        }
        .privacy-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .privacy-actions a {
          background: #e8f3ec;
          color: #146c43;
          text-decoration: none;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
}

export default Privacy;
