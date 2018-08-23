import React, { Component } from 'react';
import Header from './header.js';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faMinus, faPlus, faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons'
import Button from "../components/CustomButtons/Button.jsx";
import { Redirect, Link } from 'react-router-dom';
import Footer from './footer.js';
import './cart.css'
import Axios from 'axios';
import { connect } from 'react-redux';
import { idInvoice } from '../action';

class Cart extends Component {
  state = {
    cartstate: true,
    dataBackend: [],
    idcart: 0,
    nama: '',
    adder: '',
    phone: '',
    redirect_detail: false,
    id: 0,
  };
  componentDidMount() {
    { this.Carts() }
  }

  Carts() {
    var url = `http://localhost:3222/Cart/${this.props.idlogin}`;
    Axios.get(url).then((ambilData) => {

      this.setState({
        dataBackend: ambilData.data,
        id: ambilData.data
      })
    })
  }

  submitcheck() {
    this.setState({ nama: this.refs.names.value })
    this.setState({ adder: this.refs.adds.value })
    this.setState({ phone: this.refs.phones.value })
  }

  // AXIOS -----------------------------------------------------------------------------------

  updatecartPlus(id, y) {
    // how?
    var jum = y + 1
    var url = `http://localhost:3222/addCartPlus`
    Axios.post(url, {
      idcart: id,
      qty: jum,
    })
      .then((respon) => {
        { this.Carts() }
      })
  }

  updatecartMinus(id, y) {
   if(y >1){
    var jum = y - 1
    var url = `http://localhost:3222/addCartMinus`
    Axios.post(url, {
      idcart: id,
      qty: jum,
    })
      .then((respon) => {
        { this.Carts() }
      })
    }
    
  }

  updatecartDelete(id) {
    var url = `http://localhost:3222/addCartDelete`
    Axios.post(url, {
      idcart: id,
    })
      .then((respon) => {
        { this.Carts() }
      })
  }

  checkOut = () => {
    
    if(this.state.nama == '' || this.state.alamat == '' || this.state.phone == ''){
        alert('Please Complete Shipping Detail')
    }
    else{

    var user = this.props.idlogin
    var url = `http://localhost:3222/Checkout`
    Axios.post(url, {
      userid: user,
      total: this.refs.total.value,
      phone: this.state.phone,
      alamat: this.state.adder,
      namapene: this.state.nama,
      // jumlah: this.refs.jumlah.value,
      // idprod: this.refs.idprod.value,
      // namaprod: this.refs.namaprods.value
    }).then((respon) => {
      var inv = respon.data.kode_invoice;
      this.props.idInvoice(inv);
      this.setState({ redirect_detail: true })
    })
    }
  }

  render() {

    const { id } = this.state
    if (id == 0) {
      return (
        <div>
          <Header />
          <div className="cartbody">
            <h2> <FontAwesomeIcon icon={faShoppingCart} />&nbsp;&nbsp; Shoping Cart </h2>
            <Divider />
            <br />
            <br />
            <h3>Your cart is empty. Let’s get you geared up.</h3>
            <br />
            <h4> Click here to <Link to="/">continue</Link> shopping.</h4>
          </div>

          <div><Footer /></div>
        </div>
      )
    }

    const { redirect_detail } = this.state;
    if (redirect_detail) {
      this.setState({ redirect_detail: false })
      return (< Redirect to='/Detail' />)
    }

    const data = this.state.dataBackend.map((item, i) => {
      var no = i + 1
      var id = item.idcart
      var namaprod = item.namaprod
      var jml = item.qtycart
      var price = jml * item.harga

      return (
        <tr key={i}>
          <td> {no} </td>
          <td> {namaprod} </td>
          <td>
            <Button justIcon color="transparent" onClick={() => { this.updatecartMinus(id, jml) }} >
              <FontAwesomeIcon icon={faMinus} />
            </Button>
            
            
            {jml}
            <Button justIcon color="transparent" onClick={() => { this.updatecartPlus(id, jml) }} >
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </td>
          <td>{price}</td>
          <td>
            <Button justIcon color="transparent" onClick={() => { this.updatecartDelete(id) }} >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </td>
        </tr>
      )
    })

    var a = 0;

    for (var i = 0; i < this.state.dataBackend.length; i++) {
      a = (this.state.dataBackend[i].qtycart * this.state.dataBackend[i].harga) + a;
    }



    return (
      <div>
        <Header />
        <div className="cartbody">
          <h2> <FontAwesomeIcon icon={faShoppingCart} />&nbsp;&nbsp; Shoping Cart </h2>
          <Divider />
          <br />
          <Grid container spacing={16}>
            <Grid item xs={12} sm={12}>
              <table>
                <tbody>
                  <tr>
                    <th>No.</th>
                    <th>Product</th>
                    <th>QTY</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                  {data}
                </tbody>
              </table>
            </Grid>
            <Grid item xs={12} sm={12}>
              <h3> Shipping Detail</h3>
            </Grid>
            <Grid item xs={12} sm={6}>

              <input onChange={() => { this.submitcheck(); }}
                className="text"
                placeholder="Name..."
                ref="names"
                type="text"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <input onChange={() => { this.submitcheck(); }}
                className="text"
                placeholder="Phone Number..."
                ref="phones"
                type="text"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <input onChange={() => { this.submitcheck(); }}
                className="text"
                placeholder="Address... "
                ref="adds"
                type="text"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <div>
                <h3> Subtotal</h3>
                <Divider />
                <br /> <br />
                harga : ${a}
                <input
                  ref="total"
                  type="hidden"
                  value={a}

                />
                <br />
                <Divider />
                <br />
                <Button color="danger" onClick={() => { this.checkOut() }}>
                  Submit <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </div>
            </Grid>

          </Grid>
        </div>
        <div><Footer /></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const idlogin = state.idLogin
  return { idlogin };
};

export default connect(mapStateToProps, { idInvoice })(Cart);