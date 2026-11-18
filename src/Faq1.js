
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import {
  FaQuestionCircle,
  FaGraduationCap,
  FaBookOpen,
  FaArrowRight,
} from 'react-icons/fa';

import Header2 from './Header2';
import Footer2 from './Footer2';

function Faq1() {
  return (
    <>
      <Header2 />

      {/* ================= HERO ================= */}
      <section
        style={{
          background: '#f7f5ff',
          padding: '80px 20px',
        }}
      >
        <Container>
          <Row className="align-items-center">

            <Col lg={7}>
              <span
                style={{
                  color: '#6c4fd3',
                  fontWeight: '700',
                  letterSpacing: '2px',
                  fontSize: '14px',
                }}
              >
                FREQUENTLY ASKED QUESTIONS
              </span>

              <h1
                style={{
                  color: '#20203a',
                  fontSize: '48px',
                  fontWeight: '800',
                  marginTop: '12px',
                  lineHeight: '1.2',
                }}
              >
                Have Questions?
                <br />
                <span style={{ color: '#6c4fd3' }}>
                  We Have Answers.
                </span>
              </h1>

              <p
                style={{
                  color: '#666',
                  fontSize: '18px',
                  lineHeight: '1.8',
                  maxWidth: '650px',
                  marginTop: '20px',
                }}
              >
                Find answers to some of the most common questions about
                our courses, coaching and learning programs.
              </p>
            </Col>

            <Col
              lg={5}
              className="text-center mt-5 mt-lg-0"
            >
              <div
                style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  background: '#6c4fd3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 'auto',
                  boxShadow: '0 20px 45px rgba(108,79,211,0.20)',
                }}
              >
                <FaQuestionCircle
                  size={85}
                  style={{ color: '#f09a38' }}
                />
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section
        style={{
          padding: '80px 20px',
          background: '#fff',
        }}
      >
        <Container>
          <Row className="g-5">

            {/* LEFT SIDE */}
            <Col lg={4}>
              <div
                style={{
                  position: 'sticky',
                  top: '30px',
                }}
              >
                <span
                  style={{
                    color: '#f09a38',
                    fontWeight: '700',
                    letterSpacing: '1.5px',
                  }}
                >
                  NEED TO KNOW
                </span>

                <h2
                  style={{
                    color: '#20203a',
                    fontWeight: '800',
                    fontSize: '36px',
                    marginTop: '10px',
                  }}
                >
                  Frequently Asked Questions
                </h2>

                <p
                  className="text-muted"
                  style={{
                    lineHeight: '1.8',
                    marginTop: '18px',
                  }}
                >
                  We believe that clear information makes the learning
                  journey easier. Here are answers to some common
                  questions.
                </p>

                <div
                  style={{
                    background: '#f7f5ff',
                    borderRadius: '18px',
                    padding: '25px',
                    marginTop: '30px',
                  }}
                >
                  <FaBookOpen
                    size={32}
                    style={{ color: '#6c4fd3' }}
                  />

                  <h5
                    style={{
                      color: '#20203a',
                      fontWeight: '700',
                      marginTop: '15px',
                    }}
                  >
                    Still have a question?
                  </h5>

                  <p className="text-muted">
                    Feel free to contact us for more information.
                  </p>

                  {/* CONTACT BUTTON */}
                  <Button
                    as={Link}
                    to="/contact"
                    style={{
                      background: '#6c4fd3',
                      border: 'none',
                      padding: '10px 20px',
                    }}
                  >
                    Contact Us
                    <FaArrowRight className="ms-2" />
                  </Button>
                </div>
              </div>
            </Col>

            {/* RIGHT SIDE */}
            <Col lg={8}>
              <Accordion flush>

                {/* FAQ 1 */}
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Which classes and courses do you offer?
                  </Accordion.Header>

                  <Accordion.Body>
                    We provide coaching for Classes 9th & 10th,
                    Classes 11th & 12th, B.Tech, B.Sc, BCA, BBA,
                    B.Com, B.A, Polytechnic, MCA, M.Tech and
                    various competitive examinations.
                  </Accordion.Body>
                </Accordion.Item>

                {/* FAQ 2 */}
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Which subjects do you mainly teach?
                  </Accordion.Header>

                  <Accordion.Body>
                    Our main coaching areas are Mathematics and
                    Computer Science. For Classes 9th & 10th,
                    Mathematics, English and SST are also offered.
                  </Accordion.Body>
                </Accordion.Item>

                {/* FAQ 3 */}
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Do you provide Mathematics coaching for school students?
                  </Accordion.Header>

                  <Accordion.Body>
                    Yes. Mathematics coaching is available for
                    school-level students, with a focus on concept
                    clarity, regular practice and examination
                    preparation.
                  </Accordion.Body>
                </Accordion.Item>

                {/* FAQ 4 */}
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Do you provide coaching for B.Tech students?
                  </Accordion.Header>

                  <Accordion.Body>
                    Yes. Coaching is available for B.Tech Mathematics
                    subjects including M1, M2 and M3.
                  </Accordion.Body>
                </Accordion.Item>

                {/* FAQ 5 */}
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Is Computer Science coaching available?
                  </Accordion.Header>

                  <Accordion.Body>
                    Yes. Computer Science is one of our main areas of
                    coaching, with emphasis on understanding concepts
                    and developing problem-solving skills.
                  </Accordion.Body>
                </Accordion.Item>

                {/* FAQ 6 */}
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    Do you offer competitive exam preparation?
                  </Accordion.Header>

                  <Accordion.Body>
                    Yes. We provide preparation support for various
                    competitive examinations with focus on concepts,
                    practice and problem solving.
                  </Accordion.Body>
                </Accordion.Item>

                {/* FAQ 7 */}
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    Who provides the coaching?
                  </Accordion.Header>

                  <Accordion.Body>
                    The coaching is provided by Vanita Mehta,
                    who has qualifications including MCA,
                    M.Sc. Mathematics, MBA and B.Ed., along with
                    extensive teaching experience.
                  </Accordion.Body>
                </Accordion.Item>

                {/* FAQ 8 */}
                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    How can I get more information about a course?
                  </Accordion.Header>

                  <Accordion.Body>
                    You can contact us directly for information about
                    course details, learning requirements and other
                    queries.
                  </Accordion.Body>
                </Accordion.Item>

              </Accordion>
            </Col>

          </Row>
        </Container>
      </section>

      {/* ================= LEARNING APPROACH ================= */}
      <section
        style={{
          background: '#20203a',
          color: '#fff',
          padding: '75px 20px',
        }}
      >
        <Container>

          <div className="text-center mb-5">
            <span
              style={{
                color: '#f09a38',
                fontWeight: '700',
                letterSpacing: '1.5px',
              }}
            >
              OUR APPROACH
            </span>

            <h2
              style={{
                fontWeight: '800',
                fontSize: '38px',
                marginTop: '10px',
              }}
            >
              Learning Made Clear
            </h2>
          </div>

          <Row className="g-4">

            {/* UNDERSTAND */}
            <Col md={4}>
              <div
                style={{
                  background: '#2b2b47',
                  borderRadius: '18px',
                  padding: '30px',
                  height: '100%',
                }}
              >
                <FaGraduationCap
                  size={35}
                  style={{ color: '#f09a38' }}
                />

                <h4
                  style={{
                    fontWeight: '700',
                    marginTop: '18px',
                  }}
                >
                  Understand
                </h4>

                <p
                  style={{
                    color: '#c9c9d5',
                    lineHeight: '1.7',
                  }}
                >
                  Focus on understanding concepts clearly before
                  moving to advanced problems.
                </p>
              </div>
            </Col>

            {/* PRACTICE */}
            <Col md={4}>
              <div
                style={{
                  background: '#2b2b47',
                  borderRadius: '18px',
                  padding: '30px',
                  height: '100%',
                }}
              >
                <FaBookOpen
                  size={35}
                  style={{ color: '#f09a38' }}
                />

                <h4
                  style={{
                    fontWeight: '700',
                    marginTop: '18px',
                  }}
                >
                  Practice
                </h4>

                <p
                  style={{
                    color: '#c9c9d5',
                    lineHeight: '1.7',
                  }}
                >
                  Regular practice helps students strengthen their
                  understanding and improve problem-solving.
                </p>
              </div>
            </Col>

            {/* SUCCEED */}
            <Col md={4}>
              <div
                style={{
                  background: '#2b2b47',
                  borderRadius: '18px',
                  padding: '30px',
                  height: '100%',
                }}
              >
                <FaGraduationCap
                  size={35}
                  style={{ color: '#f09a38' }}
                />

                <h4
                  style={{
                    fontWeight: '700',
                    marginTop: '18px',
                  }}
                >
                  Succeed
                </h4>

                <p
                  style={{
                    color: '#c9c9d5',
                    lineHeight: '1.7',
                  }}
                >
                  Build confidence and prepare effectively for
                  academic goals and examinations.
                </p>
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      {/* ================= CTA ================= */}
      <section
        style={{
          background: '#f7f5ff',
          padding: '70px 20px',
          textAlign: 'center',
        }}
      >
        <Container>

          <h2
            style={{
              color: '#20203a',
              fontWeight: '800',
              fontSize: '38px',
            }}
          >
            Didn't Find Your Answer?
          </h2>

          <p
            className="text-muted"
            style={{
              fontSize: '17px',
              marginTop: '15px',
            }}
          >
            Get in touch with us and we'll be happy to help.
          </p>

          {/* CONTACT BUTTON */}
          <Button
            as={Link}
            to="/contact"
            style={{
              background: '#f09a38',
              border: 'none',
              padding: '12px 28px',
              fontWeight: '700',
              marginTop: '10px',
            }}
          >
            Contact Us
            <FaArrowRight className="ms-2" />
          </Button>

        </Container>
      </section>

      <Footer2 />
    </>
  );
}

export default Faq1;
