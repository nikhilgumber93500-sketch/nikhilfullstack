import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

import {
  FaBookOpen,
  FaUserGraduate,
  FaTrophy,
  FaArrowRight,
} from 'react-icons/fa';

import { Link } from 'react-router-dom';

import Header2 from './Header2';
import Footer1 from './Footer1';

function Home() {
  return (
    <>
      {/* ================= HERO ================= */}

      <section
        style={{
          background: 'linear-gradient(135deg, #f8f9fa, #e8f5f3)',
          padding: '70px 0',
        }}
      >
        <Container>

          <Row className="align-items-center">

            {/* ================= LEFT CONTENT ================= */}

            <Col
              lg={7}
              className="text-center text-lg-start mb-5 mb-lg-0"
            >

              <p
                className="fw-bold mb-2"
                style={{
                  color: '#d9a400',
                  letterSpacing: '2px',
                }}
              >
                WELCOME TO
              </p>

              <h1
                className="display-3 fw-bold"
                style={{ color: '#12345b' }}
              >
                Ladder To
                <br />

                <span style={{ color: '#d9a400' }}>
                  Success
                </span>
              </h1>

              <h3
                className="mt-3"
                style={{ color: '#176b70' }}
              >
                Building Knowledge, Confidence & Success
              </h3>

              <p
                className="mt-3 mx-auto mx-lg-0"
                style={{
                  maxWidth: '600px',
                  color: '#555',
                  fontSize: '18px',
                  lineHeight: '1.7',
                }}
              >
                A trusted learning environment where students
                receive the right guidance, knowledge and
                support to move confidently towards their goals.
              </p>

              {/* ================= HERO BUTTONS ================= */}

              <div className="mt-4">

                <Button
                  as={Link}
                  to="/course"
                  size="lg"
                  className="me-2 mb-2"
                  style={{
                    backgroundColor: '#12345b',
                    border: 'none',
                    padding: '12px 25px',
                  }}
                >
                  Explore Courses
                  <FaArrowRight className="ms-2" />
                </Button>

                <Button
                  as={Link}
                  to="/contact"
                  size="lg"
                  className="mb-2"
                  style={{
                    backgroundColor: '#d9a400',
                    border: 'none',
                    padding: '12px 25px',
                  }}
                >
                  Contact Us
                </Button>

              </div>

            </Col>


            {/* ================= RIGHT CAROUSEL ================= */}

            <Col lg={5} className="text-center">

              <Carousel
                controls={true}
                indicators={true}
                interval={2500}
                pause={false}
              >

                {/* ================= SLIDE 1 ================= */}

                <Carousel.Item>

                  <img
                    src="/foter1.jpeg"
                    alt="Ladder To Success"
                    className="d-block mx-auto img-fluid"
                    style={{
                      width: 'min(90%, 380px)',
                      height: '380px',
                      objectFit: 'cover',
                      borderRadius: '25px',
                      boxShadow:
                        '0 15px 40px rgba(0,0,0,0.15)',
                    }}
                  />

                  <Carousel.Caption
                    style={{
                      background: 'rgba(18,52,91,0.75)',
                      borderRadius: '12px',
                      padding: '10px',
                    }}
                  >
                    <h5 className="fw-bold">
                      Ladder To Success
                    </h5>

                    <p className="mb-0">
                      Building Knowledge & Confidence
                    </p>
                  </Carousel.Caption>

                </Carousel.Item>


                {/* ================= SLIDE 2 ================= */}

                <Carousel.Item>

                  <img
                    src="/foter2.jpeg"
                    alt="Vanita Mehta"
                    className="d-block mx-auto img-fluid"
                    style={{
                      width: 'min(90%, 380px)',
                      height: '380px',
                      objectFit: 'cover',
                      borderRadius: '25px',
                      boxShadow:
                        '0 15px 40px rgba(0,0,0,0.15)',
                    }}
                  />

                  <Carousel.Caption
                    style={{
                      background: 'rgba(18,52,91,0.75)',
                      borderRadius: '12px',
                      padding: '10px',
                    }}
                  >
                    <h5 className="fw-bold">
                      Vanita Mehta
                    </h5>

                    <p className="mb-0">
                      Founder & Educator
                    </p>
                  </Carousel.Caption>

                </Carousel.Item>


                {/* ================= SLIDE 3 ================= */}

                <Carousel.Item>

                  <img
                    src="/foter.jpeg"
                    alt="Quality Education"
                    className="d-block mx-auto img-fluid"
                    style={{
                      width: 'min(90%, 380px)',
                      height: '380px',
                      objectFit: 'cover',
                      borderRadius: '25px',
                      boxShadow:
                        '0 15px 40px rgba(0,0,0,0.15)',
                    }}
                  />

                  <Carousel.Caption
                    style={{
                      background: 'rgba(23,107,112,0.80)',
                      borderRadius: '12px',
                      padding: '10px',
                    }}
                  >
                    <h5 className="fw-bold">
                      Quality Education
                    </h5>

                    <p className="mb-0">
                      Learn Today, Succeed Tomorrow
                    </p>
                  </Carousel.Caption>

                </Carousel.Item>


                {/* ================= SLIDE 4 ================= */}

                <Carousel.Item>

                  <img
                    src="/slide1.jpeg"
                    alt="Student Learning"
                    className="d-block mx-auto img-fluid"
                    style={{
                      width: 'min(90%, 380px)',
                      height: '380px',
                      objectFit: 'cover',
                      borderRadius: '25px',
                      boxShadow:
                        '0 15px 40px rgba(0,0,0,0.15)',
                    }}
                  />

                  <Carousel.Caption
                    style={{
                      background: 'rgba(18,52,91,0.75)',
                      borderRadius: '12px',
                      padding: '10px',
                    }}
                  >
                    <h5 className="fw-bold">
                      Student Learning
                    </h5>

                    <p className="mb-0">
                      Learn With Proper Guidance
                    </p>
                  </Carousel.Caption>

                </Carousel.Item>


                {/* ================= SLIDE 5 ================= */}

                <Carousel.Item>

                  <img
                    src="/slide2.jpeg"
                    alt="Success Journey"
                    className="d-block mx-auto img-fluid"
                    style={{
                      width: 'min(90%, 380px)',
                      height: '380px',
                      objectFit: 'cover',
                      borderRadius: '25px',
                      boxShadow:
                        '0 15px 40px rgba(0,0,0,0.15)',
                    }}
                  />

                  <Carousel.Caption
                    style={{
                      background: 'rgba(23,107,112,0.80)',
                      borderRadius: '12px',
                      padding: '10px',
                    }}
                  >
                    <h5 className="fw-bold">
                      Success Journey
                    </h5>

                    <p className="mb-0">
                      Your Success Is Our Goal
                    </p>
                  </Carousel.Caption>

                </Carousel.Item>


                {/* ================= SLIDE 6 ================= */}

                <Carousel.Item>

                  <img
                    src="/slide.jpeg"
                    alt="Better Education"
                    className="d-block mx-auto img-fluid"
                    style={{
                      width: 'min(90%, 380px)',
                      height: '380px',
                      objectFit: 'cover',
                      borderRadius: '25px',
                      boxShadow:
                        '0 15px 40px rgba(0,0,0,0.15)',
                    }}
                  />

                  <Carousel.Caption
                    style={{
                      background: 'rgba(18,52,91,0.75)',
                      borderRadius: '12px',
                      padding: '10px',
                    }}
                  >
                    <h5 className="fw-bold">
                      Better Education
                    </h5>

                    <p className="mb-0">
                      Learn, Grow & Achieve
                    </p>
                  </Carousel.Caption>

                </Carousel.Item>


                {/* ================= SLIDE 7 ================= */}

                <Carousel.Item>

                  <img
                    src="/slide3.jpeg"
                    alt="Future Success"
                    className="d-block mx-auto img-fluid"
                    style={{
                      width: 'min(90%, 380px)',
                      height: '380px',
                      objectFit: 'cover',
                      borderRadius: '25px',
                      boxShadow:
                        '0 15px 40px rgba(0,0,0,0.15)',
                    }}
                  />

                  <Carousel.Caption
                    style={{
                      background: 'rgba(23,107,112,0.80)',
                      borderRadius: '12px',
                      padding: '10px',
                    }}
                  >
                    <h5 className="fw-bold">
                      Future Success
                    </h5>

                    <p className="mb-0">
                      Your Future Starts Here
                    </p>
                  </Carousel.Caption>

                </Carousel.Item>

              </Carousel>

            </Col>

          </Row>

        </Container>
      </section>


      {/* ================= ABOUT ================= */}

      <section
        style={{
          background: '#fff',
          padding: '90px 0',
        }}
      >

        <Container>

          <div className="text-center mb-5">

            <p
              className="fw-bold mb-2"
              style={{
                color: '#d9a400',
                letterSpacing: '2px',
              }}
            >
              ABOUT US
            </p>

            <h2
              className="fw-bold"
              style={{ color: '#12345b' }}
            >
              Meet Our Founder
            </h2>

            <div
              style={{
                width: '60px',
                height: '4px',
                background: '#d9a400',
                margin: '15px auto',
              }}
            />

          </div>


          <Row className="align-items-center">

            {/* IMAGE */}

            <Col
              lg={5}
              className="text-center mb-5 mb-lg-0"
            >

              <img
                src="/vanita.jpeg"
                alt="Vanita Mehta"
                className="img-fluid"
                style={{
                  width: '75%',
                  maxWidth: '380px',
                  borderRadius: '20px',
                  boxShadow:
                    '0 15px 35px rgba(0,0,0,0.18)',
                }}
              />

            </Col>


            {/* CONTENT */}

            <Col lg={7}>

              <p
                className="fw-bold"
                style={{ color: '#176b70' }}
              >
                FOUNDER & EDUCATOR
              </p>

              <h2
                className="fw-bold"
                style={{ color: '#12345b' }}
              >
                Vanita Mehta
              </h2>

              <p
                className="fs-5"
                style={{ color: '#d9a400' }}
              >
                Founder of Ladder To Success
              </p>

              <p
                style={{
                  color: '#555',
                  lineHeight: '1.8',
                }}
              >
                Ladder To Success is dedicated to providing
                students with the right guidance, knowledge
                and learning environment to help them achieve
                their academic goals.
              </p>

              <p
                style={{
                  color: '#555',
                  lineHeight: '1.8',
                }}
              >
                With a focus on quality education and
                individual attention, we aim to help students
                build confidence and develop a strong
                foundation for their future.
              </p>

              <Button
                as={Link}
                to="/about"
                style={{
                  backgroundColor: '#12345b',
                  border: 'none',
                  padding: '11px 24px',
                }}
              >
                Know More About Us
              </Button>

            </Col>

          </Row>

        </Container>

      </section>


      {/* ================= WHY CHOOSE US ================= */}

      <section
        id="courses"
        style={{
          background: '#f4f8f8',
          padding: '90px 0',
        }}
      >

        <Container>

          <div className="text-center mb-5">

            <p
              className="fw-bold mb-2"
              style={{
                color: '#d9a400',
                letterSpacing: '2px',
              }}
            >
              WHY CHOOSE US
            </p>

            <h2
              className="fw-bold"
              style={{ color: '#12345b' }}
            >
              Learn Today, Succeed Tomorrow
            </h2>

          </div>


          <Row>

            {/* CARD 1 */}

            <Col md={4} className="mb-4">

              <Card
                className="h-100 text-center border-0"
                style={{
                  borderRadius: '18px',
                  boxShadow:
                    '0 8px 25px rgba(0,0,0,0.10)',
                }}
              >

                <Card.Body className="p-4">

                  <FaBookOpen
                    size={55}
                    style={{
                      color: '#d9a400',
                      marginBottom: '20px',
                    }}
                  />

                  <Card.Title
                    className="fw-bold"
                    style={{ color: '#12345b' }}
                  >
                    Quality Education
                  </Card.Title>

                  <Card.Text
                    style={{
                      color: '#666',
                      lineHeight: '1.7',
                    }}
                  >
                    Focused learning with proper guidance,
                    educational support and a positive
                    learning environment.
                  </Card.Text>

                </Card.Body>

              </Card>

            </Col>


            {/* CARD 2 */}

            <Col md={4} className="mb-4">

              <Card
                className="h-100 text-center border-0"
                style={{
                  borderRadius: '18px',
                  boxShadow:
                    '0 8px 25px rgba(0,0,0,0.10)',
                }}
              >

                <Card.Body className="p-4">

                  <FaUserGraduate
                    size={55}
                    style={{
                      color: '#d9a400',
                      marginBottom: '20px',
                    }}
                  />

                  <Card.Title
                    className="fw-bold"
                    style={{ color: '#12345b' }}
                  >
                    Personal Guidance
                  </Card.Title>

                  <Card.Text
                    style={{
                      color: '#666',
                      lineHeight: '1.7',
                    }}
                  >
                    Students receive individual attention
                    and proper guidance according to
                    their learning needs.
                  </Card.Text>

                </Card.Body>

              </Card>

            </Col>


            {/* CARD 3 */}

            <Col md={4} className="mb-4">

              <Card
                className="h-100 text-center border-0"
                style={{
                  borderRadius: '18px',
                  boxShadow:
                    '0 8px 25px rgba(0,0,0,0.10)',
                }}
              >

                <Card.Body className="p-4">

                  <FaTrophy
                    size={55}
                    style={{
                      color: '#d9a400',
                      marginBottom: '20px',
                    }}
                  />

                  <Card.Title
                    className="fw-bold"
                    style={{ color: '#12345b' }}
                  >
                    Focus On Success
                  </Card.Title>

                  <Card.Text
                    style={{
                      color: '#666',
                      lineHeight: '1.7',
                    }}
                  >
                    We encourage students to work with
                    confidence, discipline and a clear
                    focus towards their goals.
                  </Card.Text>

                </Card.Body>

              </Card>

            </Col>

          </Row>

        </Container>

      </section>


      {/* ================= CTA ================= */}

      <section
        style={{
          background:
            'linear-gradient(135deg, #12345b, #176b70)',
          padding: '80px 0',
        }}
      >

        <Container className="text-center text-white">

          <h2 className="fw-bold">
            Ready To Start Your Journey?
          </h2>

          <p className="fs-5 mt-3">
            Take the first step towards your success
            with Ladder To Success.
          </p>

          <Button
            as={Link}
            to="/contact"
            size="lg"
            className="mt-3"
            style={{
              backgroundColor: '#d9a400',
              border: 'none',
              padding: '12px 30px',
            }}
          >
            Enquire Now
          </Button>

        </Container>

      </section>

    </>
  );
}

export default Home;