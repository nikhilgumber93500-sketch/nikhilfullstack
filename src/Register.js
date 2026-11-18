import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileImageMenu from "./ProfileImageMenu";

function getUsers() {
  try {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    return Array.isArray(users) ? users : [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name.trim() || !mobile || !password) {
      alert("Please enter name, mobile number and password");
      return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      alert("Please enter a valid 10 digit mobile number");
      return;
    }

    if (email.trim()) {
      const cleanEmail = email.trim().toLowerCase();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
        alert("Please enter a valid email address");
        return;
      }
    }

    if (password.length < 4) {
      alert("Password should be at least 4 characters");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    const users = getUsers();
    const cleanEmail = email.trim().toLowerCase();

    const alreadyExists = users.some(
      (u) =>
        u.mobile === mobile ||
        (cleanEmail &&
          u.email &&
          u.email.toLowerCase() === cleanEmail)
    );

    if (alreadyExists) {
      alert("Account already exists with this mobile or email. Please login.");
      navigate("/login");
      return;
    }

    const newUser = {
      name: name.trim(),
      mobile,
      email: cleanEmail,
      password,
      image: image || "",
      method: cleanEmail ? "gmail" : "password",
    };

    saveUsers([...users, newUser]);

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", newUser.name);
    localStorage.setItem("userMobile", newUser.mobile);
    localStorage.setItem("userEmail", newUser.email);
    localStorage.setItem("loginMethod", "register");
    if (newUser.image) {
      localStorage.setItem("userImage", newUser.image);
    } else {
      localStorage.removeItem("userImage");
    }

    window.dispatchEvent(new Event("loginUpdated"));
    setShowSuccess(true);
  };

  return (
    <>
      <style>{`
        .register-page {
          min-height: 70vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f5f5f5;
          padding: 30px;
        }
        .register-box {
          width: 440px;
          max-width: 100%;
          background: white;
          padding: 32px;
          border-radius: 20px;
        }
        .register-box h1 {
          text-align: center;
          margin-bottom: 8px;
          font-size: 28px;
          color: #111;
        }
        .register-subtitle {
          text-align: center;
          color: #777;
          margin-bottom: 20px;
          font-size: 14px;
        }
        .register-photo {
          text-align: center;
          margin-bottom: 18px;
        }
        .register-photo-hint {
          margin: 10px 0 0;
          font-size: 13px;
          color: #777;
        }
        .register-group {
          margin-bottom: 16px;
        }
        .register-group label {
          display: block;
          font-size: 15px;
          margin-bottom: 8px;
          color: #222;
        }
        .register-group input {
          width: 100%;
          padding: 12px 15px;
          font-size: 16px;
          border: 2px solid #b7a1a1;
          border-radius: 8px;
          outline: none;
          box-sizing: border-box;
        }
        .register-group input:focus {
          border-color: #ea0f96;
          box-shadow: 0 0 5px rgba(234,15,150,0.3);
        }
        .register-button {
          width: 100%;
          padding: 13px;
          border: none;
          border-radius: 8px;
          background: #ea0f96;
          color: white;
          font-size: 16px;
          cursor: pointer;
        }
        .register-button:hover {
          background: #c90880;
        }
        .register-login-link {
          margin-top: 14px;
          text-align: center;
          font-size: 14px;
          color: #555;
        }
        .register-login-link a {
          color: #ea0f96;
          font-weight: 700;
          text-decoration: none;
        }
        .register-success-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          padding: 20px;
        }
        .register-success-popup {
          width: 100%;
          max-width: 360px;
          background: #fff;
          border-radius: 16px;
          padding: 32px 28px;
          text-align: center;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);
        }
        .register-success-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 16px;
          border-radius: 50%;
          background: #e8f8ef;
          color: #1f9d55;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: 700;
        }
        .register-success-popup h2 {
          margin: 0 0 8px;
          font-size: 22px;
        }
        .register-success-popup p {
          margin: 0 0 22px;
          color: #555;
          font-size: 15px;
        }
        .register-success-btn {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 8px;
          background: #ea0f96;
          color: white;
          font-size: 16px;
          cursor: pointer;
        }
      `}</style>

      <div className="register-page">
        <div className="register-box">
          <h1>Create Account</h1>
          <p className="register-subtitle">
            Register to start shopping with us.
          </p>

          <form onSubmit={handleRegister} autoComplete="off">
            <div className="register-photo">
              <ProfileImageMenu
                image={image}
                onChange={setImage}
                size={100}
                accent="#ea0f96"
              />
              <p className="register-photo-hint">Tap photo for options</p>
            </div>

            <div className="register-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="register-group">
              <label>Mobile Number</label>
              <input
                type="tel"
                placeholder="10 digit mobile number"
                value={mobile}
                maxLength="10"
                onChange={(e) => {
                  if (/^[0-9]*$/.test(e.target.value)) {
                    setMobile(e.target.value);
                  }
                }}
              />
            </div>

            <div className="register-group">
              <label>Email / Gmail (optional)</label>
              <input
                type="email"
                placeholder="yourname@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="register-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Create password"
                value={password}
                autoComplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="register-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                autoComplete="new-password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="register-button">
              Create Account
            </button>
          </form>

          <div className="register-login-link">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="register-success-overlay">
          <div className="register-success-popup" role="dialog">
            <div className="register-success-icon">✓</div>
            <h2>Account Created</h2>
            <p>
              Welcome{name.trim() ? `, ${name.trim()}` : ""}! Your account is
              ready.
            </p>
            <button
              type="button"
              className="register-success-btn"
              onClick={() => {
                setShowSuccess(false);
                navigate("/profile");
              }}
            >
              Go to Profile
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Register;
