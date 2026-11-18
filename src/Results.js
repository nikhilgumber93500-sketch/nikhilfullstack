import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {
  FaTrophy,
  FaMedal,
  FaStar,
  FaGraduationCap,
  FaArrowRight,
} from 'react-icons/fa';

function Results() {
  const resultCards = [
    {
      number: '01',
      title: 'Outstanding Performance',
      text: 'Students achieving excellent academic performance through consistent learning and preparation.',
      icon: <FaTrophy />,
    },
    {
      number: '02',
      title: 'Strong Academic Growth',
      text: 'Focused guidance and regular practice helping students improve their academic performance.',
      icon: <FaMedal />,
    },
    {
      number: '03',
      title: 'Student Achievements',
      text: 'Celebrating the dedication, hard work and achievements of our students.',
      icon: <FaStar />,
    },
  ];

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        style={{
          background: '#20203a',
          color: '#fff',
          padding: '85px 20px',
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <span
                style={{
                  color: '#f09a38',
                  fontWeight: '700',
                  letterSpacing: '2px',
                  fontSize: '14px',
                }}
              >
                OUR ACHIEVEMENTS
              </span>

              <h1
                style={{
                  fontSize: '52px',
                  fontWeight: '800',
                  marginTop: '15px',
                  lineHeight: '1.15',
                }}
              >
                Results That
                <br />
                <span style={{ color: '#a995ff' }}>
                  Inspire Success
                </span>
              </h1>

              <p
                style={{
                  color: '#c9c9d5',
                  fontSize: '18px',
                  lineHeight: '1.8',
                  maxWidth: '680px',
                  marginTop: '20px',
                }}
              >
                Every result represents dedication, hard work and the
                right guidance. We are proud to celebrate the academic
                achievements of our students.
              </p>
            </Col>

            <Col
              lg={4}
              className="text-center mt-5 mt-lg-0"
            >
              <div
                style={{
                  width: '190px',
                  height: '190px',
                  borderRadius: '50%',
                  background: '#6c4fd3',
                  margin: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 20px 50px rgba(108,79,211,0.35)',
                }}
              >
                <FaTrophy
                  size={85}
                  style={{ color: '#f09a38' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* =====================================================
          RESULT HIGHLIGHTS
      ===================================================== */}
      <section
        style={{
          padding: '80px 20px',
          background: '#f7f5ff',
        }}
      >
        <Container>
          <div className="text-center mb-5">
            <span
              style={{
                color: '#6c4fd3',
                fontWeight: '700',
                letterSpacing: '1.5px',
              }}
            >
              STUDENT SUCCESS
            </span>

            <h2
              style={{
                color: '#20203a',
                fontWeight: '800',
                fontSize: '38px',
                marginTop: '8px',
              }}
            >
              Celebrating Every Achievement
            </h2>

            <p
              className="text-muted"
              style={{ maxWidth: '650px', margin: 'auto' }}
            >
              Our students' progress motivates us to continue creating
              a better learning experience.
            </p>
          </div>

          <Row className="g-4">
            {resultCards.map((item, index) => (
              <Col md={4} key={index}>
                <div
                  style={{
                    background: '#fff',
                    borderRadius: '22px',
                    padding: '35px',
                    height: '100%',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      right: '20px',
                      top: '15px',
                      fontSize: '55px',
                      fontWeight: '800',
                      color: '#eeeafa',
                    }}
                  >
                    {item.number}
                  </div>

                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '16px',
                      background: '#ebe7ff',
                      color: '#6c4fd3',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '25px',
                    }}
                  >
                    {item.icon}
                  </div>

                  <h4
                    style={{
                      color: '#20203a',
                      fontWeight: '700',
                      marginTop: '25px',
                    }}
                  >
                    {item.title}
                  </h4>

                  <p
                    className="text-muted"
                    style={{ lineHeight: '1.7' }}
                  >
                    {item.text}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* =====================================================
          RESULT GALLERY
      ===================================================== */}
      <section
        style={{
          padding: '85px 20px',
          background: '#fff',
        }}
      >
        <Container>
          <Row className="align-items-end mb-5">
            <Col md={8}>
              <span
                style={{
                  color: '#f09a38',
                  fontWeight: '700',
                  letterSpacing: '1.5px',
                }}
              >
                RESULT GALLERY
              </span>

              <h2
                style={{
                  color: '#20203a',
                  fontWeight: '800',
                  fontSize: '40px',
                  marginTop: '8px',
                }}
              >
                Our Students' Results
              </h2>
            </Col>

            <Col md={4}>
              <p className="text-muted mb-0">
                A glimpse of the hard work and achievements of our
                students.
              </p>
            </Col>
          </Row>

          {/* PHOTO PLACEHOLDERS */}
          <Row className="g-4">
            <Col lg={4} md={6}>
              <div
                style={{
                  height: '330px',
                  borderRadius: '20px',
                  background: '#f7f5ff',
                  border: '2px dashed #cfc8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '20px',
                }}
              >
                <div>
                  <FaGraduationCap
                    size={55}
                    style={{ color: '#6c4fd3' }}
                  />

                  <h5
                    style={{
                      color: '#20203a',
                      fontWeight: '700',
                      marginTop: '15px',
                    }}
                  >
                    Result Photo 01
                  </h5>

                  <p className="text-muted mb-0">
                    Add your result image here
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div
                style={{
                  height: '330px',
                  borderRadius: '20px',
                  background: '#fff7ed',
                  border: '2px dashed #f2c58e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '20px',
                }}
              >
                <div>
                  <FaMedal
                    size={55}
                    style={{ color: '#f09a38' }}
                  />

                  <h5
                    style={{
                      color: '#20203a',
                      fontWeight: '700',
                      marginTop: '15px',
                    }}
                  >
                    Result Photo 02
                  </h5>

                  <p className="text-muted mb-0">
                    Add your result image here
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div
                style={{
                  height: '330px',
                  borderRadius: '20px',
                  background: '#f7f5ff',
                  border: '2px dashed #cfc8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '20px',
                }}
              >
                <div>
                  <FaStar
                    size={55}
                    style={{ color: '#6c4fd3' }}
                  />

                  <h5
                    style={{
                      color: '#20203a',
                      fontWeight: '700',
                      marginTop: '15px',
                    }}
                  >
                    Result Photo 03
                  </h5>

                  <p className="text-muted mb-0">
                    Add your result image here
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* =====================================================
          ACHIEVEMENT MESSAGE
      ===================================================== */}
      <section
        style={{
          background: '#fff7ed',
          padding: '80px 20px',
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <span
                style={{
                  color: '#f09a38',
                  fontWeight: '700',
                  letterSpacing: '1.5px',
                }}
              >
                MORE THAN MARKS
              </span>

              <h2
                style={{
                  color: '#20203a',
                  fontWeight: '800',
                  fontSize: '38px',
                  marginTop: '10px',
                }}
              >
                Every Student Has a Story of Success
              </h2>

              <p
                className="text-muted"
                style={{
                  fontSize: '17px',
                  lineHeight: '1.8',
                  maxWidth: '650px',
                }}
              >
                Results are not just numbers. They reflect the effort,
                consistency and confidence developed throughout the
                learning journey.
              </p>
            </Col>

            <Col lg={5} className="mt-4 mt-lg-0">
              <div
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                }}
              >
                <p style={{ marginBottom: '15px' }}>
                  <FaStar
                    className="me-2"
                    style={{ color: '#f09a38' }}
                  />
                  Concept Clarity
                </p>

                <p style={{ marginBottom: '15px' }}>
                  <FaStar
                    className="me-2"
                    style={{ color: '#f09a38' }}
                  />
                  Consistent Practice
                </p>

                <p style={{ marginBottom: '15px' }}>
                  <FaStar
                    className="me-2"
                    style={{ color: '#f09a38' }}
                  />
                  Better Confidence
                </p>

                <p className="mb-0">
                  <FaStar
                    className="me-2"
                    style={{ color: '#f09a38' }}
                  />
                  Academic Growth
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
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
              fontWeight: '800',
              fontSize: '38px',
            }}
          >
            Your Success Story Could Be Next
          </h2>

          <p
            style={{
              color: '#c9c9d5',
              fontSize: '17px',
              marginTop: '15px',
            }}
          >
            Start learning with the right guidance and move towards
            your goals.
          </p>

          <Button
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
            Get Started
            <FaArrowRight className="ms-2" />
          </Button>
        </Container>
      </section>
    </>
  );
}

export default Results;

