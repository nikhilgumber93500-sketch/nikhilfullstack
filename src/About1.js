
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaBolt,
  FaBullseye,
  FaEye,
  FaRocket,
} from "react-icons/fa";

function About() {
  const features = [
    "Modern Technology",
    "User-Friendly Solutions",
    "Creative & Responsive Design",
    "Quality Development",
    "Reliable Support",
    "Customer Satisfaction",
  ];

  return (
    <>
  
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.75), rgba(10, 25, 47, 0.75)), url('/soft.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "380px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <div className="text-center text-md-start py-5">
            <p className="text-primary fw-bold text-uppercase mb-2">
              Get To Know Us
            </p>

            <h1 className="text-white fw-bold display-3 mb-3">
              About Softech
            </h1>
          </div>
        </Container>
      </section>
      <section className="py-1">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={5}>
              <div className="position-relative">
                <img
                  src='/about-banner.jpg'
                  alt="About Softech"
                  className="img-fluid rounded-4 shadow"
                  style={{
                    width: "100%",
                    minHeight: "350px",
                    objectFit: "cover",
                  }}
                />

                <div
                  className="bg-primary text-white rounded-4 shadow-lg text-center p-3 p-md-4 position-absolute"
                  style={{
                    bottom: "-25px",
                    left: "20px",
                  }}
                >
                  <h2 className="fw-bold mb-0">100%</h2>
                  <small>Quality Focused</small>
                </div>
              </div>
            </Col>

            <Col lg={7}>
              <div className="ps-lg-4 mt-4 mt-lg-0">
                <p className="text-primary fw-bold text-uppercase mb-2">
                  About Softech
                </p>

                <h2 className="fw-bold display-6 mb-4">
                  We Create Smart
                  <span className="text-primary"> Digital Solutions</span>
                </h2>

                <p className="text-secondary lh-lg">
                  Welcome to Softech, your technology partner for modern,
                  innovative and reliable digital solutions. We help
                  businesses and individuals transform their ideas into
                  powerful digital experiences.
                </p>

                <p className="text-secondary lh-lg">
                  In today's fast-moving digital world, technology plays an
                  important role in growth and success. At Softech, we
                  understand the unique requirements of every client and
                  create solutions that are practical, scalable and easy to use.
                </p>

                <p className="text-secondary lh-lg">
                  From modern websites and web applications to creative UI/UX
                  designs, our focus is always on delivering quality work that
                  creates real value for our clients.
                </p>

                <p className="text-secondary lh-lg mb-4">
                  Our goal is simple — to combine technology, creativity and
                  innovation to build digital solutions that help people and
                  businesses grow with confidence.
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <div className="border rounded-3 px-3 py-2 shadow-sm">
                    <h6 className="fw-bold mb-0">Modern Technology</h6>
                  </div>

                  <div className="border rounded-3 px-3 py-2 shadow-sm">
                    <h6 className="fw-bold mb-0">Creative Solutions</h6>
                  </div>

                  <div className="border rounded-3 px-3 py-2 shadow-sm">
                    <h6 className="fw-bold mb-0">Quality Development</h6>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5 bg-light mt-4">
        <Container>
          <div className="text-center mb-5">
            <p className="text-primary fw-bold text-uppercase mb-2">
              What We Do
            </p>

            <h2 className="fw-bold display-6">
              Technology That Helps You Grow
            </h2>
            <p
              className="text-secondary mx-auto mt-3 lh-lg"
              style={{ maxWidth: "700px" }}
            >
              We combine creativity, technology and innovation to create
              digital experiences that are useful, modern and designed for
              the future.
            </p>
          </div>
          <Row className="g-4 align-items-stretch">
            <Col lg={7}>
              <div className="bg-white rounded-4 shadow-sm p-4 p-md-5 h-100">
                <h3 className="fw-bold mb-4">
                  Building Digital Experiences
                </h3>

                <p className="text-secondary lh-lg">
                  At Softech, we believe technology should simplify work and
                  solve real-world problems. Our team focuses on understanding
                  ideas and transforming them into meaningful digital products.
                </p>

                <p className="text-secondary lh-lg">
                  We provide solutions in Web Development, Application
                  Development, UI/UX Design and other modern digital services.
                  Every project is developed with attention to performance,
                  usability and design.
                </p>

                <p className="text-secondary lh-lg mb-0">
                  From the first idea to the final product, we work closely
                  with our clients to ensure that every solution meets their
                  requirements and delivers a great user experience.
                </p>
              </div>
            </Col>

            <Col lg={5}>
              <div className="bg-primary text-white rounded-4 shadow p-4 p-md-5 h-100">
                <p className="fw-bold text-uppercase mb-2 text-white-50">
                  Our Strength
                </p>

                <h3 className="fw-bold mb-4">
                  Why Choose Softech?
                </h3>

                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-center gap-3 border-bottom border-light border-opacity-25 py-3"
                  >
                    <span
                      className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center fw-bold"
                      style={{
                        width: "28px",
                        height: "28px",
                        minWidth: "28px",
                      }}
                    >
                      ✓
                    </span>

                    <span className="fw-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-dark text-white py-5">
        <Container>
          <div className="text-center mb-5">
            <p className="text-warning fw-bold text-uppercase mb-2">
              Our Purpose
            </p>

            <h2 className="fw-bold display-6">
              Our Mission & Vision
            </h2>

            <p
              className="text-white-50 mx-auto mt-3 lh-lg"
              style={{ maxWidth: "650px" }}
            >
              We are driven by innovation and committed to creating technology
              that makes a positive difference.
            </p>
          </div>

          <Row className="g-4">
            <Col md={4}>
              <div
                className="rounded-4 p-4 p-md-5 text-center h-100"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                
<div className="fs-1 mb-3 text-primary">
  <FaBullseye />
</div>
                <h4 className="fw-bold mb-3">Our Mission</h4>

                <p className="text-white-50 lh-lg mb-0">
                  To provide reliable, innovative and high-quality technology
                  solutions that help businesses and individuals achieve their
                  digital goals.
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div
                className="rounded-4 p-4 p-md-5 text-center h-100"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
              <div className="fs-1 mb-3 text-info">
  <FaEye />
</div>
                <h4 className="fw-bold mb-3">Our Vision</h4>

                <p className="text-white-50 lh-lg mb-0">
                  To become a trusted technology partner known for creating
                  modern, user-friendly and impactful digital solutions.
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div
                className="rounded-4 p-4 p-md-5 text-center h-100"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                
                <h4 className="fw-bold mb-3">Our Strategy</h4>
<div className="fs-1 mb-3 text-success">
  <FaRocket />
</div>
                <p className="text-white-50 lh-lg mb-0">
                  We understand requirements, use the right technologies and
                  focus on quality to deliver efficient solutions that create
                  long-term value.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <p className="text-primary fw-bold text-uppercase">
              Our Expertise
            </p>

            <h2 className="fw-bold display-6">
              Solutions Designed For The Digital World
            </h2>
          </div>

          <Row className="g-4">
            <Col md={6} lg={3}>
              <div className="border rounded-4 p-4 h-100 shadow-sm text-center">
                <div className="fs-1 mb-3 text-primary">
  <FaLaptopCode />
</div>
                <h5 className="fw-bold">Web Development</h5>
                <p className="text-secondary small mb-0">
                  Modern, fast and responsive websites built for your business.
                </p>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="border rounded-4 p-4 h-100 shadow-sm text-center">
              <div className="fs-1 mb-3 text-primary">
  <FaMobileAlt />
</div>
                <h5 className="fw-bold">App Development</h5>
                <p className="text-secondary small mb-0">
                  Smart applications designed for better digital experiences.
                </p>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="border rounded-4 p-4 h-100 shadow-sm text-center">
              <div className="fs-1 mb-3 text-primary">
  <FaPaintBrush />
</div>
                <h5 className="fw-bold">UI / UX Design</h5>
                <p className="text-secondary small mb-0">
                  Creative and user-friendly interfaces that people enjoy.
                </p>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="border rounded-4 p-4 h-100 shadow-sm text-center">
               <div className="fs-1 mb-3 text-primary">
  <FaBolt />
</div>
                <h5 className="fw-bold">Digital Solutions</h5>
                <p className="text-secondary small mb-0">
                  Technology solutions built to improve productivity and growth.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <p className="text-primary fw-bold text-uppercase mb-2">
              Our Achievements
            </p>

            <h2 className="fw-bold display-6">
              Growing Through Innovation
            </h2>
          </div>

          <Row className="text-center g-4">
            <Col xs={6} lg={3}>
              <div className="bg-white p-4 rounded-4 shadow-sm h-100">
                <h1 className="fw-bold text-primary mb-2">100+</h1>
                <p className="text-secondary mb-0">Projects Completed</p>
              </div>
            </Col>

            <Col xs={6} lg={3}>
              <div className="bg-white p-4 rounded-4 shadow-sm h-100">
                <h1 className="fw-bold text-primary mb-2">50+</h1>
                <p className="text-secondary mb-0">Digital Solutions</p>
              </div>
            </Col>

            <Col xs={6} lg={3}>
              <div className="bg-white p-4 rounded-4 shadow-sm h-100">
                <h1 className="fw-bold text-primary mb-2">99%</h1>
                <p className="text-secondary mb-0">Quality Focus</p>
              </div>
            </Col>

            <Col xs={6} lg={3}>
              <div className="bg-white p-4 rounded-4 shadow-sm h-100">
                <h1 className="fw-bold text-primary mb-2">24/7</h1>
                <p className="text-secondary mb-0">Support & Growth</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="align-items-center text-center text-lg-start g-4">
            <Col lg={8}>
              <h2 className="fw-bold mb-2">
                Let's Build Something Amazing Together
              </h2>

              <p className="mb-0 text-white-50">
                Have an idea? Let's turn it into a powerful digital solution.
              </p>
            </Col>

            <Col lg={4} className="text-lg-end">
              <Button
                variant="light"
                size="lg"
                className="fw-bold px-4"
              >
                Contact Us
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;

