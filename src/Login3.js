import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login3() {
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
    <>
      <Navbar bg="dark" variant="dark" className="py-2">
        <Container fluid className="px-4">
          <Navbar.Brand>
            <img
              src="/logo.png"
              alt="Logo"
              style={{
                width: "150px",
                height: "60px"
              }}
            />
          </Navbar.Brand>

          <div>
            <span className="text-warning fw-bold">
              Welcome to Login
            </span>
          </div>

        </Container>

      </Navbar>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center bg-light"
        style={{
          minHeight: "calc(100vh - 76px)"
        }}
      >

        <Card
          style={{ width: "400px" }}
          className="shadow p-4"
        >

          {/* LOGO */}

          <div className="text-center mb-4">

            <img
              src="/logo.png"
              alt="Logo"
              style={{
                width: "120px",
                height: "auto"
              }}
            />

            <h3 className="mt-3">
              Login
            </h3>

            <p className="text-muted">
              Welcome back!
            </p>

          </div>
          {error && (
            <Alert variant="danger">
              {error}
            </Alert>
          )}

          <Form onSubmit={handleLogin}>

            <Form.Group className="mb-3">

              <Form.Label>
                Email
              </Form.Label>

              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">

              <Form.Label>
                Password
              </Form.Label>

              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

            </Form.Group>
            <Button
              variant="success"
              type="submit"
              className="w-100"
            >
              Login
            </Button>

          </Form>

        </Card>

      </Container>
    </>
  );
}

export default Login3;

