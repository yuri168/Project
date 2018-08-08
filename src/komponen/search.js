import React, { Component } from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './search.css';
import { connect } from 'react-redux';
import { productID } from '../action';

class Search extends Component {
    state = {
      dataBackend:[],
      
    }


  componentWillMount(){
    { this.body() }
  }

  componentDidUpdate(){
      {this.body()}
  }

  body() {
    var url = `http://localhost:3222/search/${this.props.search}`;
    Axios.get(url).then((ambilData) => {
      this.setState({
        dataBackend: ambilData.data,
      })
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

      return (
        <Grid item xs={12} sm={6} key={i}>
        <Link to= {`/Product/${idp}`} onClick={()=>this.gettempid(idp)}>
          <Paper>
            <Grid container spacing={8}>
              <Grid item sm={6}>
                <img className="pic" src={`${foldergambar+gambar}`} />
              </Grid>
              <Grid item sm={6}>
                <h4>{namaProduk}</h4>
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
        <div className='bodysearch'>
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

    const search = state.searching
    return { search };

};


export default connect(mapStateToProps, {productID}) (Search);
