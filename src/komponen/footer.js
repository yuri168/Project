import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './footer.css'
class footer extends Component {
  render() {
    return (
      <div className='footer'>
         <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">

            Made with love

          </Typography>
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}

export default footer;
