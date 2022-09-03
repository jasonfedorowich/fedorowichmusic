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
import PictureCarousel from "../components/Carousel";
import Blurb from "../components/HomePageBlurb";
import { home1 } from "../text/HomePageText";
import { home2 } from "../text/HomePageText";
import pic1 from "../resources/OOgutZ0k.png"
import MusicBox from "../components/MusicBox";
import MusicPup from "../components/MusicPup";
import TextCarousel from "../components/TextCarousel";
import Footer from "../components/Footer";
import vid1 from "../resources/vid1.MOV"
import kid from "../resources/student1.jpg"

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
              <Canv name="Our Students" title="At Fedorowich Music Studio our students are top priority" body="Learn more about our students" img={<img src={kid} alt="Gold Medal" className="img-thumbnail"></img>} link="/testimonials">Our Students</Canv>,
              <Canv name="What We Offer" title="I am the senate!!!!" body="So its treason then!!!!" link="/offerings">What We Offer</Canv>,
              <Canv name="About Us" title="For a safer and securer empire!!!" body="Have you ever heard the tale of darth plaguis the wise?" link="/about">About Us</Canv>,
              <Canv name="Contact Us" title="Leave us!!!" body="We're glad you can join us!!!" link="/contact">Contact Us</Canv>
            ]} />

<ContainerWrapper fluid={true} rows={
  [
    <PictureCarousel/>,

    <ContainerWrapper fluid={true} containerClass="lr-padding-container" rows={
      [
       <Container fluid className="padding-bot">
        <Row>
            
              <Row className="padding-bot">
                  <Row className="rounded shadow bg-nice-purp">
                      <p></p>
                    <h3 className="text-center">
                    {home1}
                    </h3>
                    <p>
                      {home2}
                    </p>
                      </Row>
                    
                    </Row>
        
                    <Row className="padding-bot">
                        <img src={pic1} className='img-rounded w-75 d-block mx-auto'>
                        </img>                                      
                    </Row>
                   
                  
                  
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
    <ContainerWrapper fluid={true} containerClass="p-3 mb-5 rounded lr-padding-containers bg-nice-purp" rows={
      [
        <TextCarousel/>
      ]
    }>

    </ContainerWrapper>, 
      <ContainerWrapper containerClass="container-sm lr-padding-containers" rows={
        [
          <Row className="padding-bot">
            <video src={vid1} controls>

            </video>
          </Row>
        ]
      }>

      </ContainerWrapper>,

        <ContainerWrapper fluid={true} containerClass="bg-nice-purp shadow p-3 mb-5 rounded lr-padding-containers" rows={
          [
            <Footer/>
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