import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaCalculator,
  FaLaptopCode,
  FaAward,
  FaUsers,
} from 'react-icons/fa';

import Header2 from './Header2';
import Footer2 from './Footer2';

function About2() {
  return (
    <>
      <Header2 />

      {/* ================= HERO ================= */}
      <section
        style={{
          background: 'linear-gradient(135deg, #172554, #0f766e)',
          color: 'white',
          padding: '90px 20px',
          textAlign: 'center',
        }}
      >
        <Container>
          <p
            style={{
              color: '#fbbf24',
              fontWeight: '700',
              letterSpacing: '2px',
              marginBottom: '15px',
            }}
          >
            ABOUT THE EDUCATOR
          </p>

          <h1
            style={{
              fontSize: '48px',
              fontWeight: '700',
              marginBottom: '15px',
            }}
          >
            Vanita Mehta
          </h1>

          <p
            style={{
              fontSize: '20px',
              maxWidth: '750px',
              margin: 'auto',
              color: '#e0f2fe',
              lineHeight: '1.7',
            }}
          >
            An experienced educator dedicated to making Mathematics and
            Computer Science easier, clearer and more understandable for
            students.
          </p>
        </Container>
      </section>

      {/* ================= ABOUT MAM ================= */}
      <section
        style={{
          padding: '85px 20px',
          background: '#ffffff',
        }}
      >
        <Container>
          <Row className="align-items-center g-5">

            {/* IMAGE */}
            <Col lg={5}>
              <div
                style={{
                  background: '#ecfeff',
                  padding: '15px',
                  borderRadius: '25px',
                  boxShadow: '0 10px 30px rgba(15,118,110,0.12)',
                }}
              >
                <img
                  src="/vanita.jpeg"
                  alt="Vanita Mehta"
                  style={{
                    width: '100%',
                    height: '700px',
                    objectFit: 'cover',
                    borderRadius: '20px',
                  }}
                />
              </div>
            </Col>

            {/* CONTENT */}
            <Col lg={7}>
              <p
                style={{
                  color: '#0f766e',
                  fontWeight: '700',
                  letterSpacing: '2px',
                  marginBottom: '10px',
                }}
              >
                MEET YOUR EDUCATOR
              </p>

              <h2
                style={{
                  fontSize: '38px',
                  fontWeight: '700',
                  color: '#172554',
                  marginBottom: '20px',
                }}
              >
                Vanita Mehta
              </h2>

              <p
                style={{
                  color: '#555',
                  fontSize: '17px',
                  lineHeight: '1.8',
                }}
              >
                Vanita Mehta is an experienced educator with more than
                15 years of teaching experience. She is passionate about
                helping students understand concepts instead of simply
                memorising them.
              </p>

              <p
                style={{
                  color: '#555',
                  fontSize: '17px',
                  lineHeight: '1.8',
                }}
              >
                Her teaching approach focuses on clear explanations,
                practical understanding, regular practice and personal
                guidance so that students can learn with confidence.
              </p>

              <p
                style={{
                  color: '#555',
                  fontSize: '17px',
                  lineHeight: '1.8',
                }}
              >
                With a strong academic background and years of classroom
                experience, she works to make difficult topics easier and
                encourages students to keep learning and improving.
              </p>

              <Button
                href="tel:9416590813"
                style={{
                  background: '#f59e0b',
                  border: 'none',
                  padding: '12px 25px',
                  fontWeight: '600',
                  borderRadius: '8px',
                  marginTop: '10px',
                }}
              >
                Contact Mam
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= QUALIFICATIONS ================= */}
      <section
        style={{
          padding: '80px 20px',
          background: '#f0fdfa',
        }}
      >
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <p
              style={{
                color: '#0f766e',
                fontWeight: '700',
                letterSpacing: '2px',
              }}
            >
              ACADEMIC BACKGROUND
            </p>

            <h2
              style={{
                color: '#172554',
                fontWeight: '700',
                fontSize: '36px',
              }}
            >
              Qualifications & Experience
            </h2>
          </div>

          <Row className="g-4">

            {/* MCA */}
            <Col md={6} lg={3}>
              <div
                style={{
                  background: 'white',
                  padding: '30px 20px',
                  borderRadius: '18px',
                  textAlign: 'center',
                  height: '100%',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.06)',
                }}
              >
                <FaGraduationCap
                  size={40}
                  style={{
                    color: '#0f766e',
                    marginBottom: '18px',
                  }}
                />

                <h5 style={{ fontWeight: '700', color: '#172554' }}>
                  MCA
                </h5>

                <p style={{ color: '#666', margin: 0 }}>
                  Master of Computer Applications
                </p>
              </div>
            </Col>

            {/* M.Sc Mathematics */}
            <Col md={6} lg={3}>
              <div
                style={{
                  background: 'white',
                  padding: '30px 20px',
                  borderRadius: '18px',
                  textAlign: 'center',
                  height: '100%',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.06)',
                }}
              >
                <FaCalculator
                  size={40}
                  style={{
                    color: '#0f766e',
                    marginBottom: '18px',
                  }}
                />

                <h5 style={{ fontWeight: '700', color: '#172554' }}>
                  M.Sc Mathematics
                </h5>

                <p style={{ color: '#666', margin: 0 }}>
                  Strong academic background in Mathematics
                </p>
              </div>
            </Col>

            {/* MBA */}
            <Col md={6} lg={3}>
              <div
                style={{
                  background: 'white',
                  padding: '30px 20px',
                  borderRadius: '18px',
                  textAlign: 'center',
                  height: '100%',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.06)',
                }}
              >
                <FaAward
                  size={40}
                  style={{
                    color: '#0f766e',
                    marginBottom: '18px',
                  }}
                />

                <h5 style={{ fontWeight: '700', color: '#172554' }}>
                  MBA
                </h5>

                <p style={{ color: '#666', margin: 0 }}>
                  Master of Business Administration
                </p>
              </div>
            </Col>

            {/* B.Ed */}
            <Col md={6} lg={3}>
              <div
                style={{
                  background: 'white',
                  padding: '30px 20px',
                  borderRadius: '18px',
                  textAlign: 'center',
                  height: '100%',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.06)',
                }}
              >
                <FaChalkboardTeacher
                  size={40}
                  style={{
                    color: '#0f766e',
                    marginBottom: '18px',
                  }}
                />

                <h5 style={{ fontWeight: '700', color: '#172554' }}>
                  B.Ed.
                </h5>

                <p style={{ color: '#666', margin: 0 }}>
                  Professional teaching qualification
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= TEACHING EXPERIENCE ================= */}
      <section
        style={{
          padding: '85px 20px',
          background: '#ffffff',
        }}
      >
        <Container>
          <Row className="align-items-center g-5">

            <Col lg={6}>
              <p
                style={{
                  color: '#0f766e',
                  fontWeight: '700',
                  letterSpacing: '2px',
                }}
              >
                TEACHING EXPERIENCE
              </p>

              <h2
                style={{
                  fontSize: '38px',
                  fontWeight: '700',
                  color: '#172554',
                  marginBottom: '20px',
                }}
              >
                15+ Years of Teaching Experience
              </h2>

              <p
                style={{
                  color: '#555',
                  lineHeight: '1.8',
                  fontSize: '17px',
                }}
              >
                Over the years, Vanita Mehta has guided students with a
                teaching approach that gives importance to understanding,
                practice and individual learning needs.
              </p>

              <p
                style={{
                  color: '#555',
                  lineHeight: '1.8',
                  fontSize: '17px',
                }}
              >
                Her experience helps students approach challenging topics
                with better clarity and confidence.
              </p>
            </Col>

            <Col lg={6}>
              <div
                style={{
                  background: 'linear-gradient(135deg, #172554, #0f766e)',
                  color: 'white',
                  padding: '45px',
                  borderRadius: '25px',
                }}
              >
                <FaUsers
                  size={45}
                  style={{
                    color: '#fbbf24',
                    marginBottom: '20px',
                  }}
                />

                <h3
                  style={{
                    fontWeight: '700',
                    marginBottom: '20px',
                  }}
                >
                  Student-Centred Teaching
                </h3>

                <p
                  style={{
                    lineHeight: '1.8',
                    color: '#e0f2fe',
                    margin: 0,
                  }}
                >
                  Every student learns differently. The focus is on
                  explaining concepts clearly, solving problems step by
                  step and providing guidance according to the learner's
                  needs.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= SUBJECT EXPERTISE ================= */}
      <section
        style={{
          padding: '80px 20px',
          background: '#172554',
          color: 'white',
        }}
      >
        <Container>
          <div
            style={{
              textAlign: 'center',
              marginBottom: '50px',
            }}
          >
            <p
              style={{
                color: '#fbbf24',
                fontWeight: '700',
                letterSpacing: '2px',
              }}
            >
              SUBJECT EXPERTISE
            </p>

            <h2
              style={{
                fontSize: '36px',
                fontWeight: '700',
              }}
            >
              Mathematics & Computer Science
            </h2>
          </div>

          <Row className="g-4 justify-content-center">

            {/* Mathematics */}
            <Col md={6}>
              <div
                style={{
                  background: '#ffffff',
                  color: '#172554',
                  padding: '35px',
                  borderRadius: '20px',
                  height: '100%',
                }}
              >
                <FaCalculator
                  size={40}
                  style={{
                    color: '#0f766e',
                    marginBottom: '20px',
                  }}
                />

                <h3 style={{ fontWeight: '700' }}>
                  Mathematics
                </h3>

                <p
                  style={{
                    color: '#666',
                    lineHeight: '1.7',
                    margin: 0,
                  }}
                >
                  Focus on concept clarity, logical thinking, problem
                  solving and regular practice.
                </p>
              </div>
            </Col>

            {/* Computer Science */}
            <Col md={6}>
              <div
                style={{
                  background: '#ffffff',
                  color: '#172554',
                  padding: '35px',
                  borderRadius: '20px',
                  height: '100%',
                }}
              >
                <FaLaptopCode
                  size={40}
                  style={{
                    color: '#0f766e',
                    marginBottom: '20px',
                  }}
                />

                <h3 style={{ fontWeight: '700' }}>
                  Computer Science
                </h3>

                <p
                  style={{
                    color: '#666',
                    lineHeight: '1.7',
                    margin: 0,
                  }}
                >
                  Focus on understanding programming and computer science
                  concepts through clear explanations and practical
                  learning.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= TEACHING APPROACH ================= */}
      <section
        style={{
          padding: '80px 20px',
          background: '#fffbeb',
        }}
      >
        <Container>
          <Row className="align-items-center g-5">

            <Col lg={5}>
              <h2
                style={{
                  color: '#172554',
                  fontSize: '38px',
                  fontWeight: '700',
                }}
              >
                A Simple Approach to Better Learning
              </h2>
            </Col>

            <Col lg={7}>
              <Row className="g-3">

                <Col sm={6}>
                  <div
                    style={{
                      background: 'white',
                      padding: '22px',
                      borderRadius: '15px',
                      height: '100%',
                    }}
                  >
                    <h5
                      style={{
                        color: '#0f766e',
                        fontWeight: '700',
                      }}
                    >
                      Clear Concepts
                    </h5>

                    <p
                      style={{
                        color: '#666',
                        margin: 0,
                      }}
                    >
                      Topics are explained in a simple and understandable
                      manner.
                    </p>
                  </div>
                </Col>

                <Col sm={6}>
                  <div
                    style={{
                      background: 'white',
                      padding: '22px',
                      borderRadius: '15px',
                      height: '100%',
                    }}
                  >
                    <h5
                      style={{
                        color: '#0f766e',
                        fontWeight: '700',
                      }}
                    >
                      Regular Practice
                    </h5>

                    <p
                      style={{
                        color: '#666',
                        margin: 0,
                      }}
                    >
                      Practice helps students strengthen their
                      understanding.
                    </p>
                  </div>
                </Col>

                <Col sm={6}>
                  <div
                    style={{
                      background: 'white',
                      padding: '22px',
                      borderRadius: '15px',
                      height: '100%',
                    }}
                  >
                    <h5
                      style={{
                        color: '#0f766e',
                        fontWeight: '700',
                      }}
                    >
                      Personal Guidance
                    </h5>

                    <p
                      style={{
                        color: '#666',
                        margin: 0,
                      }}
                    >
                      Students receive guidance according to their
                      learning needs.
                    </p>
                  </div>
                </Col>

                <Col sm={6}>
                  <div
                    style={{
                      background: 'white',
                      padding: '22px',
                      borderRadius: '15px',
                      height: '100%',
                    }}
                  >
                    <h5
                      style={{
                        color: '#0f766e',
                        fontWeight: '700',
                      }}
                    >
                      Confidence Building
                    </h5>

                    <p
                      style={{
                        color: '#666',
                        margin: 0,
                      }}
                    >
                      The goal is to help students learn with greater
                      confidence.
                    </p>
                  </div>
                </Col>

              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= CTA ================= */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0f766e, #172554)',
          color: 'white',
          padding: '70px 20px',
          textAlign: 'center',
        }}
      >
        <Container>
          <h2
            style={{
              fontSize: '36px',
              fontWeight: '700',
              marginBottom: '15px',
            }}
          >
            Learn With the Right Guidance
          </h2>

          <p
            style={{
              fontSize: '18px',
              color: '#e0f2fe',
              marginBottom: '30px',
            }}
          >
            Connect with Vanita Mehta for guidance in Mathematics and
            Computer Science.
          </p>

          <Button
            href="tel:9416590813"
            style={{
              background: '#f59e0b',
              border: 'none',
              padding: '13px 30px',
              fontWeight: '700',
              borderRadius: '8px',
            }}
          >
            Contact Mam
          </Button>
        </Container>
      </section>

      <Footer2 />
    </>
  );
}

export default About2;

