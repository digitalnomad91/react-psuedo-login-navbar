import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate, Link, useLocation } from 'react-router-dom';

function NavigationBar(props) {

    let navigate = useNavigate();
    const location = useLocation();

    /* Login link callback function (just sets user state to hardcoded user value) */
    const loginCallback = () => {
        alert("logged in");
        props.setUser({
          id: 1,
          username: 'test'
        })
        //redirect to /food page using react-dom SPA
        navigate(`/food`);
      }  
    
      /* Logout link callback function (just sets user state to blank object) */
      const logoutCallback = () => {
        alert("logged out");
        props.setUser({})
        //redirect to / home page using react-dom SPA
        navigate(`/`); 
      }  

    //hardcoded inline display style for styling nav links properly
    const divStyle = {
        display: 'inline',
      };

    //Check if user.id is set, and then display the proper navbar links based on login state
    let loggedinLinks, username;
    if (typeof(props.user.id) === "undefined") {      
        loggedinLinks = <div style={divStyle}><Nav.Link style={divStyle} href="#" onClick={e => loginCallback()}>Login</Nav.Link></div>;
    } else {      
        loggedinLinks = <div style={divStyle}>
                        <Link style={divStyle} className={location.pathname == '/food' ? 'nav-link fw-bold' : 'nav-link'} to="/food">Food</Link>
                        <Link style={divStyle} className={location.pathname.includes("/stuff") ? 'nav-link fw-bold' : 'nav-link'} to="/stuff">Stuff</Link>
                        <Nav.Link style={divStyle} href="#" onClick={e => logoutCallback()}>Logout</Nav.Link>
                    </div>;
        username = <span style={divStyle}>({props.user.username})</span>;    
    }

    //bootstrap navbar component & our react-dom links
    return (
    <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <div style={divStyle}><Link style={divStyle} className={location.pathname == '/' ? 'nav-link fw-bold' : 'nav-link'} to="/">Home</Link></div>
                {loggedinLinks} {username}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);
}
export default NavigationBar;