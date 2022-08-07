import Carousel from 'react-bootstrap/Carousel';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../resources/c1.png"
import img2 from "../resources/c2.jpg"
import img3 from "../resources/c3.jpg"
import img4 from "../resources/c6.jpg"
import img5 from "../resources/c7.jpg"
import { Container, Row } from 'react-bootstrap';
import styls from '../css/styles.css'


class PictureCarousel extends React.Component{
    constructor(props){
        super(props)
    }

    //todo we will have to make sure each image is the same here in the carousel to 
    render(){
        return (
            <Container className='padding-bot'>
              <Row>
              <Carousel fade>
                        <Carousel.Item>
                            <header>
                                <img className='d-block w-100'
                            src={img1}
                            alt="Fedorowich Music Studio"
                            />
                            <div className='text-on-image text-center text-white'>
                                <h1>Fedorowich Music Studio</h1>
                            </div>
                            </header>
                
                    </Carousel.Item>
                    <Carousel.Item>
                    <header>
                        <img className='d-block w-100'
                            src={img2}
                            alt="Fedorowich Music Studio"
                            />
                            <div className='text-on-image text-center text-white'>
                                <h1>Fedorowich Music Studio</h1>
                            </div>
                            </header>
                    </Carousel.Item>
                    <Carousel.Item>
                    <header>
                                <img className='d-block w-100'
                            src={img3}
                            alt="Fedorowich Music Studio"
                           />
                            <div className='text-on-image text-center text-white'>
                                <h1>Fedorowich Music Studio</h1>
                            </div>
                            </header>
                    </Carousel.Item>
                    <Carousel.Item>
                    <header>
                                <img className='d-block w-100'
                            src={img4}
                            alt="Fedorowich Music Studio"
                           />
                            <div className='text-on-image text-center text-white'>
                                <h1>Fedorowich Music Studio</h1>
                            </div>
                            </header>
                    </Carousel.Item>
                    <Carousel.Item>
                    <header>
                                <img className='d-block w-100'
                            src={img5}
                            alt="Fedorowich Music Studio"
                           />
                            <div className='text-on-image text-center text-white'>
                                <h1>Fedorowich Music Studio</h1>
                            </div>
                            </header>
                    </Carousel.Item>
                
                            </Carousel>
                           
              </Row>
                
            </Container>
            
        )
    }


}

export default PictureCarousel