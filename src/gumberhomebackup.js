import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import {  FaShoppingCart,FaSearch,FaMapMarkerAlt, FaUser, FaHome,FaThLarge,} from "react-icons/fa";
import Cart from "./Cart";
function Gumberheader() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [userMobile, setUserMobile] = useState(
    localStorage.getItem("userMobile") || ""
  );
useEffect(() => {const checkLogin = () => {
   setIsLoggedIn( localStorage.getItem("isLoggedIn") === "true");
      setUserMobile(
        localStorage.getItem("userMobile") || ""
      );
    };
    checkLogin();
    window.addEventListener("focus", checkLogin);
    return () => {
      window.removeEventListener("focus", checkLogin);
    };
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userMobile");
    setIsLoggedIn(false);
    setUserMobile("");
  };
  const [cartOpen, setCartOpen] = useState(false);
const [cartCount, setCartCount] = useState(
  (JSON.parse(localStorage.getItem("cart")) || [])
    .reduce((sum, item) => sum + item.quantity, 0)
);
  return (
    <Navbar
      bg="white"
      expand="lg"
      sticky="top"
      className="shadow-sm"
      style={{
        minHeight: "100px",
        borderBottom: "2px solid #eeeeee",
      }}
    >
      <Container fluid className="px-4">

        {/* LOGO */}
        <Navbar.Brand as={Link} to="/" className="me-4">
          <span
            className="text-success fw-bold"
            style={{
              fontSize: "20px",
            }}
          >
            <FaShoppingCart className="me-2" />
            M/s Nikhil Enterprises
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">

          {/* LOCATION */}
          <div className="location-box me-4 my-2 my-lg-0">
            <div className="fw-bold">
              <FaMapMarkerAlt className="text-success me-1" />
              Sirsa
            </div>

            <small className="text-muted">
              Haryana, India
            </small>
          </div>
          <Form
            className="d-flex me-4 my-2 my-lg-0"
            style={{
              minWidth: "200px",
              flex: 1,
            }}
          >
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FaSearch className="text-success" />
              </span>
              <Form.Control
                type="search"
                placeholder="Search for products..."
                style={{
                  height: "45px",
                  boxShadow: "none",
                }}
              />

            </div>
          </Form>

          <Nav className="align-items-lg-center">
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
            {!isLoggedIn ? (
              <Nav.Link
                as={Link}
                to="/login"
                className="menu-link" >
                <FaUser />
                <span>Login</span>
              </Nav.Link>
            ) : (
              <NavDropdown
                title={
                  <span className="account-title">
                    <FaUser />
                    <span>My Account</span>
                  </span>
                }
                id="account-dropdown"
                align="end"
                className="account-dropdown"
              >
                <div className="account-header">
                  <strong>My Account</strong>
                  <small>
                    {userMobile}
                  </small>
                </div>
                <NavDropdown.Item
                  as={Link}
                  to="/orders"
                >
                  My Orders
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
          <button
  onClick={() => {
    setCartCount(
      (JSON.parse(localStorage.getItem("cart")) || [])
        .reduce((sum, item) => sum + item.quantity, 0)
    );
    setCartOpen(true);
  }}
>
  <FaShoppingCart /> Cart ({cartCount})
</button>

<Cart open={cartOpen} onClose={() => setCartOpen(false)} />
        </Navbar.Collapse>
      </Container>

      <style>
        {`

          .menu-link {
            display: flex !important;
            align-items: center;
            gap: 6px;
            font-weight: 600;
            color: #444 !important;
            margin: 0 5px;
            padding: 10px 8px !important;
            border-radius: 8px;
            transition: 0.2s;
          }

          .menu-link:hover {
            background: #eaf7ef;
            color: #198754 !important;
          }

          .cart-button {
            height: 45px;
            min-width: 95px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            border-radius: 8px;
            font-weight: 600;
          }

          .location-box {
            white-space: nowrap;
          }

          .account-title {
            display: flex;
            align-items: center;
            gap: 6px;
            font-weight: 600;
          }

          .account-dropdown > a {
            color: #444 !important;
            padding: 10px 8px !important;
            border-radius: 8px;
          }

          .account-dropdown > a:hover {
            background: #eaf7ef;
            color: #198754 !important;
          }

          .account-dropdown .dropdown-menu {
            width: 325px;
            padding: 8px 0;
            border: none;
            box-shadow: 0 5px 20px rgba(0,0,0,0.15);
          }

          .account-header {
            padding: 10px 20px 12px;
            display: flex;
            flex-direction: column;
            border-bottom: 1px solid #eeeeee;
          }

          .account-header strong {
            font-size: 18px;
            color: #53677d;
          }

          .account-header small {
            color: #777;
            margin-top: 3px;
          }

          .account-dropdown .dropdown-item {
            padding: 10px 20px;
            color: #53677d;
          }

          .account-dropdown .dropdown-item:hover {
            background: #f5f7f9;
            color: #198754;
          }

          .logout-item {
            color: #555 !important;
          }

          .logout-item:hover {
            color: #dc3545 !important;
          }

          @media (max-width: 991px) {

            .menu-link {
              margin: 3px 0;
            }

            .location-box {
              margin-top: 10px;
            }

            .cart-button {
              width: 100%;
            }

            .account-dropdown .dropdown-menu {
              width: 100%;
            }

          }

        `}
      </style>
    </Navbar>
  );
}

export default Gumberheader;