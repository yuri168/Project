import React, { Component } from 'react';
import Carousel from "react-slick";
import withStyles from "@material-ui/core/styles/withStyles";
import carouselStyle from "../assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import image1 from "../assets/img/bg.jpg";
import image2 from "../assets/img/bg2.jpg";
import image3 from "../assets/img/bg3.jpg";
import './carosel.css'

class SectionCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
      arrows: false,
    };
    return (
      <div className=''>
        <div className=''>
                <Carousel {...settings} >
                  <div >
                    <img
                      src={image1}
                      alt="First slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={image2}
                      alt="Second slide"
                      className="slick-image"
                    />
                    
                  </div>
                  <div>
                    <img
                      src={image3}
                      alt="Third slide"
                      className="slick-image"
                    />
                  </div>
                </Carousel>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
