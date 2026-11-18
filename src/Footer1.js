
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Footer1()
{
    return(
        <>
    {/* ================= FOOTER ================= */}

      <footer className="bg-dark text-white py-4">

        <Container>

          <Row>

          
            <Col md={4} className="mb-3">

              <img
                src="/logo.png"
                alt="Softech Logo"
                width="120"
                height="45"
                className="mb-2"
              />

              <p className="text-white-50">
                Learn. Build. Grow.
              </p>

            </Col>


            {/* Quick Links */}
            <Col md={4} className="mb-3">

              <h5>
                Quick Links
              </h5>

              <Nav className="flex-column">

                <Nav.Link
                  href="#home"
                  className="text-white-50 p-0 mb-2"
                >
                  Home
                </Nav.Link>

                <Nav.Link
                  href="#courses"
                  className="text-white-50 p-0 mb-2"
                >
                  Courses
                </Nav.Link>

                <Nav.Link
                  href="#about"
                  className="text-white-50 p-0 mb-2"
                >
                  About
                </Nav.Link>

                <Nav.Link
                  href="#faq"
                  className="text-white-50 p-0"
                >
                  FAQ
                </Nav.Link>

              </Nav>

            </Col>


            {/* Contact */}
            <Col md={4}>

              <h5>
                Contact
              </h5>

              <p className="text-white-50 mb-1">
                Email: info@softech.com
              </p>

              <p className="text-white-50">
                Phone: +91 9876543210
              </p>

            </Col>

          </Row>


          <hr />


          {/* Copyright */}
          <div className="text-center">

            <p className="mb-0 text-white-50">
              © 2026 Softech. All Rights Reserved.
            </p>

          </div>

        </Container>

      </footer>
    
        </>
    );

}
export default Footer1