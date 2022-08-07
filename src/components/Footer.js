import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import logo from '../resources/logo.png'
import styls from '../css/styles.css'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';


class Footer extends React.Component{


    constructor(props){
        super(props);
    }


    render(){
        return (<>
        <Row className='fnt-size-sm'>
            <Col>
            <img src={logo}></img>
            </Col>
            <Col><div>©2022 Fedorowich Music Studio. All rights reserved.	</div></Col>
            <Col>
                <ul >
                    <li className='linear-li'>
                    <Link to={"testimonials"}>Testimonials</Link>
                    </li>
                    <li className='linear-li'>
                    <Link to={"offerings"}>Offerings</Link>
                    </li>
                    <li className='linear-li'>
                    <Link to={"contact"}>Contact</Link>
                    </li>
                    <li className='linear-li'>
                    <Link to={"about"}>About Us</Link>

                    </li>
                </ul>
            
            </Col>
            <Col>
            <div>
                <ul>
                    <li className='linear-li'>
                    <SocialIcon url="https://instagram.com/fedorowichmusicstudio" />

                    </li>
                    <li className='linear-li'>
                    <SocialIcon url="https://www.facebook.com/MusicForYoungChildrenMississauga" />
 
                    </li>
                    <li className='linear-li'>
                    <SocialIcon url="https://studio.youtube.com/channel/UCBNtR9Dhput9cktKmFxnZKg/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D" />
                    </li>
                </ul>
            </div>
    

            </Col>
        </Row>
    </>);

    }
}


export default Footer;