import React, { Component } from 'react'; // destruturing bro!!!!
import Header from './header.js';
import Footer from './footer.js';
import Carousel from './corusel.js';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './body.css';
import { connect } from 'react-redux';
import { kategoriID } from '../action';

class Body extends Component {
  state = {
    dataBackend: [],

  }

  componentWillMount() {
    { this.kategori() }
  }

  kategori() {
    var url = `http://localhost:3222/kategori`
    Axios.get(url).then((kategori) => {
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
    const foldergambar = "http://localhost:3000/image/";
    const data = this.state.dataBackend.map((item, i) => {
      var idkate = item.idkategori //idkategori sebagai properti dari item
      var namaKatergori = item.namakategori
      var gambar = item.gambar

      return (
        // Grid <link> <== children;  dari si Grid yang di panggil dengan cara This.props.children
        <Grid item xs={12} sm={4} key={i}> 
          <Link className='kategori' to={`/ProductbyKategori/${idkate}`} onClick={() => this.gettempid(idkate)}>
            <Grid container spacing={40}>
              <Grid item sm={12}>
                <center>
                  <div>
                    {/* ^ adalah JSX yang membuat Tag <div>-nya HTML  */}
                    <img className='picKategori' src={`${foldergambar + gambar}`} alt={gambar}/>
                  </div>
                  <div>
                    {namaKatergori}
                  </div>
                </center>
              </Grid>
            </Grid>
          </Link>
        </Grid>
      )
    })


    return (
      <div>
        <div className='header'>
          <Header />
        </div>
        <div className='bodykategori'>
          <Carousel />
        </div>
        <div className='body'>
          <Grid container spacing={40}>
            {data}
          </Grid>
        </div>
        <div><Footer /></div>
      </div>
    );
  }
}

export default connect(null, { kategoriID })(Body);
