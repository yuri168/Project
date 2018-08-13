import React, { Component } from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Carousel from './corusel.js';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './body.css';
import { connect } from 'react-redux';
import { kategoriID } from '../action';

class Body extends Component {
    state = {
      dataBackend:[],
      
    }

  componentWillMount(){
    { this.kategori() }
  }
  body() {
    var url = `http://localhost:3222/body`;
    Axios.get(url).then((ambilData) => {
      this.setState({
        dataBackend: ambilData.data,
       
      })
    })
  }

  kategori(){
    var url = `http://localhost:3222/kategori`
    Axios.get(url).then((kategori)=>{
      // console.log(kategori.data)
      this.setState({
        dataBackend: kategori.data
      })
    })
  }

  gettempid = (x) => {
    this.props.kategoriID(x);
  }

  render() {
      // const foldergambar = "http://localhost:3000/image/";
      const data = this.state.dataBackend.map((item, i) => {
      var idkate = item.idkategori
      var namaKatergori = item.namakategori

      return (
        <Grid item xs={12} sm={6} key={i}>
        <Link to= {`/ProductbyKategori/${idkate}`} onClick={()=>this.gettempid(idkate)}>
          <Paper>
            <Grid container spacing={8}>
              <Grid item sm={12}>
              <center>
                <div  className='kategori'>
                {namaKatergori}
                </div>
              </center>
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
        <div className='karosel'>
          <Carousel />
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

export default connect(null, {kategoriID}) (Body);
