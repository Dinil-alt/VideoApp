import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} className='fs-4' style={{textDecoration:'none', color:'black'}}>
            <h1 className='text-warning border border-2 border-black p-4 bg-black rounded' ><i class="fa-regular fa-circle-play"></i> watchIt</h1>
            </Link>
          
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header