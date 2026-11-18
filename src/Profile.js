import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileImageMenu from "./ProfileImageMenu";

function Profile() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [loginMethod, setLoginMethod] = useState("");
  const [image, setImage] = useState("");
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/login");
      return;    }
    setName(localStorage.getItem("userName") || "");
    setMobile(localStorage.getItem("userMobile") || "");
    setEmail(localStorage.getItem("userEmail") || "");
    setLoginMethod(localStorage.getItem("loginMethod") || "");
    setImage(localStorage.getItem("userImage") || "");
  }, [navigate]);
  const handleSave = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }
    if (mobile.trim() && !/^[0-9]{10}$/.test(mobile.trim())) {
      alert("Please enter a valid 10 digit mobile number");
      return;
    }
    if (
      email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim().toLowerCase())
    ) {
      alert("Please enter a valid email address");
      return;
    }
    localStorage.setItem("userName", name.trim());
    localStorage.setItem("userMobile", mobile.trim());
    localStorage.setItem("userEmail", email.trim().toLowerCase());
    if (image) {
      localStorage.setItem("userImage", image);
    } else {
      localStorage.removeItem("userImage");
    }

    window.dispatchEvent(new Event("loginUpdated"));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };
  return (
    <div className="profile-page">
      <div className="container py-4">
        <h1 className="profile-title">My Profile</h1>
        <p className="profile-subtitle">
          View and update your account details.
        </p>

        <form className="profile-card" onSubmit={handleSave}>
          <div className="profile-photo-wrap">
            <ProfileImageMenu
              image={image}
              onChange={setImage}
              size={120}
              accent="#198754"
            />
            <p className="profile-photo-hint">Tap photo for options</p>
          </div>
          <div className="profile-field">
            <label>User Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="profile-field">
            <label>Mobile Number</label>
            <input
              type="tel"
              value={mobile}
              maxLength="10"
              onChange={(e) => {
                if (/^[0-9]*$/.test(e.target.value)) {
                  setMobile(e.target.value);
                }
              }}
              placeholder="Enter mobile number"
            />
          </div>
          <div className="profile-field">
            <label>Gmail / Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="yourname@gmail.com"
            />
          </div>

          {loginMethod && (
            <p className="profile-method">
              Logged in with: <strong>{loginMethod.toUpperCase()}</strong>
            </p>
          )}
          <button type="submit" className="profile-save-btn">
            Save Profile
          </button>
          {saved && (
            <p className="profile-saved-msg">Profile updated successfully</p>
          )}
        </form>
      </div>
      <style>{`
        .profile-page {
          min-height: 70vh;
          background: #f5f7f6;
          padding-bottom: 40px;
        }
        .profile-title {
          font-size: 32px;
          margin-bottom: 6px;
          color: #122018;
        }
        .profile-subtitle {
          color: #66756c;
          margin-bottom: 24px;
        }
        .profile-card {
          max-width: 480px;
          background: #fff;
          border-radius: 16px;
          padding: 28px;
          box-shadow: 0 8px 24px rgba(18, 48, 32, 0.06);
        }
        .profile-photo-wrap {
          text-align: center;
          margin-bottom: 24px;
        }
        .profile-photo-hint {
          margin: 10px 0 0;
          font-size: 13px;
          color: #708078;
        }
        .profile-field {
          margin-bottom: 16px;
        }
        .profile-field label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #24352c;
        }
        .profile-field input {
          width: 100%;
          border: 1px solid #d7e4db;
          border-radius: 10px;
          padding: 12px 14px;
          font-size: 15px;
          outline: none;
        }
        .profile-field input:focus {
          border-color: #198754;
          box-shadow: 0 0 0 3px rgba(25, 135, 84, 0.12);
        }
        .profile-save-btn {
          width: 100%;
          border: none;
          border-radius: 10px;
          background: #198754;
          color: #fff;
          padding: 13px;
          font-size: 16px;
          cursor: pointer;
        }
        .profile-save-btn:hover {
          background: #146c43;
        }
        .profile-saved-msg {
          margin: 14px 0 0;
          text-align: center;
          color: #198754;
          font-weight: 600;
        }
        .profile-method {
          margin: 0 0 16px;
          color: #55655d;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
}
export default Profile;
