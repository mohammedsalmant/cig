import React from 'react'
import {Navbar,Container, FormControl, Button, Nav} from 'react-bootstrap'
import './Nav1.css'

const Nav1 = () => {
  return (
    <Navbar className='nav1-main' expand="sm"  sticky="top"  fixed="top" >
        <Container className="nav1-main container">
            <Navbar.Brand>
                <a href="/"><img className='nav1-img' src="https://www.globalwms.com/images/CAPITAL_logo.png" alt="logo"/></a>    
            </Navbar.Brand> 
            <Nav>
                <Nav></Nav>
            </Nav>
            <Navbar.Text classname='nav1-search'>
                <FormControl  placeholder="Search" className='m-auto'/>
            </Navbar.Text>
            <Nav>
                <Button className="mx-4" id="nav1-login">Login</Button>
                <Button className="mx-4"id="nav1-signup">Sign Up</Button>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Nav1 