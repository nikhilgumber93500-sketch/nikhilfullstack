
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";

function Contact1() {
  return (
    <>
      <section
        style={{
          background: "linear-gradient(135deg, #062c30, #0f5f5c, #14b8a6)",
          padding: "100px 0",
          color: "white",
        }}
      >
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={7}>
              <span
                className="px-3 py-2 rounded-pill"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  display: "inline-block",
                }}
              >
                GET IN TOUCH
              </span>

              <h1
                className="fw-bold mt-4 mb-3"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                }}
              >
                Let's Start a
                <br />
                Conversation
              </h1>

              <p
                className="fs-5"
                style={{
                  color: "rgba(255,255,255,0.8)",
                  maxWidth: "600px",
                }}
              >
                Have a question, project idea or need support? Our team is
                always ready to help you.
              </p>

              <Button
                variant="warning"
                size="lg"
                className="rounded-pill px-4 mt-3 fw-bold"
              >
                Contact Softech <FaArrowRight className="ms-2" />
              </Button>
            </Col>

            <Col lg={5} className="text-center">
              <div
                className="d-inline-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "280px",
                  height: "280px",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                <FaHeadset style={{ fontSize: "120px" }} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CONTACT INFO */}
      <section
        className="py-5"
        style={{ background: "#f0fdfa" }}
      >
        <Container>
          <div className="text-center mb-5">
            <p
              className="fw-bold text-uppercase mb-2"
              style={{ color: "#0f766e" }}
            >
              Contact Information
            </p>

            <h2 className="fw-bold display-6">
              We're Always Happy To Help
            </h2>

            <p
              className="text-secondary mx-auto"
              style={{ maxWidth: "650px" }}
            >
              Reach out to us through any of the following methods. Our team
              will get back to you as soon as possible.
            </p>
          </div>

          <Row className="g-4">
            <Col sm={6} lg={3}>
              <div className="bg-white rounded-4 shadow-sm p-4 h-100 text-center">
                <FaPhoneAlt
                  style={{
                    fontSize: "32px",
                    color: "#0f766e",
                  }}
                />
                <h5 className="fw-bold mt-3">Call Us</h5>
                <p className="text-secondary mb-0">
                  +91 XXXXX XXXXX
                </p>
              </div>
            </Col>

            <Col sm={6} lg={3}>
              <div className="bg-white rounded-4 shadow-sm p-4 h-100 text-center">
                <FaEnvelope
                  style={{
                    fontSize: "32px",
                    color: "#0f766e",
                  }}
                />
                <h5 className="fw-bold mt-3">Email Us</h5>
                <p className="text-secondary mb-0">
                  info@softech.com
                </p>
              </div>
            </Col>

            <Col sm={6} lg={3}>
              <div className="bg-white rounded-4 shadow-sm p-4 h-100 text-center">
                <FaMapMarkerAlt
                  style={{
                    fontSize: "32px",
                    color: "#0f766e",
                  }}
                />
                <h5 className="fw-bold mt-3">Visit Us</h5>
                <p className="text-secondary mb-0">
                  Haryana, India
                </p>
              </div>
            </Col>

            <Col sm={6} lg={3}>
              <div className="bg-white rounded-4 shadow-sm p-4 h-100 text-center">
                <FaClock
                  style={{
                    fontSize: "32px",
                    color: "#0f766e",
                  }}
                />
                <h5 className="fw-bold mt-3">Working Hours</h5>
                <p className="text-secondary mb-0">
                  Mon - Sat: 9AM - 6PM
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CONTACT FORM */}
      <section className="py-5">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={5}>
              <p
                className="fw-bold text-uppercase"
                style={{ color: "#0f766e" }}
              >
                Send Us A Message
              </p>

              <h2 className="fw-bold display-6 mb-4">
                We'd Love To Hear From You
              </h2>

              <p className="text-secondary lh-lg">
                Whether you have a project idea, want to know more about our
                courses or need technical support, simply send us a message.
                Our team will respond as soon as possible.
              </p>

              <div
                className="rounded-4 p-4 mt-4 text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #064e4a, #0f766e)",
                }}
              >
                <FaHeadset style={{ fontSize: "40px" }} />

                <h4 className="fw-bold mt-3">
                  Need Quick Support?
                </h4>

                <p
                  className="mb-0"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  Our support team is ready to assist you with your questions.
                </p>
              </div>
            </Col>
            <Col lg={7}>
              <div className="bg-white rounded-4 shadow p-4 p-md-5">
                <Form>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-semibold">
                          Full Name

                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your name"
                          className="py-2"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-semibold">
                          Email Address
                        </Form.Label>

                        <Form.Control
                          type="email"
                          placeholder="Enter your email"
                          className="py-2"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-semibold">
                          Phone Number
                        </Form.Label>

                        <Form.Control
                          type="tel"
                          placeholder="Enter phone number"
                          className="py-2"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-semibold">
                          Subject
                        </Form.Label>

                        <Form.Control
                          type="text"
                          placeholder="How can we help?"
                          className="py-2"
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label className="fw-semibold">
                          Your Message
                        </Form.Label>

                        <Form.Control
                          as="textarea"
                          rows={3}
            
                          placeholder="Write your message here..."
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Button
                        type="submit"
                        size="lg"
                        className="rounded-pill px-4 fw-bold w-100"
                        style={{
                          background: "#0f766e",
                          border: "none",
                        }}
                      >
                        Send Message <FaPaperPlane className="ms-2" />
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section
        className="py-5 text-white text-center"
        style={{
          background:
            "linear-gradient(135deg, #062c30, #0f766e)",
        }}
      >
        <Container>
          <h2 className="fw-bold">
            Let's Build Something Amazing Together
          </h2>

          <p
            className="mx-auto mt-3"
            style={{
              maxWidth: "600px",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            Your ideas deserve the right technology. Connect with Softech and
            let's turn your vision into reality.
          </p>

          <Button
            variant="danger"
            size="lg"
            className="rounded-pill px-4 fw-bold mt-2"
          >
            Get Started <FaArrowRight className="ms-2" />
          </Button>
        </Container>
      </section>
    </>
  );
}

export default Contact1;

