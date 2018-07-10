import React, { Component } from 'react';
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


import GridItem from "../components/Grid/GridItem.jsx";

import carouselStyle from "../assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import image1 from "../assets/img/bg.jpg";
import image2 from "../assets/img/bg2.jpg";
import image3 from "../assets/img/bg3.jpg";
import './carosel.css'

class SectionCarousel extends Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
    };
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          
            
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