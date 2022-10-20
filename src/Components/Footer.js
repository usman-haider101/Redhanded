import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <footer className='footer-bg'>
        <Container className='py-3'>
          <Row className='justify-content-center'>
            <Col sm='6' xs='6' md='12' lg="2" >
              <div className='text-center'>
                <h1 className="footer-icon py-0 my-0 font-outfit ">REDHANDED</h1>
                <p className="text-white p-0 m-0 font-outfit footer-p ">© 2021 REDHANDED</p>
              </div>
            </Col>
            <Col sm='12' xs='12' md='12' lg="8" className='align-self-end footr'>
              <ul className='d-flex list-unstyled justify-content-around text-white footer-links text-center'>
                <li className='px-1 text-nowrap'>About Us</li>
                <li className='px-1'>Blog</li>
                <li className='px-1'>Partners</li>
                <li className='px-1'>Pricing</li>
                <li className='px-1'>Pricing</li>
                <li className='px-1 text-nowrap'>Contact Us</li>
                <li className='px-1 text-nowrap'>Terms & Conditions</li>
                <li className='px-1 text-nowrap'>Privacy Policy</li>
              </ul>
            </Col>
            <Col sm='4' xs='4' md='3' lg="2" className='align-self-end'>
              <ul className='d-flex list-unstyled justify-content-around  '>
                <li className=' social-icons face-b rounded-circle'><i class="fa-brands fa-facebook-f"></i></li>
                <li className=' social-icons insta rounded-circle'><i class="fa-brands fa-instagram"></i></li>
                <li className=' social-icons pin-t rounded-circle'><i class="fa-brands fa-pinterest"></i></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Footer
