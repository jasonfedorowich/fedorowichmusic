import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css';
import styls from '../css/styles.css'

class ButtonWrapper extends React.Component{

    constructor(props){
        super(props);
    }
      //float-end for end of col
    render(){
       return (<Row>
          <div className={this.props.clazz}>
              <p></p>
            <Button variant={this.props.variant} size={this.props.size} className={this.props.btnClass}>
              {this.props.text}
            </Button>
            <p></p>
  
          </div>
       </Row>)
    }

}

export default ButtonWrapper;
