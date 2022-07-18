import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown } from 'react-bootstrap';

class Canv extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: false
        }
    }


    setShow = (sho) =>{
        this.setState({show: sho});
    }


    handleClose = () => this.setShow(false);
   handleShow = () => this.setShow(true);

   render(){
    return (
        <>
          <NavDropdown variant="primary" onMouseDown={this.handleShow} className="me-2" href={this.props.link} title={this.props.name}>
            {this.props.name}
          </NavDropdown>
          <Offcanvas show={this.state.show} onHide={this.handleClose} placement='top' name='top'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <Nav.Link href={this.props.link} className='text-info'>
                {this.props.title}
                </Nav.Link>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav.Link href={this.props.link}>
                {this.props.body}
                </Nav.Link>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      );

   }



}


export default Canv;