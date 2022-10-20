import React from 'react'
import '../App.css'
import { Nav, Navbar, Form, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl } from 'react-bootstrap';

const Welcome = () => {
  return (
    <>
      <div className='welcm-bg  py-5  container-fluid'>
        <h1 className=" pt-5 text-center  font-weight-bolder mb-4 font-3vw font-normal-6vh ">LEASE YOUR COMMERCIAL SPACE <br /> WITHOUT A BROKER</h1>
        <Row className='justify-content-center'>
          <Col xl="6" lg="6" md="6" sm="8" xs="10"><div className="d-flex height-13vh justify-content-center align-items-center mt-4 sec1Bg ">
            <Form.Control className='searchbox form-control' type="text" placeholder="Enter City or State" />
            <button type="button" className=" btn-velvet-bg height-9vh  field-search-btn w-25  font-3vh width-normal-11vw sec1-search-btn-mobile-reponsive btn btn-light">Search</button>
          </div></Col>
        </Row>

        <p className="text-center mt-5 font-2vh ">Welcome to the new face of Commercial Real Estate Leasing! REDHANDED is an online platform <br />where real estate owners and potential tenants can transact independently of a broker. <br />Don't get caught REDHANDED paying broker fees!</p>

        <div className='pb-5 btn-div'>
          <Button className='btns btn-velvet-bg btnfont-size me-2 ' variant="primary">Im a landlord</Button>
          <Button className='btns btn-tnt btnfont-size' variant="primary">Im a tenant</Button>
        </div>
      </div>

    </>
  )
}

export default Welcome
