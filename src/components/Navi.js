import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import video from '../resources/2022-06-26-153413.webm'

class Navi extends React.Component{

    constructor(props){
        super(props);
    }


    render(){
        return (<>
    <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="">Navbar</Navbar.Brand>
        <Nav className="me-auto">
            {this.props.links.map(link => {
                return link;
            })}
        </Nav>
        </Container>
      </Navbar>

        </>);

    }
}


export default Navi;