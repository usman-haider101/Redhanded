import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Advantages = () => {
    return (
        <div className='advantage-bg '>
            <Container>
                <h2 className=" text-center pt-5 mb-1 advantage-h1  ">The REDHANDED Advantage</h2>
                <h5 className="  text-center mb-1 advantage-h5 bold-me font-outfit">Welcome to the new face of Commercial Real Estate Leasing!</h5>
                <Row className='pt-5 d-flex justify-content-center'>
                    <Col xs="12" sm="12" md="12" lg="6" className='pt-4'>
                        <div className='d-flex'>
                            <div className='pe-3'>
                                <i class="bi bi-check2-circle fs-3"></i>
                            </div>

                            <div>
                                <p className="mt-1 advantage-p">REDHANDED is an online platform where real estate owners and entreprenuers can connect and negotiate daily!</p>
                            </div>
                        </div>

                        <div className='d-flex'>
                            <div className=' pe-3'>
                                <i class="bi bi-check2-circle fs-3"></i>
                            </div>
                            <div>
                                <p className="mt-1 advantage-p"> REDHANDED eliminates the need for a broker with their commission fees.</p>
                            </div>
                        </div>

                        <div className='d-flex'>
                            <div className=' pe-3'>
                                <i class="bi bi-check2-circle fs-3"></i>
                            </div>

                            <div>
                                <p className="mt-1 advantage-p"> Lease or locate highly desired commercial spaces through our AI-driven technology platform.</p>
                            </div>
                        </div>

                        <div className='d-flex'>
                            <div className='pe-3'>
                                <i class="bi bi-check2-circle fs-3"></i>
                            </div>

                            <div className='align-self-end'>
                                <p className="mt-1 advantage-p"> REDHANDED provides you with the tools to market your space.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" sm="12" md="12" lg="6" className='text-end advantage-video'>
                        <iframe width="85%" height="270" src="https://www.youtube.com/embed/tTtjETjGDFY"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </Col >
                    <Col xs="8" sm="8" md="8" lg="12">
                        <p className="  text-center pt-5 section2-heading6 font-outfit pb-5 mb-0">Check out this short video and learn how to save thousands on your next Commercial Real Estate Leasing.</p>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Advantages
