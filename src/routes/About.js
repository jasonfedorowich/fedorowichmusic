import { Outlet, Link } from "react-router-dom";
import MusicNotes from "../components/Transition";
import React, { Component } from 'react';
import CustomRouter from "./CustomRoute";

class About extends CustomRouter{


  render(){
   
    if(!this.state.completedAnimation){
      return (<div>
        {this.musicNotes}
      </div>);
    }
    return (
      <div>
        <div>
        {this.hambugerMenu}
        </div>
       
        
        <Outlet />
        <div>about page</div>
      </div>
    );
  }
 
}

export default About;