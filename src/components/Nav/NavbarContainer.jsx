import React from 'react'
import { Navbar, Container } from 'react-bootstrap';

const logo = require("./../../assets/logo.jpg");

export default function NavbarContainer() 
{
  return (
    <div>
        <Navbar className='d-flex'>
          <img
            src={logo}
            width="90"
            height="80"
            className="ml-4"
            alt="CETI Monitor Logo"
          />
        </Navbar>
        
    </div>
  )
}
