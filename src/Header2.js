import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Header2() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
      <Container>

        <Navbar.Brand as={Link} to="/">
          <img
            src="/lts.jpeg"
            alt="Ladder To Success"
            width="100"
            height="65"
            style={{ objectFit: 'contain' }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">

          <Nav className="mx-auto me-2 pe-5">

            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/course">
              Courses
            </Nav.Link>

            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>

            <Nav.Link as={Link} to="/question">
              FAQ
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>

          </Nav>

          {/* ================= ENQUIRY BUTTON ================= */}
          <Button as="a"
  href="tel:9416590813"
           
            variant="success"
          >
            Enquiry Now
          </Button>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Header2;