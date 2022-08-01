import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

class Blurb extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(<>
        {<Row className={this.props.classNames}>
            {this.props.elements}
            </Row>}
        </>);
    }

}

export default Blurb