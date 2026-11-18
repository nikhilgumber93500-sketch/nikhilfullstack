
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

import {
  FaCalculator,
  FaLaptopCode,
  FaGraduationCap,
  FaBookOpen,
  FaTrophy,
  FaArrowRight,
  FaCheckCircle,
} from 'react-icons/fa';

import Header2 from './Header2';
import Footer2 from './Footer2';

function Course2() {
  const collegeCourses = [
    'B.Tech - M1',
    'B.Tech - M2',
    'B.Tech - M3',
    'B.Sc',
    'BCA',
    'BBA',
    'B.Com',
    'B.A',
    'Polytechnic',
    'MCA',
    'M.Tech',
  ];

  return (
    <>
      <Header2 />

      {/* ================= HERO ================= */}
      <section
        style={{
          background: '#f7f5ff',
          padding: '85px 20px 75px',
          overflow: 'hidden',
        }}
      >
        <Container>
          <Row className="align-items-center">

            <Col lg={7}>
              <div
                style={{
                  display: 'inline-block',
                  background: '#ebe7ff',
                  color: '#5b45b5',
                  padding: '8px 16px',
                  borderRadius: '30px',
                  fontWeight: '600',
                  fontSize: '14px',
                  marginBottom: '20px',
                }}
              >
                <FaBookOpen className="me-2" />
                LEARNING THAT BUILDS SUCCESS
              </div>

              <h1
                style={{
                  fontSize: '52px',
                  lineHeight: '1.15',
                  fontWeight: '800',
                  color: '#20203a',
                }}
              >
                Learn Today.
                <br />
                <span style={{ color: '#6c4fd3' }}>
                  Lead Tomorrow.
                </span>
              </h1>

              <p
                style={{
                  color: '#666',
                  fontSize: '18px',
                  lineHeight: '1.8',
                  maxWidth: '650px',
                  marginTop: '22px',
                }}
              >
                Explore our academic and professional coaching programs
                designed to make concepts clear, learning meaningful and
                preparation more effective.
              </p>

              {/* ================= EXPLORE BUTTON ================= */}
              <Button
                as="a"
                href="#courses"
                style={{
                  background: '#6c4fd3',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '13px 26px',
                  fontWeight: '600',
                  marginTop: '10px',
                }}
              >
                Explore Courses
                <FaArrowRight className="ms-2" />
              </Button>
            </Col>

            <Col lg={5} className="mt-5 mt-lg-0">
              <div
                style={{
                  background: '#6c4fd3',
                  borderRadius: '35px',
                  padding: '35px',
                  position: 'relative',
                  minHeight: '330px',
                  boxShadow:
                    '0 20px 45px rgba(108,79,211,0.20)',
                }}
              >
                <div
                  style={{
                    background: '#fff',
                    borderRadius: '22px',
                    padding: '30px',
                    position: 'absolute',
                    top: '35px',
                    left: '35px',
                    right: '35px',
                  }}
                >
                  <FaGraduationCap
                    size={55}
                    style={{ color: '#f09a38' }}
                  />

                  <h3
                    style={{
                      color: '#20203a',
                      fontWeight: '700',
                      marginTop: '18px',
                    }}
                  >
                    Your Education
                    <br />
                    Journey Starts Here
                  </h3>

                  <p className="text-muted mb-0">
                    School • College • Professional • Competitive
                  </p>
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '25px',
                    background: '#f09a38',
                    color: '#fff',
                    padding: '12px 20px',
                    borderRadius: '12px',
                    fontWeight: '700',
                  }}
                >
                  Learn • Grow • Succeed
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      {/* ================= SCHOOL PROGRAMS ================= */}
      <section
        id="courses"
        style={{
          padding: '80px 20px',
          background: '#fff',
          scrollMarginTop: '80px',
        }}
      >
        <Container>

          <div style={{ marginBottom: '45px' }}>
            <span
              style={{
                color: '#f09a38',
                fontWeight: '700',
                letterSpacing: '1.5px',
                fontSize: '14px',
              }}
            >
              SCHOOL PROGRAMS
            </span>

            <h2
              style={{
                color: '#20203a',
                fontWeight: '800',
                fontSize: '38px',
                marginTop: '8px',
              }}
            >
              Build a Strong Academic Foundation
            </h2>

            <p
              className="text-muted"
              style={{ maxWidth: '650px' }}
            >
              Focused coaching that helps students understand concepts
              instead of simply memorising them.
            </p>
          </div>

          {/* 9-10 */}
          <div
            style={{
              background: '#f7f5ff',
              borderRadius: '22px',
              padding: '30px',
              marginBottom: '20px',
            }}
          >
            <Row className="align-items-center">

              <Col md={2}>
                <div
                  style={{
                    width: '70px',
                    height: '70px',
                    background: '#6c4fd3',
                    color: '#fff',
                    borderRadius: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '25px',
                    fontWeight: '800',
                  }}
                >
                  01
                </div>
              </Col>

              <Col md={7} className="mt-3 mt-md-0">
                <h3
                  style={{
                    color: '#20203a',
                    fontWeight: '700',
                  }}
                >
                  Classes 9th & 10th
                </h3>

                <p className="text-muted mb-0">
                  Mathematics, English and SST with concept clarity,
                  regular practice and exam preparation.
                </p>
              </Col>

              <Col
                md={3}
                className="text-md-end mt-3 mt-md-0"
              >
                <span
                  style={{
                    color: '#6c4fd3',
                    fontWeight: '600',
                  }}
                >
                  Mathematics
                  <br />
                  English
                  <br />
                  SST
                </span>
              </Col>

            </Row>
          </div>

          {/* 11-12 */}
          <div
            style={{
              background: '#fff7ed',
              borderRadius: '22px',
              padding: '30px',
            }}
          >
            <Row className="align-items-center">

              <Col md={2}>
                <div
                  style={{
                    width: '70px',
                    height: '70px',
                    background: '#f09a38',
                    color: '#fff',
                    borderRadius: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '25px',
                    fontWeight: '800',
                  }}
                >
                  02
                </div>
              </Col>

              <Col md={7} className="mt-3 mt-md-0">
                <h3
                  style={{
                    color: '#20203a',
                    fontWeight: '700',
                  }}
                >
                  Classes 11th & 12th
                </h3>

                <p className="text-muted mb-0">
                  Mathematics coaching with strong fundamentals,
                  problem-solving practice and exam-focused learning.
                </p>
              </Col>

              <Col
                md={3}
                className="text-md-end mt-3 mt-md-0"
              >
                <span
                  style={{
                    color: '#d47717',
                    fontWeight: '600',
                  }}
                >
                  Mathematics
                </span>
              </Col>

            </Row>
          </div>

        </Container>
      </section>

      {/* ================= COLLEGE COURSES ================= */}
      <section
        style={{
          padding: '85px 20px',
          background: '#20203a',
          color: '#fff',
        }}
      >
        <Container>

          <Row className="align-items-end mb-5">

            <Col lg={8}>
              <span
                style={{
                  color: '#f09a38',
                  fontWeight: '700',
                  letterSpacing: '1.5px',
                  fontSize: '14px',
                }}
              >
                HIGHER EDUCATION
              </span>

              <h2
                style={{
                  fontSize: '40px',
                  fontWeight: '800',
                  marginTop: '8px',
                }}
              >
                Choose Your Academic Path
              </h2>
            </Col>

            <Col lg={4}>
              <p
                style={{
                  color: '#c8c8d5',
                  lineHeight: '1.7',
                }}
              >
                Academic coaching for undergraduate, postgraduate and
                technical education.
              </p>
            </Col>

          </Row>

          <Row className="g-3">

            {collegeCourses.map((course, index) => (
              <Col lg={4} md={6} key={index}>

                <div
                  style={{
                    background: '#2b2b47',
                    border: '1px solid #3d3d59',
                    borderRadius: '14px',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: '#f09a38',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '15px',
                    }}
                  >
                    <FaGraduationCap />
                  </div>

                  <span
                    style={{
                      fontSize: '17px',
                      fontWeight: '600',
                    }}
                  >
                    {course}
                  </span>
                </div>

              </Col>
            ))}

          </Row>
        </Container>
      </section>

      {/* ================= EXPERTISE ================= */}
      <section
        style={{
          padding: '85px 20px',
          background: '#f7f5ff',
        }}
      >
        <Container>

          <Row className="align-items-center g-5">

            <Col lg={5}>
              <span
                style={{
                  color: '#6c4fd3',
                  fontWeight: '700',
                  letterSpacing: '1.5px',
                }}
              >
                CORE SUBJECTS
              </span>

              <h2
                style={{
                  color: '#20203a',
                  fontSize: '40px',
                  fontWeight: '800',
                  marginTop: '10px',
                }}
              >
                Learn With Concept Clarity
              </h2>

              <p
                className="text-muted"
                style={{
                  lineHeight: '1.8',
                  fontSize: '17px',
                }}
              >
                Our main coaching areas focus on Mathematics and
                Computer Science, helping students develop a strong
                academic foundation.
              </p>
            </Col>

            <Col lg={7}>

              <Row className="g-4">

                {/* Mathematics */}
                <Col md={6}>
                  <div
                    style={{
                      background: '#fff',
                      borderRadius: '25px',
                      padding: '35px',
                      boxShadow:
                        '0 10px 30px rgba(0,0,0,0.06)',
                      height: '100%',
                    }}
                  >
                    <div
                      style={{
                        width: '65px',
                        height: '65px',
                        background: '#ebe7ff',
                        color: '#6c4fd3',
                        borderRadius: '18px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '27px',
                      }}
                    >
                      <FaCalculator />
                    </div>

                    <h4
                      style={{
                        color: '#20203a',
                        fontWeight: '700',
                        marginTop: '22px',
                      }}
                    >
                      Mathematics
                    </h4>

                    <p className="text-muted">
                      Clear concepts, logical thinking and structured
                      problem solving.
                    </p>
                  </div>
                </Col>

                {/* Computer Science */}
                <Col md={6}>
                  <div
                    style={{
                      background: '#fff',
                      borderRadius: '25px',
                      padding: '35px',
                      boxShadow:
                        '0 10px 30px rgba(0,0,0,0.06)',
                      height: '100%',
                    }}
                  >
                    <div
                      style={{
                        width: '65px',
                        height: '65px',
                        background: '#fff0df',
                        color: '#f09a38',
                        borderRadius: '18px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '27px',
                      }}
                    >
                      <FaLaptopCode />
                    </div>

                    <h4
                      style={{
                        color: '#20203a',
                        fontWeight: '700',
                        marginTop: '22px',
                      }}
                    >
                      Computer Science
                    </h4>

                    <p className="text-muted">
                      Conceptual learning and academic support for
                      Computer Science students.
                    </p>
                  </div>
                </Col>

              </Row>

            </Col>
          </Row>

        </Container>
      </section>

      {/* ================= COMPETITIVE EXAMS ================= */}
      <section
        style={{
          padding: '75px 20px',
        }}
      >
        <Container>

          <div
            style={{
              background:
                'linear-gradient(120deg, #6c4fd3, #4f399d)',
              borderRadius: '28px',
              padding: '50px 40px',
              color: '#fff',
            }}
          >

            <Row className="align-items-center">

              <Col lg={2} className="text-center">
                <FaTrophy
                  size={65}
                  style={{ color: '#f09a38' }}
                />
              </Col>

              <Col lg={7} className="mt-4 mt-lg-0">

                <h2 style={{ fontWeight: '800' }}>
                  Competitive Exams
                </h2>

                <p
                  style={{
                    color: '#e2ddf5',
                    marginBottom: '0',
                    lineHeight: '1.7',
                  }}
                >
                  Preparation support for various competitive
                  examinations with focus on concepts, practice and
                  problem solving.
                </p>

              </Col>

              <Col
                lg={3}
                className="text-lg-end mt-4 mt-lg-0"
              >
                <Button
                  as={Link}
                  to="/contact"
                  variant="light"
                  style={{
                    color: '#6c4fd3',
                    fontWeight: '700',
                    border: 'none',
                    padding: '12px 22px',
                  }}
                >
                  Enquire Now
                  <FaArrowRight className="ms-2" />
                </Button>
              </Col>

            </Row>

          </div>
        </Container>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section
        style={{
          background: '#fff7ed',
          padding: '70px 20px',
        }}
      >
        <Container>

          <div className="text-center mb-5">
            <h2
              style={{
                color: '#20203a',
                fontWeight: '800',
              }}
            >
              Why Learn With Us?
            </h2>
          </div>

          <Row className="justify-content-center g-4">

            <Col md={3} sm={6}>
              <div className="text-center">
                <FaCheckCircle
                  size={35}
                  style={{ color: '#6c4fd3' }}
                />

                <h5
                  style={{
                    color: '#20203a',
                    fontWeight: '700',
                    marginTop: '15px',
                  }}
                >
                  Clear Concepts
                </h5>
              </div>
            </Col>

            <Col md={3} sm={6}>
              <div className="text-center">
                <FaCheckCircle
                  size={35}
                  style={{ color: '#6c4fd3' }}
                />

                <h5
                  style={{
                    color: '#20203a',
                    fontWeight: '700',
                    marginTop: '15px',
                  }}
                >
                  Regular Practice
                </h5>
              </div>
            </Col>

            <Col md={3} sm={6}>
              <div className="text-center">
                <FaCheckCircle
                  size={35}
                  style={{ color: '#6c4fd3' }}
                />

                <h5
                  style={{
                    color: '#20203a',
                    fontWeight: '700',
                    marginTop: '15px',
                  }}
                >
                  Exam Preparation
                </h5>
              </div>
            </Col>

            <Col md={3} sm={6}>
              <div className="text-center">
                <FaCheckCircle
                  size={35}
                  style={{ color: '#6c4fd3' }}
                />

                <h5
                  style={{
                    color: '#20203a',
                    fontWeight: '700',
                    marginTop: '15px',
                  }}
                >
                  Personal Guidance
                </h5>
              </div>
            </Col>

          </Row>

        </Container>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section
        style={{
          background: '#20203a',
          color: '#fff',
          textAlign: 'center',
          padding: '75px 20px',
        }}
      >
        <Container>

          <h2
            style={{
              fontSize: '38px',
              fontWeight: '800',
            }}
          >
            Ready to Take the Next Step?
          </h2>

          <p
            style={{
              color: '#c8c8d5',
              fontSize: '17px',
              marginTop: '15px',
            }}
          >
            Choose the right learning path and move closer to your goals.
          </p>

          {/* ================= CONTACT BUTTON ================= */}
          <Button
            as={Link}
            to="/contact"
            style={{
              background: '#f09a38',
              border: 'none',
              color: '#fff',
              fontWeight: '700',
              padding: '13px 28px',
              borderRadius: '8px',
              marginTop: '10px',
            }}
          >
            Contact Us
          </Button>

        </Container>
      </section>

      <Footer2 />
    </>
  );
}

export default Course2;
