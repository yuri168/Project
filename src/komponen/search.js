import React, { Component } from 'react';
import Footer from './footer.js';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from "../components/Header/Header.jsx";
import Button from "../components/CustomButtons/Button.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Axios from 'axios';
import './header.css'
import './search.css';
import { connect } from 'react-redux';
import { productID } from '../action';

class Search extends Component {
    state = {
      dataBackend:[],
      new: this.props.search,
      search: ''
    }


  componentWillMount(){
    { this.body() }
    { this.asd() }
  }

  asd = () => {
    if (this.props.idHeader > 0) {
      this.setState({ header: true })
    }
    else {
      this.setState({ header: false })
    }
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  submitsearchbtn() {
    var url = `http://localhost:3222/search/${this.state.search}`;
    Axios.get(url).then((ambilData) => {
    //  console.log(ambilData.data)
      this.setState({
        dataBackend: ambilData.data,
      })
    })
  }

  body() {
    var url = `http://localhost:3222/search/${this.props.search}`;
    Axios.get(url).then((ambilData) => {
    //  console.log(ambilData.data)
      this.setState({
        dataBackend: ambilData.data,
      })
    })
  }

  gettempid = (x) => {
    this.props.productID(x);
  }

  header = () => {
    if (this.state.header === true) {
      return (
        <div>
          <Header
            className="fonts"
            brand={<Link className="button" to='/'>Toko 88</Link>}
            rightLinks={
              <div>
                <ul className="ull">
                  <li className="lii">
                    <input
                      onChange={() => { this.input(); }}
                      className="search"
                      placeholder="Search..."
                      ref="searchs"
                      type="text"
                    />
                    </li>
                    <li className="lii button">
                    
                    <Button className="button" justIcon color="transparent" onClick={() => this.submitsearchbtn()}>
                      <FontAwesomeIcon icon={faSearch} />
                    </Button>
                    
                  </li>
                  <li className="lii">
                    <Button
                      color="transparent"
                      aria-owns={this.state.anchorEl ? 'simple-menu' : null}
                      aria-haspopup="true"
                      onClick={this.handleClick}>
                      <FontAwesomeIcon icon={faUserAlt} />
                      Profile
                   </Button>
                    <Menu
                      id="simple-menu"
                      anchorEl={this.state.anchorEl}
                      open={Boolean(this.state.anchorEl)}
                      onClose={this.handleClose}
                    >
                      <MenuItem ><Link to={`/MyProfile/${this.props.idHeader}`}><h5>My account</h5></Link></MenuItem>
                      <MenuItem ><h5>Logout</h5></MenuItem>
                    </Menu>
                  </li>
                  <li className="lii">
                  <Link style={{color:'grey', textDecoration:'none'}} to={`/Cart/${this.props.idHeader}`} >
                    <Button color="transparent" >
                        <FontAwesomeIcon icon={faShoppingCart} />
                        Cart
                    </Button>
                    </Link>
                  </li>
                </ul>
              </div>
            } />
        </div>
      )
    }
    else {
      return (
        <div>
          <div>
            <Header className="fonts"
              brand={<Link className="button" to='/'>Toko 88</Link>}
              rightLinks={
                <div>
                  <ul className="ull">
                    <li className="lii">
                      <input
                        onChange={() => { this.input(); }}
                        className="search"
                        placeholder="Search..."
                        ref="searchs"
                        type="text"
                      />
                      </li>
                      <li className="lii">
                      <Button style={{color:'grey'}}  justIcon color="transparent" onClick={() => this.submitsearchbtn()}>
                        <FontAwesomeIcon icon={faSearch} />
                      </Button> 
                    </li>
                    <li className="lii" >
                    <Link className="button" style={{color:'grey', textDecoration:'none',fontFamily:'Montserrat'}} to="/Login" >
                        <Button color="transparent">
                          <FontAwesomeIcon icon={faUserAlt} /> Login
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              }
            />
          </div>
        </div>
      )
    }
  }

  input() {
    this.setState({ search: this.refs.searchs.value })
    
  }

  render() {
      const foldergambar = "http://localhost:3000/image/";
      const data = this.state.dataBackend.map((item, i) => {
      var idp = item.idprod
      var namaProduk = item.namaprod
      var gambar = item.img

      return (
        <Grid item xs={12} sm={6} key={i}>
        <Link to= {`/ProductDetail/${idp}`} onClick={()=>this.gettempid(idp)}>
          <Paper>
            <Grid container spacing={8}>
              <Grid item sm={6}>
                <img className="pic" src={`${foldergambar+gambar}`} alt={gambar}/>
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
        {this.header()}
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
  const user = state.user;
  const idHeader = state.idLogin;
  const search = state.searching;
    return { user, idHeader, search };

};


export default connect(mapStateToProps, {productID}) (Search);
