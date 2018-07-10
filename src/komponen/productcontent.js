import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import Tooltip from '@material-ui/core/Tooltip';
import Footer from './footer.js';
import Header from './header.js';
import './product.css';

class Productcontent extends Component {
  render() {
    return (
    <div>
        <div className='header'>
        <Header/>
        </div>
      <div className='product'>
        <Grid container spacing={16}>
        <Grid container spacing={8}>
        <Grid item xs={12} sm={6}>
        
            <div >
                <img  alt="backpack" className='productpic' src={require('./img/backpack.jpg')} />
            </div>
            
        </Grid>
        <Grid item xs={12} sm={6}>
       
            <div>
            <Typography variant="display2">
               Backpack
            </Typography>
        <br/>
            <Divider/>
            <br/>
           
            <p className='font'>
                A pack that adapts to your ever-changing gear, lifestyle and environment, the Everyday Backpack give you unrivaled accessibility, expandability, and organization. The patented MagLatch provides lightning fast top access, with dual side-loading via two weatherproof side zips. Huge external carry capacity made possible by a versatile tuck-away strap system and 2 expandable external side pockets. Integrated luggage carry makes this bag equally suited for daily commutes and extended travel. Endlessly configurable FlexFold dividers keep photo, drone, or everyday gear organized, protected, and not bunched at the bottom of your bag. Internally padded accessory pockets keep small items in check. Dedicated sleeve for up to 15” laptop, tablet, and documents. Ultra clean aesthetic, all-custom hardware, minimal dangling straps. Weatherproof 400D nylon canvas shell.
            </p>
          
            </div>
            <br/>
            <Divider/>
            <br/>
            <br/>
            <br/>
            <center>
            <div>
            <Typography variant="display1">
               Buy Now.
            </Typography>
            </div>
            <div>
                <div className='pad'>
                <FormControl >
                    <InputLabel htmlFor="Qty">Quantity</InputLabel>
                    <Input
                    id="Qty" onChange={()=>{}} type="number"   
                    />
                </FormControl>
                <br/>
                <br/>
                <div>
                <Tooltip title="Add to Cart">
                    <button variant="raised" color="secondary">
                    Add to Cart
                    </button>
                </Tooltip>
                </div>
                </div>
            </div>
            </center>
        </Grid>
        </Grid>
        </Grid>
      </div>
      <br/>
      <div><Footer /></div>
      </div>
    );
  }
}

export default Productcontent;