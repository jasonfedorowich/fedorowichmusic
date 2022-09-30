import { Outlet, Link } from "react-router-dom";
import MusicNotes from "../components/Transition";
import React, { Component } from 'react';
import CustomRouter from "./CustomRoute";
import { Container, Row, Col } from "react-bootstrap";
import ContainerWrapper from "../components/Container";
import img3 from "../resources/c3.jpg"
import { para1, para2, para3, para4 } from "../text/AboutText";
import img5 from "../resources/c5.jpg";
import { NewlineText } from "../utils/SplitText";
import img6 from "../resources/c4.jpg";
import Footer from "../components/Footer";

class About extends CustomRouter{


  render(){
   
    if(!this.state.completedAnimation){
      return (<div>
        {this.musicNotes}
      </div>);
    }
    return (
      <div>

    {this.hambugerMenu}


 <ContainerWrapper fluid={true} containerClass="lr-padding-container" rows={
  [
    <Row className="lr-padding-container">
      <p></p>
    <img src={img3} className="w-50 d-block mx-auto"></img>
    <p></p>
  </Row>,
  <Container>
<Row className="rounded shadow bg-nice-purp">
  <p></p>
    
      <NewlineText text={para1}/>
    
    <p>
    <NewlineText text={para2}/>
    </p>
    <p>
    <NewlineText text={para3}/>
    </p>
  </Row>
  </Container>,
    <Container>
      <p></p>
    </Container>,
    <Container>
      <Row>
        <Col>
          <img src={img5} className="w-50 d-block mx-auto"></img>
          <h2 className="text-center">Gwen Fedorowich</h2>
          <h3 className="text-center">B.Ed, ARCT, ECE, MYCC</h3>
        </Col>
        <Col className="rounded shadow bg-nice-purp">
        <p>
          <p></p>
          <NewlineText text={para4}/>
        </p>
        </Col>
      </Row>
    </Container>,
    <Container>
      <p></p>
      <Row>
      <Col className="rounded shadow bg-nice-purp">
        <p>
          <p></p>
          <NewlineText text={para4}/>
        </p>
        </Col>
        <Col>
        <img src={img6} className="w-50 d-block mx-auto"></img>
          <h2 className="text-center">Michelle Fedorowich</h2>
          <h3 className="text-center">BSW, SSW, MYCC, RCM Level 10 Piano</h3>
        </Col>
      </Row>
      <p></p>
    </Container>,
    <ContainerWrapper fluid={true} containerClass="bg-nice-purp shadow p-3 mb-5 rounded lr-padding-containers" rows={
      [
        <Footer/>
      ]
    }>

    </ContainerWrapper>
  
  ]
       
      }>

      </ContainerWrapper>
      </div>
     
    );
  }
 
}

export default About;