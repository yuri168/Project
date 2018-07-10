import React, { Component } from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Carousel from './corusel.js';

//material-ui
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


//linking
import { Link, Route } from 'react-router-dom';
//Css
import './body.css';





class Body extends Component {



  render() {

    return (
      <div>
        <div className='header'>
        <Header /> 
        </div>

        <div className='karosel'>
          <Carousel/>
        </div>

        <div className='body'>
          <Grid container spacing={16}>

            <Grid item xs={12} sm={6}>
              <Link to="/productcontent">
                <Paper>
                  <img alt="bag" className='pic' src={require('./img/backpack.jpg')} />
                  Backpack
                    </Paper>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Link to="/productcontent">
                <Paper className=''>
                  <img alt="messenger" className='pic' src={require('./img/messenger.jpg')} />
                  Messenger Bag
                    </Paper>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6}>

              <Link to="/productcontent">
                <Paper className='grid'>
                  <img alt="slingbag" className='pic' src={require('./img/sling.jpg')} />
                  Sling Bag
                    </Paper>
              </Link>

            </Grid>
            <Grid item xs={12} sm={6}>

              <Paper className='gridtote'>
                <Link to="/productcontent">
                  <img alt="totebag" className='pic' src={require('./img/totebag.jpg')} />
                  Tote Bag
                      </Link>
              </Paper>

            </Grid>
          </Grid>
          
        </div>
        
        <div><Footer /></div>
      </div>
    );
  }
}

export default Body;
