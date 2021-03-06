import React, { Component } from 'react';
import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";
import Card from "../components/Card/Card.jsx";
import CardHeader from "../components/Card/CardHeader.jsx";
import CardBody from "../components/Card/CardBody.jsx";
import Button from "../components/CustomButtons/Button.jsx";
import Footer from './footer.js';
import Header from './header.js';
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';
import { connect } from 'react-redux';
import { loginID, namaID } from '../action';
import './login.css'
class SectionLogin extends Component {

  state = {
    user: '',
    pass: '',
    redirect_home: false,
  };

  submitlogin() {
    this.setState({ user: this.refs.namas.value })
    this.setState({ pass: this.refs.passd.value })
  }


  klikLogin() {
    var url = `http://localhost:3222/userLogin`
    Axios.post(url, {
      name: this.state.user,
      password: this.state.pass
    })
      .then((respon) => {
        if (respon.data.iduser > 1) {
          var data = respon.data;
          var idLog = data.iduser;
          var nama = data.nama;
          this.props.namaID(nama)
          this.props.loginID(idLog)
          this.setState({ redirect_home: true })
        }
      })
      .catch((gagal) => { alert("Username / Email & Password is wrong")})
  }

  render() {
    const { redirect_home } = this.state;
    if (redirect_home) {
      this.setState({ redirect_home: false })
      return (< Redirect to='/' />)
    }
    return (
      <div className="background">
      <Header/>
        <div className="bodysec">
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <form > 
                  <CardHeader color="danger">
                    <h4>Sign In</h4>
                  </CardHeader>
                  <CardBody >
                  <center>
                    <input
                      onChange={() => { this.submitlogin(); }}
                      className="text"  placeholder="Email..." type="email" ref="namas"
                    />
                    <br />
                    <input
                      onChange={() => { this.submitlogin(); }}
                      className="text"  placeholder="Password" type="password" ref="passd"
                    />
                    <br />
                    <Button color="danger" onClick={() => this.klikLogin()}>
                      Login
                    </Button>
                    <br/><br/>
                    <Link to="/SignIn">
                      
                          Don't Have Account? Get started
                    
                    </Link>
                    </center>
                  </CardBody>
                 </form>
              </Card>
            </GridItem>
          </GridContainer>
          
        </div>
        <Footer/>
      </div>
    );
  }
}

export default connect(null, { loginID, namaID })(SectionLogin);