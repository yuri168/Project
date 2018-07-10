import React, { Component } from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import LockOutline from "@material-ui/icons/LockOutline";
import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";
import Card from "../components/Card/Card.jsx";
import CardHeader from "../components/Card/CardHeader.jsx";
import CardBody from "../components/Card/CardBody.jsx";
import CardFooter from "../components/Card/CardFooter.jsx";
import Button from "../components/CustomButtons/Button.jsx";
import CustomInput from "../components/CustomInput/CustomInput.jsx";
import loginStyle from "../assets/jss/material-kit-react/views/componentsSections/loginStyle.jsx";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Form from './from.js';

class SectionLogin extends Component {

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
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem>
              <Card>
                <form className={classes.form}>
                  <CardHeader color="danger" className={classes.cardHeader}>
                    <h4>Login</h4>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      color="danger"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }} />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <LockOutline className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <center>
                      <Button color="danger" >
                        Login
                    </Button>
                    </center>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>

                    <Button
                      simple color="info"

                      onClick={this.handleClickOpen}>
                      Don't Have Account? Get started
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>

        <div>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title">
            <DialogContent>
              <Form />
            </DialogContent>
          </Dialog>
        </div>

      </div>
    );
  }
}

export default withStyles(loginStyle)(SectionLogin);
