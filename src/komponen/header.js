import React, { Component } from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Settings from "@material-ui/icons/Settings";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// core components
import Header from "../components/Header/Header.jsx";
import Button from "../components/CustomButtons/Button.jsx";
import navbarsStyle from "../assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx"
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Login from './login.js';
import { Link } from 'react-router-dom';

class SectionNavbars extends Component {
  state = {
    bottom: false,
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <div >
        <div >
          <Header
            brand="Peak Design"
            rightLinks={
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <Button
                    className={classes.navLink + " " + classes.navLinkActive}
                    color="transparent"
                  >
                    <Link to="/">
                      <Explore className={classes.icons} /> Discover
                    </Link>
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    className={classes.navLink}
                    onClick={this.handleClickOpen}
                    color="transparent"
                  >
                    <AccountCircle className={classes.icons} /> Profile
                    </Button>
                </ListItem>
                <ListItem className={classes.listItem}>

                  <Button
                    className={classes.navLink}

                    color="transparent"
                  >
                    <Link to="/">
                      <Settings className={classes.icons} /> Settings
                      </Link>
                  </Button>

                </ListItem>
              </List>
            }
          />
        </div>
        <div>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogContent>

              <Login />

            </DialogContent>
          </Dialog>
        </div>
      </div>
    );
  }
}

export default withStyles(navbarsStyle)(SectionNavbars);
