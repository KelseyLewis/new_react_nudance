import React, { Component } from 'react';

const Slide = ({image}) => {
    const styles = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%'
    }
    return <div className="carousel-item" style={styles}></div>
  }

const RightArrow = () => {
    return (
        <div className="nextArrow" onClick={this.goToNextSlide}>
        <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
        </div>
    );
}

const LeftArrow = () => {
    return (
      <div className="backArrow" onClick={this.goToPrevSlide}>
        <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
      </div>
    );
}

export default class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0,
            translateValue: 0
        };

        this.goToPrevSlide=this.goToPrevSlide.bind(this);
        this.goToNextSlide=this.goToNextSlide.bind(this);

    }

    goToPrevSlide = () => {
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1
          }));

          if(this.state.currentIndex === 0) {
            return this.setState({
              currentIndex: this.state.classes.length - 1,
              translateValue: 0
            })
          }
          this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
          }));
    }
    
    goToNextSlide = () => {
        // Exiting the method early if we are at the end of the images array.
        // We also want to reset currentIndex and translateValue, so we return
        // to the first image in the array.
        if(this.state.currentIndex === this.state.classes.length - 1) {
          return this.setState({
            currentIndex: 0,
            translateValue: 0
          })
        }
        
        // This will not run if we met the if condition above
        this.setState(prevState => ({
          currentIndex: prevState.currentIndex + 1,
          translateValue: prevState.translateValue + -(this.slideWidth())
        }));
      }
    
      slideWidth = () => {
         return document.querySelector('.carousel-item').clientWidth
      }

    render() {
        return(
            <div className="carousel">
                <div className="carousel-inner"
                style={{
                transform: `translateX(${this.state.translateValue}px)`,
                transition: 'transform ease-out 0.45s'
                }}>
                    {this.props.classes.map((danceclass) => (
                        <Slide key={danceclass.id} image={danceclass.image} />
                        ))
                    }
                </div>
                <LeftArrow goToPrevSlide={this.goToPrevSlide}/>
                <RightArrow goToNextSlide={this.goToNextSlide}  />
            </div>
        );
    }
}
