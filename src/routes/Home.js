import { Outlet, Link } from "react-router-dom";
import React, { Component } from 'react';
import CustomRouter from "./CustomRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
import styls from '../css/styles.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Canv from "../components/Offcanvas";
import Navi from "../components/Navi"
import Button from 'react-bootstrap/Button';
import ButtonWrapper from "../components/Button";
import ContainerWrapper from "../components/Container";
import { Container, Row, Col } from "react-bootstrap";
import CarouselWrapper from "../components/Carousel";
import Blurb from "../components/HomePageBlurb";
import { home1 } from "../text/HomePageText";
import { home2 } from "../text/HomePageText";
import pic1 from "../resources/OOgutZ0k.png"
import MusicBox from "../components/MusicBox";
import MusicPup from "../components/MusicPup";

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
              <Canv name="What Students Are Saying!" title="I am the senate!!!!" body="So its treason then!!!!" link="/testimonials">What Students Are Saying</Canv>,
              <Canv name="What We Offer" title="I am the senate!!!!" body="So its treason then!!!!" link="/offerings">What We Offer</Canv>,
              <Canv name="About Us" title="For a safer and securer empire!!!" body="Have you ever heard the tale of darth plaguis the wise?" link="/about">About Us</Canv>,
              <Canv name="Contact Us" title="Leave us!!!" body="We're glad you can join us!!!" link="/contact">Contact Us</Canv>
            ]} />

<ContainerWrapper fluid={true} rows={
  [
    <CarouselWrapper/>,

    <ContainerWrapper fluid={true} containerClass="lr-padding-container" rows={
      [
       <Container fluid className="padding-bot">
        <Row>
            <Col>
              <Row className="padding-bot">
                  <Row className="rounded shadow bg-nice-purp">
                      <p></p>
                    <h3 className="text-right">
                    {home1}
                    </h3>
                      </Row>
                    
                    </Row>
                    <Row>
                      <Col className="padding-bot">
                        <img src={pic1} className='img-fluid rounded'>
                        </img>
                      </Col>
                      
                    </Row>
                   
                  </Col>
                  <Col className="rounded bg-nice-purp padding-bot shadow">
                    <p></p>
                  <p className="text-center">
                    {home2}
                    </p>
                    <p></p>
                    <ButtonWrapper variant="light" size="md" text="Meet Us" clazz="text-center"></ButtonWrapper>
                    <Row>
                      <MusicBox/>
                    </Row>
                  </Col>
                </Row>
       </Container>
      
      

      ]
    }>
    </ContainerWrapper>,

     <ContainerWrapper fluid={true} containerClass="lr-padding-containers" rows={
      [
       
       
        
       
       
    
      ]
    }>
    </ContainerWrapper>,
    <ContainerWrapper fluid={true} containerClass="p-3 mb-5 rounded lr-padding-containers" rows={
      [
        <Row>
          <Col>
          <p>
            <h2 className="fnt-purp">
              Having taught over 200 students from the Greater Toronto Area 
            </h2>
          </p>
          </Col>
          <Col className="bg-nice-purp rounded shadow">
          <p>
          </p>
          <p>
            <h3>Find out what our students and parents our saying about us...</h3>
          </p>
          <ButtonWrapper variant="light" size="md" text="Learn More" clazz={"text-center"}></ButtonWrapper>
          </Col>
         
        </Row>
        
      ]
    }>

    </ContainerWrapper>, 
      <ContainerWrapper containerClass="container-sm lr-padding-containers" rows={
        [
          <MusicPup/>
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
            <ButtonWrapper variant="outline-light" size="sm" text="Collect prize!" clazz={"text-center"}></ButtonWrapper>
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