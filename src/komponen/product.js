import React, { Component } from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './body.css';
import { connect } from 'react-redux';
import { productID } from '../action';

class Product extends Component {
  state = {
    dataBackend: []
    // [{},{},{}]
  }

  componentWillMount() {
    //   console.log(this.props.idKtg)
    { this.body() }
  }
  body() {
    var url = `http://localhost:3222/body/${this.props.idKtg}`;
    Axios.get(url).then((ambilData) => {
      this.setState({
        dataBackend: ambilData.data,
      })
      console.log(this.state.dataBackend);
    })
  }

  gettempid = (x) => {
    this.props.productID(x);
  }

  render() {
    const foldergambar = "http://localhost:3000/image/";

    const data = this.state.dataBackend.map((item, i) => {
      var idp = item.idprod
      var namaProduk = item.namaprod
      var gambar = item.img
      var harga = item.harga

      return (
        <Grid item xs={12} sm={6} key={i}>
          <Link to={`/ProductDetail/${idp}`} onClick={() => this.gettempid(idp)}>
            <Paper>
              <Grid container spacing={8}>
                <Grid item sm={6}>
                  <img className="pic" src={`${foldergambar + gambar}`} />
                </Grid>
                <Grid item sm={6}>
                  <h4>{namaProduk}</h4>
                  <br />
                  <h4>Harga : {harga}</h4>
                </Grid>
              </Grid>
            </Paper>
          </Link>
        </Grid>
      )
    })


    return (
      <div>
        <div className='header'>
          <Header />
        </div>
        <div>
          <img className="pickategori" src={require("../komponen/img/guarantee-may2017.jpg")} />
        </div>
        <div className='body'>
          <Grid container spacing={16}>
            {data}
          </Grid>
        </div>
        <div><Footer /></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {

  const idprod = state.idproduct
  const idKtg = state.idkategori
  return { idprod, idKtg };

};

export default connect(mapStateToProps, { productID })(Product);
