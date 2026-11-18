import Container from "react-bootstrap/Container"; 
import Navbar from "react-bootstrap/Navbar"; 
import Button from "react-bootstrap/Button"; 
import { useNavigate } from "react-router-dom"; 
import "./Header3.css";
function Header3()
 {
     const navigate = useNavigate(); 
     const handleLogout = () => { navigate("/login"); };
      return ( 
      <Navbar bg="dark" variant="dark" className="py-2"> 
      <Container fluid className="px-4">
        <Navbar.Brand>
             <img src="/logo.png" alt="Logo" style={{ width: "150px", height: "60px" }} /> 
             </Navbar.Brand> 
             
             <div className="d-flex align-items-center gap-5"> 
                <span className="text-warning"> Welcome Nikhil Developer </span> 
                <Button variant="success" className="rounded-pill px-4" onClick={handleLogout} > 
                    Logout </Button>
                     </div>
                      </Container>
                       </Navbar> 
                       ); 
                    } 
                    export default Header3;