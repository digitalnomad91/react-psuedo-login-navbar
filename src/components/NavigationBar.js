import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate, LinkContainer, Link, BrowserRouter} from 'react-router-dom';

function NavigationBar(props) {

    let navigate = useNavigate();

    const loginCallback = () => {
        alert("logged in");
        props.setUser({
          id: 1,
          username: 'test'
        })
        navigate(`/food`);
      }  
    
      const logoutCallback = () => {
        alert("logged out");
        props.setUser({})
        navigate(`/`);
      }  

    const divStyle = {
        display: 'inline',
      };
    let loginLink, username;
    if (typeof(props.user.id) === "undefined") {      
        loginLink = <Nav.Link style={divStyle} href="#" onClick={e => loginCallback()}>Login</Nav.Link>;
    } else {      
        loginLink = <Nav.Link style={divStyle} href="#" onClick={e => logoutCallback()}>Logout</Nav.Link>;
        username = <span style={divStyle}>({props.user.username})</span>;    
    }

    return (
    <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link style={divStyle} className="nav-link" to="/">Home</Link>
                <Link style={divStyle} className="nav-link" to="/food">Food</Link>
                <Link style={divStyle} className="nav-link" to="/stuff">Stuff</Link>
                {loginLink} {username}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);
}
export default NavigationBar;