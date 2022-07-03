
import React, { Component } from 'react';
import Hamburger from '../components/Hamburger';
import CustomRouter from './CustomRoute';

class Contact extends CustomRouter{


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
                Contact info
            </div>
        );
    }
}

export default Contact;