import { Outlet, Link } from "react-router-dom";
import React, { Component } from 'react';
import CustomRouter from "./CustomRoute";



class Home extends CustomRouter{


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
      
      <nav>
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <Outlet />
    </div>
    );
  }
  
}

export default Home;