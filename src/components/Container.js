import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css';
import styls from '../css/styles.css'
import Container from 'react-bootstrap/Container';


class ContainerWrapper extends React.Component{

    constructor(props){
        super(props);
    }

    //to change the padding use fluid=true cant get this to work nicely 
    render(){
        return (
            <Container className={this.props.containerClass} fluid={this.props.fluid}>
                {this.props.rows.map(row => {
                return row;
            })}
            </Container>

        );

    }

}

export default ContainerWrapper;