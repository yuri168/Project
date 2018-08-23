import React, { Component } from 'react';
import Header from "../components/Header/Header.jsx";
import Button from "../components/CustomButtons/Button.jsx";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import './header.css'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import { searching } from '../action'

class SectionNavbars extends Component {
  state = {
    header: false,
    anchorEl: null,
    search: ''
  };

  componentDidMount() {
    this.asd()
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
    this.props.searching(this.refs.searchs.value)
  }

  header = () => {
    if (this.state.header === true) {
      return (
        <div>
          <Header className="fonts"
            brand={<Link className="button" to='/'>Toko 88</Link>}
            rightLinks={
              <div>
                <ul className="ull">
                  <li className="lii">
                    <input
                      className="search"
                      placeholder="Search..."
                      ref="searchs"
                      type="text"
                    />
                  </li>
                  <li className="lii">
                  <Link style={{color:'grey'}} to={`/search/${this.state.search}`}>
                        <Button  justIcon color="transparent" onClick={() => this.submitsearchbtn()}>
                          <FontAwesomeIcon icon={faSearch} />
                        </Button>
                      </Link>
                  </li>
                  <li className="lii">
                    <Button
                    style={{color:'grey', textDecoration:'none',fontFamily:'Montserrat'}}
                      classesName="button"
                      color="transparent"
                      aria-owns={this.state.anchorEl ? 'simple-menu' : null}
                      aria-haspopup="true"
                      onClick={this.handleClick}>
                      <FontAwesomeIcon icon={faUserAlt} />
                      Profile
                   </Button>
                    <Menu 
                      classesName="button"
                      id="simple-menu"
                      anchorEl={this.state.anchorEl}
                      open={Boolean(this.state.anchorEl)}
                      onClose={this.handleClose}
                    >
                      <MenuItem ><Link style={{color:'grey', textDecoration:'none',fontFamily:'Montserrat'}}  to={`/MyProfile/${this.props.idHeader}`}><h5>My account</h5></Link></MenuItem>
                      <MenuItem ><h5 style={{color:'grey', textDecoration:'none',fontFamily:'Montserrat'}}>Logout</h5></MenuItem>
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
            <Header
              className="fonts"
              brand={<Link className="button" to='/'>Toko 88</Link>}
              rightLinks={
                <div className="button">
                  <ul className="ull">
                    <li className="lii">
                      <input
                        className="search"
                        placeholder="Search..."
                        ref="searchs"
                        type="text"
                      />
                    </li>
                    <li className="lii">
                      <Link style={{color:'grey', textDecoration:'none'}} to={`/search/${this.state.search}`}>
                        <Button  justIcon color="transparent" onClick={() => this.submitsearchbtn()}>
                          <FontAwesomeIcon icon={faSearch} />
                        </Button>
                      </Link>
                    </li>
                    <li className="lii">
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
      )
    }
  }

  render() {

    return (
      <div>
        {this.header()}

      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const user = state.user;
  const idHeader = state.idLogin;
  const search = state.searching;

  return { user, idHeader, search }
}
export default connect(mapStateToProps, { searching })(SectionNavbars);
