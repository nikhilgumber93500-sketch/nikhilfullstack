
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

import {
  FaQuestionCircle,
  FaArrowRight,
  FaHeadset,
  FaBookOpen,
} from "react-icons/fa";

function Question1() {
  const faqs = [
    {
      question: "What services does Softech provide?",
      answer:
        "Softech provides modern digital solutions including Web Development, Application Development, UI/UX Design, Software Solutions and technology-based services.",
    },
    {
      question: "Do you provide customized solutions?",
      answer:
        "Yes, we understand that every client has different requirements. Our team creates customized digital solutions according to your specific needs and goals.",
    },
    {
      question: "How can I enroll in a course?",
      answer:
        "You can explore our available courses, choose the course that matches your interest and contact our team for enrollment details.",
    },
    {
      question: "Are the courses suitable for beginners?",
      answer:
        "Yes, our courses are designed to support beginners as well as learners who want to improve their existing technical skills.",
    },
    {
      question: "Do you provide practical projects?",
      answer:
        "Yes, practical learning is an important part of our courses. Students get opportunities to work on projects and improve their real-world skills.",
    },
    {
      question: "Can I get support during my learning journey?",
      answer:
        "Yes, we provide guidance and support to help students understand concepts and progress confidently throughout their learning journey.",
    },
    {
      question: "How can I contact Softech?",
      answer:
        "You can contact Softech through our Contact Us page. Our team will be happy to understand your requirements and assist you.",
    },
  ];

  return (
    <>
      
      <section
        style={{
          background: "linear-gradient(135deg, #9c9c28, #bd9419, #40d928)",
          padding: "100px 0",
          color: "green",
        }}
      >
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={7}>
              <span
                className="px-3 py-2 rounded-pill"
                style={{
                  background: "rgba(220, 77, 15, 0.12)",
                  display: "inline-block",
                }}
              >
                HELP CENTER
              </span>

              <h1
                className="fw-bold mt-4 mb-3"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
              >
                Frequently Asked
                <br />
                Questions
              </h1>

              <p
                className="fs-5 mb-4"
                style={{
                  color: "rgba(255,255,255,0.75)",
                  maxWidth: "600px",
                }}
              >
                Find answers to common questions about Softech, our services,
                courses and learning experience.
              </p>

              <Button
                variant="danger"
                size="lg"
                className="rounded-pill px-4 fw-bold"
              >
                Explore Answers <FaArrowRight className="ms-2" />
              </Button>
            </Col>

            <Col lg={5} className="text-center">
              <div
                className="d-inline-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "280px",
                  height: "280px",
                  background: "rgba(176, 198, 31, 0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <FaQuestionCircle style={{ fontSize: "120px" }} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ SECTION */}
      <section className="py-5" style={{ background: "#f8f7ff" }}>
        <Container>
          <div className="text-center mb-5">
            <p
              className="fw-bold text-uppercase mb-2"
              style={{ color: "#8a8f40" }}
            >
              Got Questions?
            </p>

            <h2 className="fw-bold display-6">
              Everything You Need To Know
            </h2>

            <p
              className="text-secondary mx-auto mt-3"
              style={{ maxWidth: "650px" }}
            >
              Here are some of the most common questions asked by our students
              and clients.
            </p>
          </div>

          <Row className="justify-content-center">
            <Col lg={9}>
              <Accordion>
                {faqs.map((faq, index) => (
                  <Accordion.Item
                    eventKey={index.toString()}
                    key={index}
                    className="mb-3 border-0 rounded-4 shadow-sm overflow-hidden"
                  >
                    <Accordion.Header>
                      <span className="fw-bold">
                        {index + 1}. {faq.question}
                      </span>
                    </Accordion.Header>

                    <Accordion.Body className="text-secondary lh-lg">
                      {faq.answer}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SUPPORT SECTION */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="g-4">
            <Col md={6}>
              <div
                className="rounded-4 p-4 p-md-5 h-100 text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #f4541a, #6524dd)",
                }}
              >
                <FaHeadset style={{ fontSize: "45px" }} />

                <h3 className="fw-bold mt-4">
                  Still Have Questions?
                </h3>

                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Can't find the answer you're looking for? Our team is here
                  to help you with your questions.
                </p>

                <Button
                  variant="success"
                  className="rounded-pill px-4 fw-bold mt-2"
                >
                  Contact Support <FaArrowRight className="ms-2" />
                </Button>
              </div>
            </Col>

            <Col md={6}>
              <div
                className="rounded-4 p-4 p-md-5 h-100"
                style={{
                  background: "#f8f7ff",
                  border: "1px solid #e9d5ff",
                }}
              >
                <FaBookOpen
                  style={{
                    fontSize: "45px",
                    color: "#0b9dd2a7",
                  }}
                />

                <h3 className="fw-bold mt-4">
                  Explore Our Courses
                </h3>

                <p className="text-secondary">
                  Discover industry-focused courses designed to help you build
                  practical skills and grow your knowledge.
                </p>

                <Button
                  className="rounded-pill px-4 mt-2"
                  style={{
                    background: "#b5c01f",
                    border: "none",
                  }}
                >
                  View Courses <FaArrowRight className="ms-2" />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section
        className="py-5 text-center text-white"
        style={{
          background: "linear-gradient(135deg, #ef1726, #4d0341)",
        }}
      >
        <Container>
          <FaQuestionCircle style={{ fontSize: "50px" }} />

          <h2 className="fw-bold mt-3">
            We're Here To Help You
          </h2>

          <p
            className="mx-auto"
            style={{
              maxWidth: "600px",
              color: "rgba(234, 228, 40, 0.8)",
            }}
          >
            Have a question or need more information? Feel free to reach out
            to our team anytime.
          </p>

          <Button
            variant="warning"
            size="lg"
            className="rounded-pill px-4 fw-bold"
          >
            Get In Touch <FaArrowRight className="ms-2" />
          </Button>
        </Container>
      </section>
    </>
  );
}

export default Question1;

