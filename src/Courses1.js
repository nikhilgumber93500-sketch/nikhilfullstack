import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {
  FaStar,
  FaClock,
  FaBookOpen,
  FaUser,
  FaArrowRight,
  FaCode,
  FaDatabase,
  FaPalette,
  FaMobileAlt,
} from "react-icons/fa";

function Courses1() {
  const courses = [
    {
      title: "Complete Web Development",
      category: "Development",
      icon: <FaCode />,
      lessons: "45 Lessons",
      duration: "24 Weeks",
      students: "1,200+ Students",
      rating: "4.8",
      price: "₹44,999",
    },
    {
      title: "React JS Masterclass",
      category: "Frontend",
      icon: <FaCode />,
      lessons: "30 Lessons",
      duration: "8 Weeks",
      students: "850+ Students",
      rating: "4.9",
      price: "₹9,499",
    },
    {
      title: "Python Programming",
      category: "Programming",
      icon: <FaCode />,
      lessons: "40 Lessons",
      duration: "10 Weeks",
      students: "1,500+ Students",
      rating: "4.7",
      price: "₹9,799",
    },
    {
      title: "Database Management",
      category: "Database",
      icon: <FaDatabase />,
      lessons: "28 Lessons",
      duration: "6 Weeks",
      students: "700+ Students",
      rating: "4.6",
      price: "₹19,999",
    },
    {
      title: "UI / UX Design",
      category: "Design",
      icon: <FaPalette />,
      lessons: "35 Lessons",
      duration: "8 Weeks",
      students: "900+ Students",
      rating: "4.8",
      price: "₹11,599",
    },
    {
      title: "Mobile App Development",
      category: "Development",
      icon: <FaMobileAlt />,
      lessons: "42 Lessons",
      duration: "20 Weeks",
      students: "650+ Students",
      rating: "4.7",
      price: "₹23,999",
    },
  ];

  return (
    <>

      <section
        style={{
          background:
            "linear-gradient(135deg, #4c1d95, #6d28d9, #312e81)",
          padding: "100px 0",
          color: "white",
          overflow: "hidden",
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
                Learn Without Limits
              </span>

              <h1
                className="fw-bold mt-4 mb-3"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
              >
                Upgrade Your Skills,
                <br />
                Build Your Future
              </h1>

              <p
                className="fs-5"
                style={{
                  color: "rgba(255,255,255,0.8)",
                  maxWidth: "600px",
                }}
              >
                Explore industry-focused courses designed to help you learn
                practical skills and grow your career.
              </p>

              <Button
                variant="success"
                size="lg"
                className="rounded-pill px-4 mt-3 fw-bold"
              >
                Explore Courses <FaArrowRight className="ms-2" />
              </Button>
            </Col>

            <Col lg={5}>
              <div className="text-center">
                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "300px",
                    height: "300px",
                    background: "rgba(64, 84, 74, 0.12)",
                    border: "12px solid rgba(79, 81, 87, 0.69)",
                  }}
                >
                  <FaBookOpen style={{ fontSize: "180px" }} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <p
              className="fw-bold text-uppercase mb-1"
              style={{ color: "#702a16" }}
            >
              Popular Courses
            </p>

            <h2 className="fw-bold">
              Explore Our Top Courses
            </h2>

            <p className="text-danger">
              Choose from our industry-focused courses and start learning today.
            </p>
          </div>

          <Row className="g-4">
            {courses.map((course, index) => (
              <Col md={6} lg={4} key={index}>
                <div
                  className="card border-0 shadow-sm rounded-4 h-100 overflow-hidden"
                  style={{
                    transition: "0.3s",
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      height: "180px",
                      background:
                        "linear-gradient(135deg, #ede9fe, #ddd6fe)",
                      fontSize: "65px",
                      color: "#2c2cbebd",
                    }}
                  >
                    {course.icon}
                  </div>

                  <div className="card-body p-4">
                    <span
                      className="badge rounded-pill px-3 py-2"
                      style={{
                        background: "#f3e8ff",
                        color: "#fa4e37",
                      }}
                    >
                      {course.category}
                    </span>

                    <h4 className="fw-bold mt-3">
                      {course.title}
                    </h4>

                    <div className="d-flex align-items-center gap-2 mb-3">
                      <FaStar style={{ color: "#f59e0b" }} />
                      <span className="fw-bold">{course.rating}</span>
                      <span className="text-secondary">
                        ({course.students})
                      </span>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-between text-secondary small">
                      <span>
                        <FaBookOpen className="me-1" />
                        {course.lessons}
                      </span>

                      <span>
                        <FaClock className="me-1" />
                        {course.duration}
                      </span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <h5
                        className="fw-bold mb-0"
                        style={{ color: "#6d28d9" }}
                      >
                        {course.price}
                      </h5>

                      <Button
                        className="rounded-pill px-3"
                        style={{
                          background: "#87603e",
                          border: "none",
                        }}
                      >
                        Enroll
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* WHY LEARN WITH US */}
      <section
        className="py-5"
        style={{ background: "#f8f7ff" }}
      >
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <p
                className="fw-bold text-uppercase"
                style={{ color: "#6d28d9" }}
              >
                Why Learn With Us?
              </p>

              <h2 className="fw-bold display-6 mb-4">
                Learn Skills That Matter In The Real World
              </h2>

              <p className="text-primary lh-lg">
                Our courses are designed with practical learning in mind.
                Build your knowledge, work on projects and gain skills that
                can help you move forward in your career.
              </p>

              <div className="row g-3 mt-2">
                <div className="col-sm-6">
                  <div className="bg-white rounded-4 p-3 shadow-sm">
                    <FaUser
                      className="mb-2"
                      style={{ color: "#6d28d9", fontSize: "25px" }}
                    />
                    <h6 className="fw-bold">Expert Guidance</h6>
                    <small className="text-secondary">
                      Learn with proper support.
                    </small>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="bg-white rounded-4 p-3 shadow-sm">
                    <FaCode
                      className="mb-2"
                      style={{ color: "#6d28d9", fontSize: "25px" }}
                    />
                    <h6 className="fw-bold  ">Practical Projects</h6>
                    <small className="text-secondary">
                      Build real-world projects.
                    </small>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="bg-white rounded-4 p-3 shadow-sm">
                    <FaClock
                      className="mb-2"
                      style={{ color: "#6d28d9", fontSize: "25px" }}
                    />
                    <h6 className="fw-bold">Flexible Learning</h6>
                    <small className="text-secondary">
                      Learn at your own pace.
                    </small>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="bg-white rounded-4 p-3 shadow-sm">
                    <FaBookOpen
                      className="mb-2"
                      style={{ color: "#6d28d9", fontSize: "25px" }}
                    />
                    <h6 className="fw-bold">Updated Content</h6>
                    <small className="text-secondary">
                      Modern industry skills.
                    </small>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div
                className="rounded-4 text-white p-5 text-center shadow"
                style={{
                  background:
                    "linear-gradient(135deg, #92e946, #1ea868)",
                  minHeight: "400px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <FaBookOpen
                  className="mx-auto mb-4"
                  style={{ fontSize: "90px" }}
                />

                <h2 className="fw-bold">
                  Start Learning Today
                </h2>

                <p
                  className="mt-3"
                  style={{ color: "rgba(10, 10, 9, 0.8)" }}
                >
                  Take the first step towards building your skills and
                  achieving your goals.
                </p>

                <Button
                  variant="success"
                  className="rounded-pill px-4 mx-auto mt-3 fw-bold"
                >
                  Browse All Courses
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="py-5 text-white text-center"
        style={{
          background:
            "linear-gradient(135deg, #dc6274, #f3142e)",
        }}
      >
        <Container>
          <h2 className="fw-bold">
            Ready To Start Your Learning Journey?
          </h2>

          <p
            className="mx-auto mt-3"
            style={{
              maxWidth: "600px",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            Join Softech and start building skills for a better future.
          </p>

          <Button
            variant="dark"
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

export default Courses1;

