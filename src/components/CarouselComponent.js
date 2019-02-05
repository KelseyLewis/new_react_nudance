import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';

console.log('Carousel Entered');

const Slide = ({image}) => {
    console.log('Slide Entered')
    // const styles = {
    //   backgroundImage: `url(${image})`,
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center'
    // }
    // return (
    // <div className="carousel-item" style={styles}></div>,
    // console.log(styles.backgroundImage)
    // );

    return (
        <Card>
            <CardImg width="100%" src={image} />
        </Card>
    );
    // }
  }

export default class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0,
        };
    }

    render() {
        return(
            <div className="carousel">
                <div className="carousel-inner">
                    {this.props.classes.map((danceclass) => (
                        <Slide key={danceclass.id} image={danceclass.image} />
                        // console.log(danceclass.id, danceclass.image)
                        ))
                    }
                </div>
                <h1>TEST</h1> 
            </div>

        );
    }
}
