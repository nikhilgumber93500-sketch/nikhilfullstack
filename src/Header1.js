import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header1() {
  return (
    <>

      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>

          <Navbar.Brand href="#home">
            <img
              src="/logo.png"
              alt="Softech Logo"
              width="120"
              height="45"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          {/* Mobile Toggle */}
          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">

            {/* Menu */}
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

            {/* Login Button */}
            <Button variant="outline-light">
              <Link to={"/login"}>   Login</Link>
           

            </Button>

          </Navbar.Collapse>

        </Container>
      </Navbar>
</>

  );
}
export default Header1;