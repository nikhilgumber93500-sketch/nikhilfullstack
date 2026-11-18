import React from "react";
import { Link } from "react-router-dom";
import {  FaShoppingCart,FaHome,FaBoxOpen, FaThLarge,
  FaShoppingBag,
  FaUser,
  FaUserPlus,
  FaCreditCard,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaHeart,
} from "react-icons/fa";

function Gumberfooter() {
  return (
    <footer className="gumber-footer">
      <div className="container">
        <div className="row g-4 footer-main">
          <div className="col-lg-4 col-md-6">
            <Link to="/" className="footer-brand">
              <span className="footer-logo-icon">
                <FaShoppingCart />
              </span>
              <span className="footer-brand-text">
                M/s Nikhil Enterprises
                <small>EVERYDAY SHOPPING STORE</small>
              </span>
            </Link>

            <p className="footer-text">
              Your trusted destination for quality products,
              great prices and a simple shopping experience.
            </p>

            <Link to="/products" className="footer-shop-button">
              Explore Products <FaArrowRight />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="footer-heading">Explore</h5>

            <ul className="footer-links">
              <li>
                <Link to="/">
                  <FaHome />
                  <span>Home</span>
                </Link>
              </li>

              <li>
                <Link to="/products">
                  <FaShoppingBag />
                  <span>Products</span>
                </Link>
              </li>

              <li>
                <Link to="/categories">
                  <FaThLarge />
                  <span>Categories</span>
                </Link>
              </li>

              <li>
                <button
                  type="button"
                  className="footer-cart-link"
                  onClick={() => window.dispatchEvent(new Event("openCart"))}
                >
                  <FaShoppingCart />
                  <span>My Cart</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="footer-heading">My Account</h5>

            <ul className="footer-links">
              <li>
                <Link to="/login">
                  <FaUser />
                  <span>Login</span>
                </Link>
              </li>

              <li>
                <Link to="/register" className="footer-register-link">
                  <FaUserPlus />
                  <span>Register</span>
                  <span className="footer-new-badge">NEW</span>
                </Link>
              </li>

              <li>
                <Link to="/orders">
                  <FaBoxOpen />
                  <span>My Orders</span>
                </Link>
              </li>

              <li>
                <Link to="/checkout">
                  <FaCreditCard />
                  <span>Checkout</span>
                </Link>
              </li>
            </ul>

            <Link to="/register" className="footer-register-button">
              <FaUserPlus /> Create Account
            </Link>
          </div>

          {/* Contact Details */}
          <div className="col-lg-4 col-md-6">
            <h5 className="footer-heading">Contact Us</h5>

            <p className="footer-contact-intro">
              Need help? We are happy to assist you.
            </p>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <FaMapMarkerAlt />
              </span>

              <div>
                <small>Our Location</small>
                <p>Sirsa, Haryana, India</p>
              </div>
            </div>

            <a
              href="tel:9350042352"
              className="footer-contact-item footer-contact-link"
            >
              <span className="footer-contact-icon">
                <FaPhone />
              </span>

              <div>
                <small>Call Us</small>
                <p>93500-42352</p>
              </div>
            </a>

            <a
              href="mailto:nikhilgumber93500@gmail.com"
              className="footer-contact-item footer-contact-link"
            >
              <span className="footer-contact-icon">
                <FaEnvelope />
              </span>

              <div>
                <small>Email Us</small>
                <p className="footer-email">
                  nikhilgumber93500@gmail.com
                </p>
              </div>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center gy-2">

            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0">
                © 2026{" "}
                <strong>M/s Nikhil Enterprises</strong>.
                All Rights Reserved.
              </p>
            </div>

            <div className="col-md-6 text-center text-md-end">
              <span className="footer-made">
                Made with <FaHeart className="footer-heart" /> for our customers
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Styling */}
      <style>{`

        /* Main Footer */
        .gumber-footer {
          background: linear-gradient(
            125deg,
            #211b19 0%,
            #30231e 50%,
            #1b1918 100%
          );
          color: #ffffff;
          margin-top: 25px;
          font-family: Arial, sans-serif;
          border-top: 3px solid #ff914d;
        }

        .gumber-footer .container {
          max-width: 1320px;
        }

        /* Compact Layout */
        .footer-main {
          padding-top: 28px;
          padding-bottom: 20px;
        }

        /* Brand */
        .footer-brand {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          text-decoration: none;
          color: #ffffff;
        }

        .footer-brand:hover {
          color: #ffffff;
        }

        .footer-logo-icon {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 12px;
          background: linear-gradient(135deg, #ffad66, #ff7139);
          color: #251a15;
          font-size: 21px;
          box-shadow: 0 5px 15px rgba(255, 129, 61, 0.15);
        }

        .footer-brand-text {
          color: #ffffff;
          font-size: 17px;
          font-weight: 800;
          line-height: 1.4;
        }

        .footer-brand-text small {
          display: block;
          margin-top: 3px;
          color: #ffad75;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.8px;
        }

        /* Description */
        .footer-text {
          max-width: 365px;
          color: #d0c6c0;
          font-size: 12px;
          line-height: 1.8;
          margin-top: 15px;
          margin-bottom: 12px;
        }

        /* Shop Button */
        .footer-shop-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          margin-top: 3px;
          padding: 9px 14px;
          border: 1px solid #ff914d;
          border-radius: 7px;
          background: #ff914d;
          color: #241914;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          transition: all 0.25s ease;
        }

        .footer-shop-button:hover {
          background: #ffb27e;
          border-color: #ffb27e;
          color: #241914;
          transform: translateY(-2px);
        }

        /* Headings */
        .footer-heading {
          position: relative;
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 19px;
          padding-bottom: 9px;
        }

        .footer-heading::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 30px;
          height: 3px;
          border-radius: 5px;
          background: #ff914d;
        }

        /* Links */
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 11px;
        }

        .footer-links a,
        .footer-cart-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #d0c6c0;
          text-decoration: none;
          font-size: 12px;
          transition: all 0.2s ease;
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          font-family: inherit;
        }

        .footer-links a svg,
        .footer-cart-link svg {
          width: 14px;
          color: #ff9b5e;
          flex-shrink: 0;
        }

        .footer-links a:hover,
        .footer-cart-link:hover {
          color: #ffb27e;
          transform: translateX(3px);
        }

        /* Register Highlight */
        .footer-register-link {
          color: #ffb27e !important;
        }

        .footer-register-link svg {
          color: #ff914d !important;
        }

        .footer-new-badge {
          padding: 2px 5px;
          background: #ff914d;
          color: #241914;
          font-size: 8px;
          font-weight: 800;
          border-radius: 4px;
          letter-spacing: 0.3px;
        }

        .footer-register-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 7px 9px;
          margin-top: 2px;
          border-radius: 6px;
          background: rgba(255, 145, 77, 0.12);
          border: 1px solid rgba(255, 145, 77, 0.5);
          color: #ffb27e;
          font-size: 10px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .footer-register-button:hover {
          background: #ff914d;
          color: #241914;
        }

        /* Contact */
        .footer-contact-intro {
          color: #d0c6c0;
          font-size: 12px;
          line-height: 1.6;
          margin-top: -5px;
          margin-bottom: 14px;
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 12px;
          color: #d0c6c0;
          text-decoration: none;
        }

        .footer-contact-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(255, 145, 77, 0.3);
          border-radius: 8px;
          background: rgba(255, 145, 77, 0.08);
          color: #ffad75;
          font-size: 13px;
          transition: all 0.2s ease;
        }

        .footer-contact-item small {
          display: block;
          margin-bottom: 3px;
          color: #b9a69b;
          font-size: 10px;
        }

        .footer-contact-item p {
          margin: 0;
          color: #f0e6df;
          font-size: 12px;
          line-height: 1.6;
          overflow-wrap: anywhere;
        }

        .footer-contact-link:hover {
          color: #ffffff;
        }

        .footer-contact-link:hover .footer-contact-icon {
          background: #ff914d;
          color: #241914;
        }

        /* Bottom Bar */
        .footer-bottom {
          background: #171413;
          border-top: 1px solid #40302a;
          padding: 11px 0;
          color: #bfb4ae;
          font-size: 11px;
          line-height: 1.7;
        }

        .footer-bottom strong {
          color: #ffad75;
        }

        .footer-made {
          color: #d0c6c0;
        }

        .footer-heart {
          color: #ff795e;
          margin: 0 3px;
          font-size: 12px;
        }

        /* Tablet */
        @media (max-width: 991px) {
          .footer-main {
            padding-top: 24px;
            padding-bottom: 18px;
          }

          .footer-brand-text {
            font-size: 16px;
          }

          .footer-heading {
            margin-bottom: 16px;
          }
        }

        /* Mobile */
        @media (max-width: 767px) {
          .gumber-footer {
            margin-top: 20px;
          }

          .footer-main {
            padding-top: 22px;
            padding-bottom: 14px;
          }

          .footer-brand-text {
            font-size: 15px;
          }

          .footer-logo-icon {
            width: 40px;
            height: 40px;
            font-size: 19px;
          }

          .footer-text {
            max-width: 100%;
            font-size: 12px;
            line-height: 1.7;
          }

          .footer-heading {
            font-size: 13px;
            margin-bottom: 14px;
          }

          .footer-links li {
            margin-bottom: 10px;
          }

          .footer-links a {
            gap: 7px;
            font-size: 11px;
          }

          .footer-register-button {
            font-size: 9px;
            padding: 6px 7px;
          }

          .footer-contact-item {
            gap: 8px;
            margin-bottom: 11px;
          }

          .footer-contact-icon {
            width: 29px;
            height: 29px;
            font-size: 12px;
          }

          .footer-contact-item p {
            font-size: 11px;
          }

          .footer-bottom {
            padding: 10px 0;
            font-size: 10px;
          }
        }

        /* Small Mobile */
        @media (max-width: 380px) {
          .footer-brand {
            gap: 8px;
          }

          .footer-brand-text {
            font-size: 13px;
          }

          .footer-brand-text small {
            font-size: 8px;
          }

          .footer-logo-icon {
            width: 36px;
            height: 36px;
            font-size: 16px;
          }

          .footer-links a {
            font-size: 10px;
          }
        }
      `}</style>
    </footer>
  );
}
export default Gumberfooter;