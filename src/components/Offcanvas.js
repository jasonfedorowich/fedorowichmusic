import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, NavDropdown, Row, Col} from 'react-bootstrap';
import stylz from '../css/styles.css'

class Canv extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: false
        }
        if(this.props.img){
          this.imgCol = <Col>
                        {this.props.img}
                    </Col>
        }else{
          this.imgCol = <></>
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
          <NavDropdown onMouseDown={this.handleShow} className="me-2 purp-text-color" href={this.props.link} title={this.props.name}>
            {this.props.name}
          </NavDropdown>
          <Offcanvas show={this.state.show} onHide={this.handleClose} placement='top' name='top' className="h-50">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className='purp-text-color caret'>
                <Nav.Link href={this.props.link} className='purp-text-color bi bi-caret-down'>
                <i className="bi bi-caret-down"></i>
                {this.props.title}
                </Nav.Link>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Container>
                <Row>
                  <Col>
                    <Nav.Link href={this.props.link} className='purp-text-color caret'>
                    {this.props.body}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
                    <i className="bi bi-box-arrow-left"></i>
                    </Nav.Link>
                  </Col>
                    {this.imgCol}

                </Row>
              </Container>
               
            </Offcanvas.Body>
          </Offcanvas>
        </>
      );

   }



}


export default Canv;