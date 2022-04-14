import appCss from '../css/App.css';
import navCss from '../css/nav.css'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container  } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function TopBar() {
  const loggedUsername = localStorage.getItem('User')
  const logout = () =>{
    localStorage.clear()
  }
  return (
<Navbar bg="dark" variant="dark"  className='p-1' expand="md" style={{position:'sticky'}} fixed="top">
    <Navbar.Brand style={{fontWeight:'500'}}>
    <Link to="/home">VINOVE</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <NavDropdown title={loggedUsername} id="basic-nav-dropdown">
          <NavDropdown.Item href="/profile" >Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={logout}>
          <Link to="/">Logout</Link>
          </NavDropdown.Item>
        </NavDropdown>
      <img src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-7--v2.png"/>
      </Nav>
    </Navbar.Collapse>
</Navbar>
  );
}

export default TopBar;
