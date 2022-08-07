import Carousel from 'react-bootstrap/Carousel';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../resources/3mi3g5fn71ta.png'
import img2 from '../resources/emperor-palpatine-1555323736.jpg'
import img3 from '../resources/eY4wBN4G4csKaYt3g6QAyG.jpeg'
import { Container, Row, Col} from 'react-bootstrap';
import styls from '../css/styles.css'
import { quote1 } from '../text/CarouselText';
import { quote2 } from '../text/CarouselText';

class TextCarousel extends React.Component{
    constructor(props){
        super(props)
    }

    //todo we will have to make sure each image is the same here in the carousel to 
    render(){
        return (
            <Container className='padding-bot'>
              <Row>
              <Carousel slide={true} controls={false} indicators={false}>
                        <Carousel.Item>
                            <Col>
                            {quote1}
                            </Col>
                
                    </Carousel.Item>
                    <Carousel.Item>
                        <Col>
                        {quote2}
                        </Col>
                    </Carousel.Item>      
                </Carousel>
                           
              </Row>
                
            </Container>
            
        )
    }


}

export default TextCarousel