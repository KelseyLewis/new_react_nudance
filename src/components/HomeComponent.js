import React, { Component } from 'react';
import Carousel from './CarouselComponent';


console.log('Home Component entered');

export default class Home extends Component {
    render() {
        return(
            <Carousel classes={this.props.classes}/>
        );
    }
}
