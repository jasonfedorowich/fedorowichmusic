import React, { Component } from 'react';
import MusicNotes from "../components/Transition";
import Hamburger from '../components/Hamburger';


var animationTime = 5000;

class CustomRouter extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            completedAnimation: false
          }

          this.musicNotes = <MusicNotes/>
          this.hambugerMenu = <Hamburger/>
    }

    componentDidMount(){
        this.interval = setInterval(()=>{
          this.setState({completedAnimation: true})
        }, animationTime);
      }

      
}

export default CustomRouter;
