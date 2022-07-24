import { Outlet, Link } from "react-router-dom";
import React, { Component } from 'react';
import CustomRouter from "./CustomRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
import video from '../resources/2022-06-26-153413.webm'
import styls from '../css/styles.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Canv from "../components/Offcanvas";
import Navi from "../components/Navi"
import Button from 'react-bootstrap/Button';
import ButtonWrapper from "../components/Button";
import ContainerWrapper from "../components/Container";
import { Container, Row, Col } from "react-bootstrap";

class Home extends CustomRouter {


  render() {
    if (!this.state.completedAnimation) {
      return (<div>
        {this.musicNotes}
      </div>);
    }
    return (
      
      <div>
       
          {this.hambugerMenu}
         
        
            <Navi links={[
              <Canv name="Home" title="I am the senate!!!!" body="So its treason then!!!!" link="/">Home</Canv>,
              <Canv name="About" title="For a safer and securer empire!!!" body="Have you ever heard the tale of darth plaguis the wise?" link="/about">About</Canv>,
              <Canv name="Contact" title="Leave us!!!" body="We're glad you can join us!!!" link="/contact">Contact</Canv>
            ]} />

<ContainerWrapper fluid={true} rows={
  [
    <ContainerWrapper containerClass="lr-padding-containers" rows={[
      <Row>
        <div className="embed-responsive embed-responsive-4by3">
        <video class="embed-responsive-item" autoPlay>
          <source src={video} type="video/webm"/>

        </video>
        </div>
      </Row>
    ]
    }>

    </ContainerWrapper>,

    <ContainerWrapper fluid={true} containerClass="lr-padding-containers bg-nice-purp p-3 mb-5 shadow rounded" rows={
      [
        <Row>
          <Col>
          <h1 className="text-center">
          <p/>
        <p></p>
         I am the Senate!!!
        <p></p>

        </h1>
          </Col>
         
     
        </Row>,
      <ButtonWrapper variant="light" size="lg" text="Find out more"></ButtonWrapper>

      ]
    }>
    </ContainerWrapper>,

     <ContainerWrapper containerClass="shadow p-3 mb-5 rounded lr-padding-containers" rows={
      [
        <Row>
          <p></p>
        <p>
          We are music gombas live and dye by de music can you play music 
        i like me some music heavy metal and punk also good
        </p>
        </Row>,
        <ButtonWrapper variant="outline-secondary" size="sm" text="Do you have the cojanes?"></ButtonWrapper>
      ]
    }>
    </ContainerWrapper>,
    <ContainerWrapper containerClass="bg-nice-purp shadow p-3 mb-5 rounded lr-padding-containers" rows={
      [
        <Row>
          <p>
          </p>
          <p>
          Classes start when i say they start listen to me you have to listen to me get to the classes!!!!!!
          </p>
        </Row>,
        <ButtonWrapper variant="outline-secondary" size="sm" text="Do you have what it takes?"></ButtonWrapper>
      ]
    }>

    </ContainerWrapper>, 
      <ContainerWrapper containerClass="shadow p-3 mb-5 rounded lr-padding-containers" rows={
        [
          <Row>
            <p>
            </p>
            <p>
            Get to the choppa!!!
            </p>
          </Row>,
          <ButtonWrapper variant="outline-light" size="sm" text="Shut up!"></ButtonWrapper>
        ]
      }>

      </ContainerWrapper>,

        <ContainerWrapper fluid={true} containerClass="bg-nice-purp shadow p-3 mb-5 rounded lr-padding-containers" rows={
          [
            <Row>
              <p>
              </p>
              <p>
              Bottom section this is the end for you!!
              </p>
            </Row>,
            <ButtonWrapper variant="outline-light" size="sm" text="Collect prize!"></ButtonWrapper>
          ]
        }>

        </ContainerWrapper>

  ]
}>

</ContainerWrapper>
            
      
     
{/* 
        <Container fluid style={{paddingLeft: '100px', paddingRight: '100px'}}>
    <Row style={{paddingLeft: '0px', paddingRight: '0px'}}>
        <Col style={{paddingLeft: '0px', paddingRight: '0px'}}>
            My content
        </Col>
    </Row>
</Container> */}

      </div>
    );
  }

}

export default Home;