import Carousel from 'react-bootstrap/Carousel';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../resources/3mi3g5fn71ta.png'
import img2 from '../resources/emperor-palpatine-1555323736.jpg'
import img3 from '../resources/eY4wBN4G4csKaYt3g6QAyG.jpeg'
import { Container, Row } from 'react-bootstrap';
import styls from '../css/styles.css'


class CarouselWrapper extends React.Component{
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
                                <img className='d-block w-100 mh-50 h-25'
                            src={img1}
                            alt="Fedorowich Music Studio"
                            height={25}/>
                            <div className='text-on-image text-center text-white'>
                                <h1>Fedorowich Music Studio</h1>
                            </div>
                            </header>
                
                    </Carousel.Item>
                    <Carousel.Item>
                    <header>
                        <img className='d-block w-100 mh-50 h-25'
                            src={img2}
                            alt="Fedorowich Music Studio"
                            height={25}/>
                            <div className='text-on-image text-center text-white'>
                                <h1>Fedorowich Music Studio</h1>
                            </div>
                            </header>
                    </Carousel.Item>
                    <Carousel.Item>
                    <header>
                                <img className='d-block w-100 mh-50 h-25'
                            src={img3}
                            alt="Fedorowich Music Studio"
                            height={25}/>
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

export default CarouselWrapper