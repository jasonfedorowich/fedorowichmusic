import React, { Component } from 'react';
import CustomRouter from './CustomRoute';


class Offerings extends CustomRouter{
    

    render(){
        if (!this.state.completedAnimation) {
            return (<div>
              {this.musicNotes}
            </div>);
          }
          return (
            <></>
          )
    }
}

export default Offerings;