import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaLock,
  FaSignInAlt,
  FaEnvelope,
} from "react-icons/fa";
function Login1() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const correctEmail = "nikhilgumber93500@gmail.com";
    const correctPassword = "123456";
    if (email === correctEmail && password === correctPassword) {
      setError("");
      navigate("/dashboard");
    } else {
      setError("Invalid Email or Password");
    }
  };
  return (
    <section
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #1e293b 0%, #396cb0 50%, #b82714 100%)",
        display: "flex",
        alignItems: "center",
        padding: "60px 0",
      }}
  >
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={10} lg={5}>
            <div
              className="bg-white rounded-4 shadow-lg overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              <div
                style={{
                  height: "7px",
                  background:
                    "linear-gradient(90deg, #396cb0, #59b938, #b82714)",
                }}
              />
 <div className="p-4 p-md-5">
                <div className="text-center mb-4">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3 shadow-sm"
                    style={{
                      width: "82px",
                      height: "82px",
                      background:
                        "linear-gradient(135deg, #e8f0ff, #e8f8e5)",
                      color: "#396cb0",
                      fontSize: "34px",
                    }}
                  >
                    <FaUser />
                  </div>
                  <h2 className="fw-bold mb-2">
                    Welcome Back!
                  </h2>
                  <p className="text-secondary mb-0">
                    Login to continue your journey with{" "}
                    <span
                      className="fw-bold"
                      style={{ color: "#396cb0" }}
                    >
                      Softech
                    </span>
                  </p>
                </div>
                {error && (
                  <Alert variant="danger" className="rounded-3">
                    {error}
                  </Alert>
                )}
                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">
                      Email Address
                    </Form.Label>
                    <div className="position-relative">
                      <FaEnvelope
                        className="position-absolute"
                        style={{
                          left: "15px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "#396cb0",
                          zIndex: "5",
                        }}
                      />

                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="py-3 ps-5 rounded-3"
                        required
                      />
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">
                      Password
                    </Form.Label>
                    <div className="position-relative">
                      <FaLock
                        className="position-absolute"
                        style={{
                          left: "15px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "#396cb0",
                          zIndex: "5",
                        }}
                      />
                      <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="py-3 ps-5 rounded-3"
                        required
                      />
                    </div>
                  </Form.Group>
                  
                  <Button
                    type="submit"
                    className="w-100 py-3 fw-bold rounded-pill border-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #396cb0, #28558f)",
                    }}
                  >
                    Login
                    <FaSignInAlt className="ms-2" />
                  </Button>

                </Form>

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Login1;

