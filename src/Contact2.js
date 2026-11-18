import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import {
  FaPhoneAlt,
  FaEnvelope,
  FaYoutube,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaWhatsapp,
} from 'react-icons/fa';

import Header2 from './Header2';
import Footer2 from './Footer2';

function Contact2() {

  // ================= FORM DATA =================
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  // ================= INPUT CHANGE =================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ================= SEND EMAIL =================
  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = 'Enquiry from Ladder to Success Website';

    const body = `
Hello Ladder to Success by Vanita Mehta,

I would like to enquire about your courses.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Message:
${formData.message}
`;

    const mailtoLink =
      `mailto:laddersuccess501@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      <Header2 />

      {/* ================= HERO ================= */}
      <section
        style={{
          background: 'linear-gradient(135deg, #20203a, #6c4fd3)',
          color: 'white',
          padding: '90px 20px',
          textAlign: 'center',
        }}
      >
        <Container>
          <h1
            style={{
              fontWeight: '700',
              fontSize: '45px',
              marginBottom: '15px',
            }}
          >
            Let's Start Your Learning Journey
          </h1>

          <p
            style={{
              fontSize: '18px',
              margin: 0,
              color: '#f1efff',
            }}
          >
            Have questions? Get in touch with Ladder to Success by Vanita
            Mehta.
          </p>
        </Container>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section
        style={{
          background: '#f7f5ff',
          padding: '70px 20px',
        }}
      >
        <Container>
          <Row className="g-5 align-items-stretch">

            {/* ================= LEFT SIDE ================= */}
            <Col lg={5}>
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '35px',
                  height: '100%',
                  boxShadow: '0 8px 25px rgba(32,32,58,0.08)',
                }}
              >
                <h2
                  style={{
                    color: '#20203a',
                    fontWeight: '700',
                    marginBottom: '15px',
                  }}
                >
                  Get In Touch
                </h2>

                <p
                  style={{
                    color: '#666',
                    lineHeight: '1.7',
                    marginBottom: '30px',
                  }}
                >
                  Whether you have a question about courses, subjects,
                  admissions or learning options, feel free to contact us.
                </p>

                {/* ================= PHONE ================= */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '18px',
                    marginBottom: '25px',
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: '#ebe7ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#6c4fd3',
                      fontSize: '20px',
                      flexShrink: 0,
                    }}
                  >
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <p
                      style={{
                        margin: 0,
                        color: '#777',
                        fontSize: '14px',
                      }}
                    >
                      Call Us
                    </p>

                    <a
                      href="tel:9416590813"
                      style={{
                        color: '#20203a',
                        fontWeight: '600',
                        textDecoration: 'none',
                      }}
                    >
                      9416590813
                    </a>
                  </div>
                </div>

                {/* ================= EMAIL ================= */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '18px',
                    marginBottom: '25px',
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: '#fff7ed',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#f09a38',
                      fontSize: '20px',
                      flexShrink: 0,
                    }}
                  >
                    <FaEnvelope />
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <p
                      style={{
                        margin: 0,
                        color: '#777',
                        fontSize: '14px',
                      }}
                    >
                      Email
                    </p>

                    <a
                      href="mailto:laddersuccess501@gmail.com"
                      style={{
                        color: '#20203a',
                        fontWeight: '600',
                        textDecoration: 'none',
                        wordBreak: 'break-word',
                      }}
                    >
                      laddersuccess501@gmail.com
                    </a>
                  </div>
                </div>

                {/* ================= WHATSAPP ================= */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '18px',
                    marginBottom: '25px',
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: '#e9fff1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#25D366',
                      fontSize: '22px',
                      flexShrink: 0,
                    }}
                  >
                    <FaWhatsapp />
                  </div>

                  <div>
                    <p
                      style={{
                        margin: 0,
                        color: '#777',
                        fontSize: '14px',
                      }}
                    >
                      WhatsApp Enquiry
                    </p>

                    <a
                      href="https://wa.me/919416590813?text=Hello%20Ladder%20to%20Success%20by%20Vanita%20Mehta,%20I%20want%20to%20enquire%20about%20your%20courses."
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: '#20203a',
                        fontWeight: '600',
                        textDecoration: 'none',
                      }}
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                {/* ================= YOUTUBE ================= */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '18px',
                    marginBottom: '25px',
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: '#ffecec',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ff0000',
                      fontSize: '22px',
                      flexShrink: 0,
                    }}
                  >
                    <FaYoutube />
                  </div>

                  <div>
                    <p
                      style={{
                        margin: 0,
                        color: '#777',
                        fontSize: '14px',
                      }}
                    >
                      YouTube Channel
                    </p>

                    <a
                      href="https://www.youtube.com/results?search_query=Ladder+to+Success+by+Vanita+Mehta"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: '#20203a',
                        fontWeight: '600',
                        textDecoration: 'none',
                      }}
                    >
                      Ladder to Success by Vanita Mehta
                    </a>
                  </div>
                </div>

                {/* ================= LOCATION ================= */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '18px',
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: '#ebe7ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#6c4fd3',
                      fontSize: '20px',
                      flexShrink: 0,
                    }}
                  >
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <p
                      style={{
                        margin: 0,
                        color: '#777',
                        fontSize: '14px',
                      }}
                    >
                      Learning Mode
                    </p>

                    <h6
                      style={{
                        color: '#20203a',
                        fontWeight: '600',
                        margin: '3px 0 0',
                      }}
                    >
                      Available Online/Offline
                    </h6>
                  </div>
                </div>

              </div>
            </Col>

            {/* ================= RIGHT SIDE FORM ================= */}
            <Col lg={7}>
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '35px',
                  height: '100%',
                  boxShadow: '0 8px 25px rgba(32,32,58,0.08)',
                }}
              >
                <h2
                  style={{
                    color: '#20203a',
                    fontWeight: '700',
                    marginBottom: '10px',
                  }}
                >
                  Send Us a Message
                </h2>

                <p
                  style={{
                    color: '#777',
                    marginBottom: '30px',
                  }}
                >
                  Fill in the details below and get in touch with us.
                </p>

                <Form onSubmit={handleSubmit}>

                  {/* NAME */}
                  <Form.Group className="mb-4">
                    <Form.Label
                      style={{
                        color: '#20203a',
                        fontWeight: '600',
                      }}
                    >
                      Your Name
                    </Form.Label>

                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      style={{
                        padding: '13px',
                        borderRadius: '10px',
                      }}
                    />
                  </Form.Group>

                  {/* PHONE */}
                  <Form.Group className="mb-4">
                    <Form.Label
                      style={{
                        color: '#20203a',
                        fontWeight: '600',
                      }}
                    >
                      Phone Number
                    </Form.Label>

                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                      style={{
                        padding: '13px',
                        borderRadius: '10px',
                      }}
                    />
                  </Form.Group>

                  {/* EMAIL */}
                  <Form.Group className="mb-4">
                    <Form.Label
                      style={{
                        color: '#20203a',
                        fontWeight: '600',
                      }}
                    >
                      Email Address
                    </Form.Label>

                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      style={{
                        padding: '13px',
                        borderRadius: '10px',
                      }}
                    />
                  </Form.Group>

                  {/* MESSAGE */}
                  <Form.Group className="mb-4">
                    <Form.Label
                      style={{
                        color: '#20203a',
                        fontWeight: '600',
                      }}
                    >
                      Message
                    </Form.Label>

                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message..."
                      required
                      style={{
                        padding: '13px',
                        borderRadius: '10px',
                      }}
                    />
                  </Form.Group>

                  {/* SEND BUTTON */}
                  <Button
                    type="submit"
                    style={{
                      background: '#6c4fd3',
                      border: 'none',
                      padding: '13px 28px',
                      borderRadius: '10px',
                      fontWeight: '600',
                    }}
                  >
                    <FaPaperPlane style={{ marginRight: '8px' }} />
                    Send Message
                  </Button>

                </Form>
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      {/* ================= CTA ================= */}
      <section
        style={{
          background: '#20203a',
          color: 'white',
          padding: '60px 20px',
          textAlign: 'center',
        }}
      >
        <Container>

          <h2
            style={{
              fontWeight: '700',
              marginBottom: '12px',
            }}
          >
            Ready to Take the Next Step?
          </h2>

          <p
            style={{
              color: '#d8d6e8',
              marginBottom: '28px',
            }}
          >
            Start your learning journey with Ladder to Success by Vanita
            Mehta.
          </p>

          <div>

            {/* CALL NOW */}
            <a
              href="tel:9416590813"
              style={{
                display: 'inline-block',
                background: '#f09a38',
                color: '#ffffff',
                textDecoration: 'none',
                padding: '13px 30px',
                borderRadius: '10px',
                fontWeight: '600',
                margin: '5px',
              }}
            >
              <FaPhoneAlt style={{ marginRight: '8px' }} />
              Call Now
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919416590813?text=Hello%20Ladder%20to%20Success%20by%20Vanita%20Mehta,%20I%20want%20to%20enquire%20about%20your%20courses."
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-block',
                background: '#25D366',
                color: '#ffffff',
                textDecoration: 'none',
                padding: '13px 30px',
                borderRadius: '10px',
                fontWeight: '600',
                margin: '5px',
              }}
            >
              <FaWhatsapp style={{ marginRight: '8px' }} />
              WhatsApp Enquiry
            </a>

          </div>
        </Container>
      </section>

      <Footer2 />
    </>
  );
}

export default Contact2;