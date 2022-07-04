import { Outlet, Link } from "react-router-dom";
import React, { Component } from 'react';
import CustomRouter from "./CustomRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
import video from '../resources/2022-06-26-153413.webm'
import styls from '../css/styles.css'


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
        <section className="container text-left bg-nice-purp">
          <div className="row">
            <div className="col-1">
              <Link to="/about">About</Link>
            </div>
            <div className="col-1">
              <Link to="/contact">Contact</Link>
            </div>
          </div>


        </section>
        <section className="container">
          <div className="row">
            <div className="embed-responsive embed-responsive-4by3">
            <video class="embed-responsive-item" autoPlay>
              <source src={video} type="video/webm"/>

            </video>
            </div>
            
          </div>
        </section>
        <section className="container">
          <div className="row">
            <p>
              We are music gombas live and dye by de music can you play music 
            i like me some music heavy metal and punk also good
            </p>
         
          </div>
         
        </section>
        <section className="container bg-nice-purp">
          <div className="row">
            <p>
              Classes start when i say they start listen to me you have to listen to me get to the classes!!!!!!
            </p>

          </div>

        </section>
        <section className="container">
          <div className="row">
            Another boring section when will this website finish
          </div>

        </section>

        <section className="container bg-nice-purp">
        <div className="row">
          <p>
            Bottom section this is the end for you!!
          </p>
        </div>
        </section>

      </div>
    );
  }

}

export default Home;