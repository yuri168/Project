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

  componentDidMount(){
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


  submitsearch() {
    this.setState({ search: this.refs.searchs.value })
    
  }

  submitsearchbtn() {
    
    this.props.searching(this.state.search)
  }

  header = () => {
    if (this.state.header === true) {
      return (
        <div>
          <Header
            brand={<Link to='/'>Peak Design</Link>}
            rightLinks={
              <div>
                <ul className="ull">
                  <li className="lii">
                    <input
                      onChange={() => { this.submitsearch(); }}
                      className="search"
                      placeholder="Search..."
                      ref="searchs"
                      type="text"
                    />
                    </li>
                    <li className="lii">
                    <Link to={`/search/${this.state.search}`}>
                    <Button className="button" justIcon color="transparent" onClick={() => this.submitsearchbtn()}>
                      <FontAwesomeIcon icon={faSearch} />
                    </Button>
                    </Link>
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
                    <Button
                      color="transparent"
                    >
                      <Link to={`/Cart/${this.props.idHeader}`} >
                        <FontAwesomeIcon icon={faShoppingCart} />
                        Cart
                   </Link>
                    </Button>
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
            <Header
              brand={<Link to='/'>Peak Design</Link>}
              rightLinks={
                <div>
                  <ul className="ull">
                    <li className="lii">
                      <input
                        onChange={() => { this.submitsearch(); }}
                        className="search"
                        placeholder="Search..."
                        ref="searchs"
                        type="text"
                      />
                      </li>
                      <li className="lii">
                      <Link to={`/search/${this.state.search}`}>
                      <Button className="button buttons" justIcon color="transparent" onClick={() => this.submitsearchbtn()}>
                        <FontAwesomeIcon icon={faSearch} />
                      </Button>
                      </Link>
                    </li>
                    <li className="lii">
                      <Link to="/Login">
                        <Button color="transparent" >
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

  render() {

    return (
      <div >
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
export default connect(mapStateToProps,{searching})(SectionNavbars);
