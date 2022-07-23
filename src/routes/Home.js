import { Outlet, Link } from "react-router-dom";
import React, { Component } from 'react';
import CustomRouter from "./CustomRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
import video from '../resources/2022-06-26-153413.webm'
import styls from '../css/styles.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Canv from "../components/Offcanvas";
import Navi from "../components/Navi"
import Button from 'react-bootstrap/Button';
import ButtonWrapper from "../components/Button";

class Home extends CustomRouter {


  render() {
    if (!this.state.completedAnimation) {
      return (<div>
        {this.musicNotes}
      </div>);
    }
    return (
      <div>
        <div>
          {this.hambugerMenu}
        </div>
        <section className="container">
          <div className="row">

          </div>

        </section>
        
            <Navi links={[
              <Canv name="Home" title="I am the senate!!!!" body="So its treason then!!!!" link="/">Home</Canv>,
              <Canv name="About" title="For a safer and securer empire!!!" body="Have you ever heard the tale of darth plaguis the wise?" link="/about">About</Canv>,
              <Canv name="Contact" title="Leave us!!!" body="We're glad you can join us!!!" link="/contact">Contact</Canv>
            ]} />
            
        <section className="container">
          <p></p>
          <div className="row">
            <div className="embed-responsive embed-responsive-4by3">
            <video class="embed-responsive-item" autoPlay>
              <source src={video} type="video/webm"/>

            </video>
            </div>
            
          </div>
          <p></p>
        </section>
        <section className="container-lg  bg-nice-purp">
          <div className="row">
         
            <h1 className="text-center mw-100 mh-100">
              <p/>
            <p></p>
             I am the Senate!!!
            <p></p>

            </h1>
         
          </div>

          <ButtonWrapper variant="light" size="lg" text="Find out more"></ButtonWrapper>
         
        </section>
        <section className="container">
          <div className="row">
            <p></p>
            <p>
              We are music gombas live and dye by de music can you play music 
            i like me some music heavy metal and punk also good
            </p>
          </div>
          <ButtonWrapper variant="outline-secondary" size="sm" text="Do you have the cojanes?"></ButtonWrapper>
        </section>
        <section className="container bg-nice-purp">
          <div className="row">
            <p></p>
            <p>
              Classes start when i say they start listen to me you have to listen to me get to the classes!!!!!!
            </p>
            <p></p>
          </div>
          <ButtonWrapper variant="secondary" size="lg" text="Listen up!"></ButtonWrapper>
         
        </section>
        <section className="container">
          <p></p>
          <div className="row">
            Get to the choppa!!!
          </div>
            <p></p>
            <ButtonWrapper variant="outline-light" size="sm" text="Shut up!"></ButtonWrapper>

        </section>

        <section className="container bg-nice-purp">
        <div className="row">
          <p></p>
          <p>
            Bottom section this is the end for you!!
          </p>
          <p></p>
        </div>
        <ButtonWrapper variant="outline-light" size="sm" text="Collect prize!"></ButtonWrapper>

        </section>

      </div>
    );
  }

}

export default Home;