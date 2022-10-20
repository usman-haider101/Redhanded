import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Working = () => {
  return (
    <div className='Working-bg'>
      <h1 className=" text-white text-center mb-1 pt-5 fs-1" >How It Works</h1>
      <h4 className=" working-h4 text-center mb-1 h4-font-size">Welcome to the new face of Commercial Real Estate Leasing!</h4>

      <Container>
        <Row className='working-points pt-3 pb-5'>
          <Col sm='12' xs='12' lg="6" className='d-flex px-5'>
            <div className='me-2'>
              <img src="https://redhanded.azurewebsites.net/static/media/sec3-img1.ba937176.svg" alt="" />
            </div>
            <div>
              <h1 className=" my-3 " >01</h1>
              <h6 className="mt-1 text-white h5-font-size margin-top-bottom fw-bold">List your space.</h6>
              <p className="line-height-30 text-white font-smaller">List your space with ease using our step-by-step wizard to help along the way!</p>
            </div>
          </Col>
          <Col sm='12' xs='12' lg="6" className='d-flex px-5'>
            <div className='me-2'>
              <img src="	https://redhanded.azurewebsites.net/static/media/sec3-img2.74143de1.svg" alt="" />
            </div>
            <div>
              <h1 className=" my-3 " >02</h1>
              <h6 className="mt-1 text-white h5-font-size margin-top-bottom fw-bold">Connect.</h6>
              <p className="line-height-30 text-white font-smaller">Connect with potential landlords and tenants to find the best deal possible!</p>
            </div>
          </Col>
          <Col sm='12' xs='12' lg="6" className='d-flex px-5'>
            <div className='me-2'>
              <img src="	https://redhanded.azurewebsites.net/static/media/sec3-img3.b5aace80.svg" alt="" />
            </div>
            <div>
              <h1 className=" my-3 " >03</h1>
              <h6 className="mt-1 text-white h5-font-size margin-top-bottom fw-bold">Negotiate.</h6>
              <p className="line-height-30 text-white font-smaller">How much does a deal cost? Find what your connections can offer you before making any decision.</p>
            </div>
          </Col>
          <Col sm='12' xs='12' lg="6" className='d-flex px-5'>
            <div className='me-2'>
              <img src="		https://redhanded.azurewebsites.net/static/media/sec3-img4.d4a87622.svg" alt="" />
            </div>
            <div>
              <h1 className=" my-3 " >04</h1>
              <h6 className="mt-1 text-white h5-font-size margin-top-bottom fw-bold">Close.</h6>
              <p className="line-height-30 text-white font-smaller">Close your newest lease and enjoy the savings on comission fees!</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Working
