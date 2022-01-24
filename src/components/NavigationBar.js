import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

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
    let loggedinLinks, username;
    if (typeof(props.user.id) === "undefined") {      
        loggedinLinks = <div style={divStyle}><Nav.Link style={divStyle} href="#" onClick={e => loginCallback()}>Login</Nav.Link></div>;
    } else {      
        loggedinLinks = <div style={divStyle}>
                        <Link style={divStyle} className="nav-link" to="/food">Food</Link>
                        <Link style={divStyle} className="nav-link" to="/stuff">Stuff</Link>
                        <Nav.Link style={divStyle} href="#" onClick={e => logoutCallback()}>Logout</Nav.Link>
                    </div>;
        username = <span style={divStyle}>({props.user.username})</span>;    
    }

    return (
    <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <div style={divStyle}><Link style={divStyle} className="nav-link" to="/">Home</Link></div>
                {loggedinLinks} {username}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);
}
export default NavigationBar;