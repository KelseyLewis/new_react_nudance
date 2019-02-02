import React, { Component } from 'react';
import Carousel from './CarouselComponent';

export default class Home extends Component {

    render() {
        return(
            <Carousel classes={this.props.classes}/>
        );
    }
}
