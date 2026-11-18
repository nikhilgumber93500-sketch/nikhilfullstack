import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaGoogle, FaKey, FaMobileAlt } from "react-icons/fa";
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

function Login() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("password"); // password | otp | gmail
  const [gmailMode, setGmailMode] = useState("login"); // login | signup

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otpTimer, setOtpTimer] = useState(0);
  const [showOtpPopup, setShowOtpPopup] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);
  const [successName, setSuccessName] = useState("");

  useEffect(() => {
    if (otpTimer <= 0) return undefined;
    const id = setTimeout(() => setOtpTimer((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [otpTimer]);

  const completeLogin = (user) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", user.name || "");
    localStorage.setItem("userMobile", user.mobile || "");
    localStorage.setItem("userEmail", user.email || "");
    localStorage.setItem("loginMethod", user.method || "password");

    if (user.image) {
      localStorage.setItem("userImage", user.image);
    } else if (image) {
      localStorage.setItem("userImage", image);
    } else {
      localStorage.removeItem("userImage");
    }

    window.dispatchEvent(new Event("loginUpdated"));
    setSuccessName(user.name || "");
    setShowSuccess(true);
  };

  const upsertUser = (userData) => {
    const users = getUsers();
    const index = users.findIndex(
      (u) =>
        (userData.email &&
          u.email &&
          u.email.toLowerCase() === userData.email.toLowerCase()) ||
        (userData.mobile && u.mobile === userData.mobile)
    );

    if (index >= 0) {
      users[index] = { ...users[index], ...userData };
    } else {
      users.push(userData);
    }

    saveUsers(users);
    return userData;
  };

  const goHomeAfterLogin = () => {
    setShowSuccess(false);
    navigate("/profile");
  };

  const handlePasswordLogin = (e) => {
    e.preventDefault();

    if (name.trim() === "" || mobile === "" || password === "") {
      alert("Please enter name, mobile number and password");
      return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      alert("Please enter a valid 10 digit mobile number");
      return;
    }

    const user = upsertUser({
      name: name.trim(),
      mobile,
      password,
      image: image || "",
      method: "password",
      email: "",
    });

    completeLogin(user);
  };

  const handleSendOtp = () => {
    if (!/^[0-9]{10}$/.test(mobile)) {
      alert("Please enter a valid 10 digit mobile number");
      return;
    }

    if (otpTimer > 0) return;

    const code = String(Math.floor(100000 + Math.random() * 900000));
    setGeneratedOtp(code);
    setOtp("");
    setOtpSent(true);
    setOtpTimer(30);
    setShowOtpPopup(true);

    sessionStorage.setItem(
      "loginOtp",
      JSON.stringify({ mobile, code, expires: Date.now() + 5 * 60 * 1000 })
    );
  };

  const handleOtpLogin = (e) => {
    e.preventDefault();

    if (!/^[0-9]{10}$/.test(mobile)) {
      alert("Please enter a valid 10 digit mobile number");
      return;
    }

    if (!otpSent) {
      alert("Please send OTP first");
      return;
    }

    if (!/^[0-9]{6}$/.test(otp)) {
      alert("Please enter the 6 digit OTP");
      return;
    }

    let saved = null;
    try {
      saved = JSON.parse(sessionStorage.getItem("loginOtp") || "null");
    } catch {
      saved = null;
    }

    if (
      !saved ||
      saved.mobile !== mobile ||
      saved.code !== otp ||
      Date.now() > saved.expires
    ) {
      alert("Invalid or expired OTP");
      return;
    }

    sessionStorage.removeItem("loginOtp");

    const existing = getUsers().find((u) => u.mobile === mobile);
    const user = upsertUser({
      name: name.trim() || existing?.name || `User ${mobile.slice(-4)}`,
      mobile,
      email: existing?.email || "",
      image: image || existing?.image || "",
      method: "otp",
    });

    completeLogin(user);
  };

  const handleGmailAuth = (e) => {
    e.preventDefault();

    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail) {
      alert("Please enter your Gmail address");
      return;
    }

    if (!/^[^\s@]+@gmail\.com$/.test(cleanEmail)) {
      alert("Please enter a valid Gmail address (example@gmail.com)");
      return;
    }

    const users = getUsers();
    const existing = users.find(
      (u) => u.email && u.email.toLowerCase() === cleanEmail
    );

    if (gmailMode === "signup") {
      if (!name.trim()) {
        alert("Please enter your name to sign up");
        return;
      }

      if (existing) {
        alert("This Gmail is already signed up. Please login instead.");
        setGmailMode("login");
        return;
      }

      const user = upsertUser({
        name: name.trim(),
        email: cleanEmail,
        mobile: mobile || "",
        image: image || "",
        method: "gmail",
        password: "",
      });

      completeLogin(user);
      return;
    }

    // Gmail login
    if (!existing) {
      alert("No account found with this Gmail. Please sign up first.");
      setGmailMode("signup");
      return;
    }

    completeLogin({
      ...existing,
      method: "gmail",
      image: image || existing.image || "",
    });
  };

  return (
    <>
      <style>
        {`
          .login-page {
            min-height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #f5f5f5;
            padding: 30px;
          }
          .login-box {
            width: 440px;
            max-width: 100%;
            background: white;
            padding: 30px;
            border-radius: 20px;
          }
          .login-box h1 {
            text-align: center;
            margin-bottom: 18px;
            font-size: 28px;
            color: #111;
          }
          .login-tabs {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
            margin-bottom: 20px;
          }
          .login-tab {
            border: 1px solid #e5d0db;
            background: #fff;
            color: #555;
            border-radius: 10px;
            padding: 10px 6px;
            font-size: 13px;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
          }
          .login-tab.active {
            background: #ea0f96;
            border-color: #ea0f96;
            color: #fff;
          }
          .login-photo {
            text-align: center;
            margin-bottom: 18px;
          }
          .login-photo-hint {
            margin: 10px 0 0;
            font-size: 13px;
            color: #777;
          }
          .login-group {
            margin-bottom: 16px;
          }
          .login-group label {
            display: block;
            font-size: 15px;
            margin-bottom: 8px;
            color: #222;
          }
          .login-group input {
            width: 100%;
            padding: 12px 15px;
            font-size: 16px;
            border: 2px solid #b7a1a1;
            border-radius: 8px;
            outline: none;
            box-sizing: border-box;
          }
          .login-group input:focus {
            border-color: #ea0f96;
            box-shadow: 0 0 5px rgba(234,15,150,0.3);
          }
          .login-otp-row {
            display: flex;
            gap: 8px;
          }
          .login-otp-row input {
            flex: 1;
          }
          .login-otp-send {
            border: none;
            border-radius: 8px;
            background: #222;
            color: #fff;
            padding: 0 14px;
            white-space: nowrap;
            cursor: pointer;
            font-size: 13px;
          }
          .login-otp-send:disabled {
            opacity: 0.55;
            cursor: not-allowed;
          }
          .login-button {
            width: 100%;
            padding: 13px;
            border: none;
            border-radius: 8px;
            background: #ea0f96;
            color: white;
            font-size: 16px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
          }
          .login-button:hover {
            background: #c90880;
          }
          .login-button.google {
            background: #fff;
            color: #222;
            border: 1px solid #dadce0;
          }
          .login-button.google:hover {
            background: #f8f9fa;
          }
          .login-switch {
            margin-top: 14px;
            text-align: center;
            font-size: 14px;
            color: #555;
          }
          .login-switch button {
            border: none;
            background: transparent;
            color: #ea0f96;
            font-weight: 700;
            cursor: pointer;
          }
          .login-note {
            margin: 0 0 14px;
            font-size: 13px;
            color: #777;
            text-align: center;
          }
          .login-success-overlay,
          .login-otp-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.45);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            padding: 20px;
          }
          .login-success-popup,
          .login-otp-popup {
            width: 100%;
            max-width: 360px;
            background: #fff;
            border-radius: 16px;
            padding: 32px 28px;
            text-align: center;
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);
          }
          .login-success-icon {
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
            line-height: 1;
          }
          .login-success-popup h2,
          .login-otp-popup h2 {
            margin: 0 0 8px;
            font-size: 22px;
            color: #111;
          }
          .login-success-popup p,
          .login-otp-popup p {
            margin: 0 0 18px;
            font-size: 15px;
            color: #555;
          }
          .login-otp-code {
            font-size: 32px;
            letter-spacing: 8px;
            font-weight: 800;
            color: #ea0f96;
            margin-bottom: 18px;
          }
          .login-success-btn {
            width: 100%;
            padding: 12px;
            border: none;
            border-radius: 8px;
            background: #ea0f96;
            color: white;
            font-size: 16px;
            cursor: pointer;
          }
          @media (max-width: 600px) {
            .login-page {
              padding: 20px;
            }
            .login-box {
              width: 100%;
              padding: 22px;
            }
            .login-box h1 {
              font-size: 24px;
            }
          }
        `}
      </style>

      <div className="login-page">
        <div className="login-box">
          <h1>
            {mode === "gmail" && gmailMode === "signup"
              ? "Sign Up"
              : "Login"}
          </h1>

          <div className="login-tabs">
            <button
              type="button"
              className={`login-tab ${mode === "password" ? "active" : ""}`}
              onClick={() => setMode("password")}
            >
              <FaKey /> Password
            </button>
            <button
              type="button"
              className={`login-tab ${mode === "otp" ? "active" : ""}`}
              onClick={() => setMode("otp")}
            >
              <FaMobileAlt /> OTP
            </button>
            <button
              type="button"
              className={`login-tab ${mode === "gmail" ? "active" : ""}`}
              onClick={() => setMode("gmail")}
            >
              <FaGoogle /> Gmail
            </button>
          </div>

          {(mode === "password" ||
            (mode === "gmail" && gmailMode === "signup") ||
            mode === "otp") && (
            <div className="login-photo">
              <ProfileImageMenu
                image={image}
                onChange={setImage}
                size={100}
                accent="#ea0f96"
              />
              <p className="login-photo-hint">Tap photo for options</p>
            </div>
          )}

          {mode === "password" && (
            <form onSubmit={handlePasswordLogin} autoComplete="off">
              <div className="login-group">
                <label>User Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="login-group">
                <label>Mobile Number</label>
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  value={mobile}
                  maxLength="10"
                  onChange={(e) => {
                    if (/^[0-9]*$/.test(e.target.value)) {
                      setMobile(e.target.value);
                    }
                  }}
                />
              </div>

              <div className="login-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="login-button">
                Login / Sign In
              </button>
            </form>
          )}

          {mode === "otp" && (
            <form onSubmit={handleOtpLogin} autoComplete="off">
              <p className="login-note">
                Enter mobile number, get OTP, then login.
              </p>

              <div className="login-group">
                <label>User Name (optional)</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="login-group">
                <label>Mobile Number</label>
                <div className="login-otp-row">
                  <input
                    type="tel"
                    placeholder="10 digit mobile"
                    value={mobile}
                    maxLength="10"
                    onChange={(e) => {
                      if (/^[0-9]*$/.test(e.target.value)) {
                        setMobile(e.target.value);
                        setOtpSent(false);
                      }
                    }}
                  />
                  <button
                    type="button"
                    className="login-otp-send"
                    onClick={handleSendOtp}
                    disabled={otpTimer > 0}
                  >
                    {otpTimer > 0 ? `Resend ${otpTimer}s` : "Send OTP"}
                  </button>
                </div>
              </div>

              <div className="login-group">
                <label>Enter OTP</label>
                <input
                  type="tel"
                  placeholder="6 digit OTP"
                  value={otp}
                  maxLength="6"
                  onChange={(e) => {
                    if (/^[0-9]*$/.test(e.target.value)) {
                      setOtp(e.target.value);
                    }
                  }}
                />
              </div>

              <button type="submit" className="login-button">
                <FaMobileAlt /> Login with OTP
              </button>
            </form>
          )}

          {mode === "gmail" && (
            <form onSubmit={handleGmailAuth} autoComplete="off">
              <p className="login-note">
                {gmailMode === "signup"
                  ? "Create account with your Gmail."
                  : "Login with your signed up Gmail."}
              </p>

              {gmailMode === "signup" && (
                <div className="login-group">
                  <label>User Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              )}

              <div className="login-group">
                <label>Gmail Address</label>
                <input
                  type="email"
                  placeholder="yourname@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {gmailMode === "signup" && (
                <div className="login-group">
                  <label>Mobile Number (optional)</label>
                  <input
                    type="tel"
                    placeholder="Enter mobile number"
                    value={mobile}
                    maxLength="10"
                    onChange={(e) => {
                      if (/^[0-9]*$/.test(e.target.value)) {
                        setMobile(e.target.value);
                      }
                    }}
                  />
                </div>
              )}

              <button type="submit" className="login-button google">
                {gmailMode === "signup" ? (
                  <>
                    <FaEnvelope /> Sign Up with Gmail
                  </>
                ) : (
                  <>
                    <FaGoogle /> Login with Gmail
                  </>
                )}
              </button>

              <div className="login-switch">
                {gmailMode === "login" ? (
                  <>
                    New user?{" "}
                    <button type="button" onClick={() => setGmailMode("signup")}>
                      Sign Up
                    </button>
                  </>
                ) : (
                  <>
                    Already signed up?{" "}
                    <button type="button" onClick={() => setGmailMode("login")}>
                      Login
                    </button>
                  </>
                )}
              </div>
            </form>
          )}
        </div>
      </div>

      {showOtpPopup && (
        <div className="login-otp-overlay">
          <div className="login-otp-popup" role="dialog">
            <h2>OTP Sent</h2>
            <p>
              OTP has been generated for <strong>{mobile}</strong>
            </p>
            <div className="login-otp-code">{generatedOtp}</div>
            <p>Enter this OTP to login.</p>
            <button
              type="button"
              className="login-success-btn"
              onClick={() => setShowOtpPopup(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="login-success-overlay">
          <div
            className="login-success-popup"
            role="dialog"
            aria-labelledby="login-success-title"
          >
            <div className="login-success-icon" aria-hidden="true">
              ✓
            </div>
            <h2 id="login-success-title">Login Successful</h2>
            <p>
              Welcome{successName ? `, ${successName}` : ""}! Your profile is
              ready.
            </p>
            <button
              type="button"
              className="login-success-btn"
              onClick={goHomeAfterLogin}
            >
              Go to Profile
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
