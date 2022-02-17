import React from 'react'
import {Navbar,Container,Nav, NavDropdown} from 'react-bootstrap'
import './Nav2.css'

const Nav1 = () => {
  return (
    <Navbar className='nav2-main' expand='sm'  >
        <Container  className='justify-content-center'>
            {/* <Navbar.Brand>
                <a href="google.com"><img src="https://www.globalwms.com/images/CAPITAL_logo.png" alt="logo"/></a>    
            </Navbar.Brand>  */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <NavDropdown className='px-5' title="Categories" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/">Licensing</NavDropdown.Item>
                    <NavDropdown.Item href="/">Activity</NavDropdown.Item>
                    <NavDropdown.Item href="/">Visa</NavDropdown.Item>
                    <NavDropdown.Item href="/">Office</NavDropdown.Item>
                </NavDropdown>
                {/* <Nav.Item className='px-5'>
                    <Nav.Link href="/home">Categories</Nav.Link>
                </Nav.Item> */}
                <Nav.Item className='pl-5'>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item className='px-2' >
                    <Nav.Link href="/home">Licensing</Nav.Link>
                </Nav.Item>
                <Nav.Item className='px-2' >
                    <Nav.Link href="/home">Activity</Nav.Link>
                </Nav.Item>
                <Nav.Item className='px-2' >
                    <Nav.Link href="/home">Visa</Nav.Link>
                </Nav.Item>
                <Nav.Item className='px-2 pr-5' >
                    <Nav.Link href="/home">Office</Nav.Link>
                </Nav.Item> 
                <Nav.Item className='pl-5'>
                    <Nav.Link href="/home">How it works</Nav.Link>
                </Nav.Item> 
                <Nav.Item className='pr-5'>
                    <Nav.Link href="/home">Contact Us</Nav.Link>
                </Nav.Item> 
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Nav1 