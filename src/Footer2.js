
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

function Footer2() {
  return (
    <footer
      style={{
        background: "#111827",
        color: "white",
        padding: "50px 20px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "40px",
        }}
      >
        {/* About */}
        <div>
          <h3
            style={{
              color: "#38bdf8",
              marginBottom: "20px",
            }}
          >
            Ladder 2 Success
          </h3>

          <p style={{ lineHeight: "1.8", color: "#d1d5db" }}>
            Quality education and guidance to help students achieve
            their academic and career goals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ marginBottom: "20px" }}>Quick Links</h4>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <a
              href="/"
              style={{
                color: "#d1d5db",
                textDecoration: "none",
              }}
            >
              Home
            </a>

            <a
              href="/about"
              style={{
                color: "#d1d5db",
                textDecoration: "none",
              }}
            >
              About
            </a>

            <a
              href="/course"
              style={{
                color: "#d1d5db",
                textDecoration: "none",
              }}
            >
              Courses
            </a>

            <a
              href="/question"
              style={{
                color: "#d1d5db",
                textDecoration: "none",
              }}
            >
              FAQ
            </a>

            <a
              href="/contact"
              style={{
                color: "#d1d5db",
                textDecoration: "none",
              }}
            >
              Contact
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ marginBottom: "20px" }}>Contact Us</h4>

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            {/* Phone */}
            <a
              href="tel:9416590813"
              title="Call Us"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#2563eb",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                textDecoration: "none",
              }}
            >
              <FaPhoneAlt />
            </a>

            {/* Email */}
            <a
              href="mailto:laddersuccess501@gmail.com"
              title="Email Us"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#f97316",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                textDecoration: "none",
              }}
            >
              <FaEnvelope />
            </a>

            {/* Location */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Shiv+Mandir,+Multani+Colony,+Sirsa,+Haryana+125055"
              target="_blank"
              rel="noreferrer"
              title="Our Location"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#ef4444",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                textDecoration: "none",
              }}
            >
              <FaMapMarkerAlt />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919416590813"
              target="_blank"
              rel="noreferrer"
              title="WhatsApp"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#22c55e",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
                textDecoration: "none",
              }}
            >
              <FaWhatsapp />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@ladder.2.success"
              target="_blank"
              rel="noreferrer"
              title="YouTube"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#dc2626",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "21px",
                textDecoration: "none",
              }}
            >
              <FaYoutube />
            </a>
          </div>

          {/* Address */}
          <p
            style={{
              marginTop: "20px",
              color: "#d1d5db",
              lineHeight: "1.6",
            }}
          >
            Near Shiv Mandir, Multani Colony,
            <br />
            Sirsa, Haryana - 125055
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div
        style={{
          borderTop: "1px solid #374151",
          marginTop: "40px",
          paddingTop: "20px",
          textAlign: "center",
          color: "#9ca3af",
        }}
      >
        <p style={{ margin: 0 }}>
          © 2026 Ladder 2 Success. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer2;

