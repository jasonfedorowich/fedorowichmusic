
import React, { Component } from 'react';
import Hamburger from '../components/Hamburger';

class Contact extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <div>
                    <Hamburger/>
                </div>
                Contact info
            </div>
        );
    }
}

export default Contact;