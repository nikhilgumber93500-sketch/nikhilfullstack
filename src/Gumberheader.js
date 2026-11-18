import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaShoppingCart,FaSearch,FaMapMarkerAlt,FaUser,FaHome, FaThLarge,} from "react-icons/fa";
import Cart from "./Cart";
function Gumberheader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true");
  const [userMobile, setUserMobile] = useState(
    localStorage.getItem("userMobile") || "");
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || "");
  const [userImage, setUserImage] = useState(
    localStorage.getItem("userImage") || "");
  const [userEmail, setUserEmail] = useState(
    localStorage.getItem("userEmail") || "");
  const [search, setSearch] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showLogoutSuccess, setShowLogoutSuccess] = useState(false);
  const searchTimerRef = useRef(null);
  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(
        localStorage.getItem("isLoggedIn") === "true"
      );
      setUserMobile(
        localStorage.getItem("userMobile") || ""
      );
      setUserName(
        localStorage.getItem("userName") || ""
      );
      setUserImage(
        localStorage.getItem("userImage") || ""
      );
      setUserEmail(
        localStorage.getItem("userEmail") || ""
      );
    };
    checkLogin();
    window.addEventListener("focus", checkLogin);
    window.addEventListener("storage", checkLogin);
    window.addEventListener("loginUpdated", checkLogin);
    return () => {
      window.removeEventListener("focus", checkLogin);
      window.removeEventListener("storage", checkLogin);
      window.removeEventListener("loginUpdated", checkLogin);
    };
  }, []);
  useEffect(() => {
    const updateCartCount = () => {
      try {const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        const count = cart.reduce(
          (total, item) =>
            total + Number(item.quantity || 1),
          0
        );
        setCartCount(count);
      } catch (error) {
        setCartCount(0);
      }
    };
    const openCartPanel = () => setCartOpen(true);
    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);
    window.addEventListener("storage", updateCartCount);
    window.addEventListener("focus", updateCartCount);
    window.addEventListener("openCart", openCartPanel);
    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("focus", updateCartCount);
      window.removeEventListener("openCart", openCartPanel);
    };
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userMobile");
    localStorage.removeItem("userName");
    localStorage.removeItem("userImage");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("loginMethod");
    localStorage.removeItem("orders");
    localStorage.removeItem("cart");
    sessionStorage.removeItem("loginOtp");
    setIsLoggedIn(false);
    setUserMobile("");
    setUserName("");
    setUserImage("");
    setUserEmail("");
    setCartCount(0);
    window.dispatchEvent(new Event("loginUpdated"));
    window.dispatchEvent(new Event("cartUpdated"));
    setShowLogoutSuccess(true);
  };

  const closeLogoutSuccess = () => {
    setShowLogoutSuccess(false);
    navigate("/");
  };
  const goToSearch = (value) => {
    const searchValue = value.trim();
    if (searchValue) {
      navigate(
        `/products?search=${encodeURIComponent(searchValue)}`
      );
    } else if (location.pathname === "/products") {
      navigate("/products");
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (searchTimerRef.current) {
      clearTimeout(searchTimerRef.current);
    }

    // Live filter while typing (no Enter needed)
    searchTimerRef.current = setTimeout(() => {
      goToSearch(value);
    }, 250);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTimerRef.current) {
      clearTimeout(searchTimerRef.current);
    }
    goToSearch(search);
  };

  useEffect(() => {
    return () => {
      if (searchTimerRef.current) {
        clearTimeout(searchTimerRef.current);
      }
    };
  }, []);
  return (
    <>
  <Navbar bg="white" expand="lg"sticky="top"   className="shadow-sm ne-navbar">
        <Container fluid className="px-lg-4 px-3">
  <Navbar.Brand  as={Link}
            to="/"
            className="ne-brand me-lg-4"
          >
            <span className="ne-logo-icon">
              <FaShoppingCart />
            </span>

            <span className="ne-brand-text">
              M/s Nikhil Enterprises
              <small>Everyday Shopping Store</small>
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">

            {/* LOCATION */}
            <div className="location-box me-lg-4 my-3 my-lg-0">
              <div className="fw-bold">
                <FaMapMarkerAlt className="text-success me-1" />
                Sirsa
              </div>

              <small className="text-muted">
                Haryana, India
              </small>
            </div>

            {/* SEARCH */}
            <Form
              className="ne-search me-lg-3 my-2 my-lg-0"
              onSubmit={handleSearch}
            >
              <div className="input-group">
                <span className="input-group-text ne-search-icon">
                  <FaSearch />
                </span>

                <Form.Control
                  type="search"
                  placeholder="Search for products..."
                  value={search}
                  onChange={handleSearchChange}
                  aria-label="Search products"
                />

                <Button
                  type="submit"
                  className="ne-search-button"
                >
                  Search
                </Button>
              </div>
            </Form>

            {/* NAVIGATION */}
            <Nav className="align-items-lg-center ms-lg-auto">

              <Nav.Link
                as={Link}
                to="/"
                className="menu-link"
              >
                <FaHome />
                <span>Home</span>
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/products"
                className="menu-link"
              >
                <FaShoppingCart />
                <span>Products</span>
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/categories"
                className="menu-link"
              >
                <FaThLarge />
                <span>Categories</span>
              </Nav.Link>

              {/* LOGIN / MY ACCOUNT */}
              {!isLoggedIn ? (
                <Nav.Link
                  as={Link}
                  to="/login"
                  className="menu-link"
                >
                  <FaUser />
                  <span>Login</span>
                </Nav.Link>
              ) : (
                <NavDropdown
                  title={
                    <span className="account-title">
                      {userImage ? (
                        <img
                          src={userImage}
                          alt={userName || "User"}
                          className="account-avatar-sm"
                        />
                      ) : (
                        <FaUser />
                      )}
                      <span>{userName || "My Account"}</span>
                    </span>
                  }
                  id="account-dropdown"
                  align="end"
                  className="account-dropdown"
                >
                  <div className="account-header">
                    <div className="account-header-row">
                      {userImage ? (
                        <img
                          src={userImage}
                          alt={userName || "User"}
                          className="account-avatar-lg"
                        />
                      ) : (
                        <span className="account-avatar-fallback">
                          <FaUser />
                        </span>
                      )}
                      <div>
                        <strong>
                          Welcome{userName ? `, ${userName}` : "!"}
                        </strong>
                        <small>
                          {userEmail
                            ? `Email: ${userEmail}`
                            : `Mobile: ${userMobile || "Not available"}`}
                        </small>
                      </div>
                    </div>
                  </div>

                  <NavDropdown.Item
                    as={Link}
                    to="/orders"
                  >
                    My Orders
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={Link}
                    to="/profile"
                  >
                    My Profile
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={Link}
                    to="/privacy"
                  >
                    Account Privacy
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  <NavDropdown.Item
                    onClick={handleLogout}
                    className="logout-item"
                  >
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              )}

            </Nav>

            {/* CART BUTTON */}
            <Button
              type="button"
              className="ne-cart-button ms-lg-3 my-3 my-lg-0"
              onClick={() => setCartOpen(true)}
            >
              <FaShoppingCart />
              <span>Cart</span>

              <span className="ne-cart-count">
                {cartCount}
              </span>
            </Button>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* CART COMPONENT */}
      <Cart
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      />

      {showLogoutSuccess && (
        <div className="logout-success-overlay">
          <div
            className="logout-success-popup"
            role="dialog"
            aria-labelledby="logout-success-title"
          >
            <div className="logout-success-icon" aria-hidden="true">
              ✓
            </div>
            <h2 id="logout-success-title">Logout Successful</h2>
            <p>You have been logged out successfully.</p>
            <button
              type="button"
              className="logout-success-btn"
              onClick={closeLogoutSuccess}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* PREMIUM THEME */}
      <style>{`
        .logout-success-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 20000;
          padding: 20px;
        }

        .logout-success-popup {
          width: 100%;
          max-width: 360px;
          background: #fff;
          border-radius: 16px;
          padding: 32px 28px;
          text-align: center;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);
        }

        .logout-success-icon {
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

        .logout-success-popup h2 {
          margin: 0 0 8px;
          font-size: 22px;
          color: #111;
        }

        .logout-success-popup p {
          margin: 0 0 22px;
          font-size: 15px;
          color: #555;
        }

        .logout-success-btn {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 8px;
          background: #198754;
          color: white;
          font-size: 16px;
          cursor: pointer;
        }

        .logout-success-btn:hover {
          background: #146c43;
        }

        .ne-navbar {
          background: linear-gradient(135deg, #ffffff, #f5fbf7) !important;
          min-height: 95px;
          border-bottom: 2px solid #d9eee1;
          box-shadow: 0 5px 20px rgba(22, 70, 48, 0.08) !important;
        }

        .ne-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ne-brand-text {
          color: #173f2c !important;
          font-size: 19px;
          font-weight: 800;
          letter-spacing: -0.4px;
        }

        .ne-brand-text small {
          display: block;
          color: #248653 !important;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-top: 4px;
        }

        .ne-logo-icon {
          width: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: linear-gradient(135deg, #198754, #0f5132) !important;
          color: white !important;
          font-size: 22px;
          box-shadow: 0 4px 10px rgba(25, 135, 84, 0.2);
          transition: transform 0.25s ease;
        }

        .ne-brand:hover .ne-logo-icon {
          transform: translateY(-2px);
        }

        .location-box {
          color: #263b30;
          white-space: nowrap;
          font-size: 13px;
        }

        .location-box .text-success {
          color: #198754 !important;
        }

        .location-box small {
          color: #718078 !important;
        }

        .ne-search {
          flex: 1;
          min-width: 170px;
          max-width: 380px;
        }

        .ne-search .input-group {
          overflow: hidden;
          border: 1px solid #dce9df !important;
          border-radius: 12px;
          background: #f7faf7;
          transition: all 0.25s ease;
        }

        .ne-search .input-group:focus-within {
          border-color: #198754 !important;
          box-shadow: 0 0 0 4px rgba(25, 135, 84, 0.10);
        }

        .ne-search-icon {
          background: #f7faf7 !important;
          color: #198754 !important;
          border: none !important;
          padding-left: 15px;
        }

        .ne-search .form-control {
          background: #f7faf7 !important;
          color: #263b30 !important;
          border: none !important;
          height: 46px;
          font-size: 13px;
          box-shadow: none !important;
        }

        .ne-search .form-control::placeholder {
          color: #8a9890;
        }

        .ne-search-button {
          background: #198754 !important;
          color: #ffffff !important;
          border: none !important;
          padding: 0 17px !important;
          font-size: 12px !important;
          font-weight: 700 !important;
          transition: background 0.2s ease;
        }

        .ne-search-button:hover {
          background: #125f3a !important;
        }

        .menu-link {
          display: flex !important;
          align-items: center;
          justify-content: center;
          gap: 7px;
          color: #344b3d !important;
          font-size: 13px;
          font-weight: 600;
          margin: 0 3px;
          padding: 11px 10px !important;
          border-radius: 10px;
          transition: all 0.25s ease;
        }

        .menu-link svg {
          color: #198754;
          font-size: 15px;
        }

        .menu-link:hover {
          color: #146c43 !important;
          background: #e6f5eb !important;
          transform: translateY(-1px);
        }

        .account-title {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #344b3d !important;
          font-size: 13px;
          font-weight: 700;
        }

        .account-title svg {
          color: #198754;
        }

        .account-avatar-sm {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          object-fit: cover;
        }

        .account-header-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .account-avatar-lg {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
        }

        .account-avatar-fallback {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #dcefe3;
          color: #198754;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .account-dropdown > a {
          padding: 11px 10px !important;
          border-radius: 10px;
        }

        .account-dropdown > a:hover {
          background: #e6f5eb !important;
        }

        .account-dropdown .dropdown-menu {
          min-width: 255px;
          margin-top: 12px;
          padding: 8px;
          background: #ffffff;
          border: 1px solid #e2eee5 !important;
          border-radius: 14px !important;
          box-shadow: 0 12px 35px rgba(20, 60, 38, 0.13) !important;
        }

        .account-header {
          display: flex;
          flex-direction: column;
          padding: 15px 13px;
          margin-bottom: 5px;
          background: #f0f8f2;
          border-radius: 10px;
          border-bottom: none !important;
        }

        .account-header strong {
          color: #174a30 !important;
          font-size: 16px;
        }

        .account-header small {
          color: #6b7d70 !important;
          margin-top: 5px;
        }

        .account-dropdown .dropdown-item {
          padding: 11px 13px;
          border-radius: 8px;
          color: #344b3d;
          font-size: 13px;
          transition: all 0.2s ease;
        }

        .account-dropdown .dropdown-item:hover {
          background: #e6f5eb !important;
          color: #146c43 !important;
        }

        .account-dropdown .dropdown-divider {
          border-color: #e9f0eb;
        }

        .account-dropdown .logout-item {
          color: #d64045 !important;
        }

        .account-dropdown .logout-item:hover {
          background: #fff0f0 !important;
          color: #b42329 !important;
        }

        .ne-cart-button {
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 10px 16px !important;
          background: linear-gradient(135deg, #198754, #12683f) !important;
          border: none !important;
          border-radius: 11px !important;
          color: #ffffff !important;
          font-size: 13px !important;
          font-weight: 700 !important;
          white-space: nowrap;
          box-shadow: 0 4px 10px rgba(25, 135, 84, 0.15);
          transition: all 0.25s ease;
        }

        .ne-cart-button:hover {
          background: linear-gradient(135deg, #146c43, #0d4b2d) !important;
          box-shadow: 0 6px 15px rgba(25, 135, 84, 0.23);
          transform: translateY(-1px);
        }

        .ne-cart-count {
          min-width: 23px;
          height: 23px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 5px;
          background: #ffdb70 !important;
          color: #173f2c !important;
          border-radius: 50px;
          font-size: 11px;
          font-weight: 800;
        }

        .navbar-toggler {
          border: 1px solid #d7e8dc !important;
          border-radius: 10px !important;
          padding: 8px 10px;
          box-shadow: none !important;
        }

        .navbar-toggler:focus {
          box-shadow: 0 0 0 3px rgba(25, 135, 84, 0.12) !important;
        }

        @media (max-width: 991px) {
          .ne-navbar {
            min-height: 80px;
          }

          .ne-navbar > .container-fluid {
            align-items: center;
          }

          .ne-brand {
            min-width: 0;
            gap: 9px;
          }

          .ne-brand-text {
            font-size: 16px;
            line-height: 1.2;
          }

          .ne-brand-text small {
            line-height: 1.3;
          }

          .navbar-toggler {
            flex-shrink: 0;
            margin-left: 8px;
          }

          .navbar-collapse {
            width: 100%;
            padding-top: 12px;
          }

          .location-box {
            width: 100%;
            margin: 8px 0 12px !important;
            padding: 10px 12px;
            background: #f3faf5;
            border: 1px solid #e0eee4;
            border-radius: 10px;
          }

          .ne-search {
            max-width: 100%;
            width: 100%;
            margin: 4px 0 12px !important;
          }

          .ne-search .input-group {
            width: 100%;
          }

          .menu-link {
            width: 100%;
            justify-content: flex-start;
            margin: 3px 0;
            padding: 13px 12px !important;
            border-radius: 10px;
          }

          .account-dropdown {
            width: 100%;
          }

          .account-dropdown > a {
            width: 100%;
          }

          .account-dropdown .dropdown-menu {
            width: 100%;
            margin-top: 4px;
          }

          .ne-cart-button {
            width: 100%;
            min-height: 48px;
            margin: 12px 0 4px !important;
            border-radius: 12px !important;
          }
        }

        @media (max-width: 575px) {
          .ne-navbar {
            min-height: 72px;
          }

          .ne-navbar .container-fluid {
            padding-left: 12px;
            padding-right: 12px;
          }

          .ne-brand-text {
            font-size: 15px;
            letter-spacing: -0.2px;
          }

          .ne-brand-text small {
            font-size: 9px;
            letter-spacing: 0.2px;
            margin-top: 3px;
          }

          .ne-logo-icon {
            width: 43px;
            height: 43px;
            border-radius: 12px;
            font-size: 20px;
          }

          .navbar-toggler {
            padding: 7px 9px;
          }

          .location-box {
            font-size: 13px;
          }

          .ne-search .form-control {
            height: 44px;
            font-size: 12px;
          }

          .ne-search-icon {
            padding-left: 11px;
            padding-right: 10px;
          }

          .ne-search-button {
            padding: 0 12px !important;
          }
        }

        @media (max-width: 360px) {
          .ne-brand-text {
            font-size: 13px;
          }

          .ne-brand-text small {
            font-size: 8px;
          }

          .ne-logo-icon {
            width: 39px;
            height: 39px;
            font-size: 19px;
          }
        }
      `}</style>
    </>
  );
}

export default Gumberheader;