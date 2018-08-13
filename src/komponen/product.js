import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from "../components/CustomButtons/Button.jsx";
import Footer from './footer.js';
import Header from './header.js';
import './product.css';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';



class product extends Component {
    state = {
        dataBackend: [],
        redirect_login: false,
    }

    componentWillMount() {
        { this.product() }
    }

    product() {
        var url = `http://localhost:3222/Product/${this.props.idprod}`;
        Axios.get(url).then((ambilData) => {
            console.log(ambilData.data);
            this.setState({
                dataBackend: ambilData.data,
            })
        })
    }

    AddCart(){
        var url = `http://localhost:3222/addCart`
        Axios.post(url, {
          
            namaprod: this.refs.namaprods.value,
            userid: this.refs.userid.value,
            harga: this.refs.prices.value,
            jumlah: this.refs.qty.value,
            idprod:this.refs.idprods.value

        })
          .then((respon) => {
              if(respon.data === 'sukses'){
            alert("Add to cart")
            }
            // console.log(respon)
          })    
    }

    AddToCard(x){
        var stok = x
        var idlog = this.props.idlogin
        var Quantity = this.refs.qty.value
        if(Quantity <= stok ){
            if (idlog < 1){
                this.setState({redirect_login: true})
                alert("You Must Login First")
            }
            else{
                {this.AddCart()}
            }
        }
        else{
            alert("Stock is Not Available")
        }
    }

    render() {
        const foldergambar = "http://localhost:3000/image/";

        const{redirect_login} = this.state;
        if(redirect_login){
          this.setState({redirect_login: false})
          return(< Redirect to='/Login' />)
        }

        const data = this.state.dataBackend.map((item, i) => {
            var id = item.idprod
            var namaProduk = item.namaprod
            var productDesc = item.desc
            var price = item.harga
            var Stock = item.stock
            var gambar  = item.img

            return (
                <Grid container spacing={8} key={i}>
                    <Grid item xs={12} sm={6}>
                        <div >
                            <img className="productpic" src={`${foldergambar+gambar}`} />
                    </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div>
                            <h2>
                                {namaProduk}
                            </h2>
                            <br />
                            <Divider />
                            <br />
                            <p className='font'>
                                {productDesc}
                            </p>
                        </div>
                        <br />
                        <Divider />
                        <br /><br /><br />
                        <center>
                            <div>
                                <h4>
                                    QTY: {Stock}
                                </h4>
                                <h4>
                                    Buy Now.
                            </h4>
                                <div className='pad'>

                                     <input
                                        className="text"
                                        ref="userid"
                                        type="hidden"
                                        value={this.props.idlogin}
                                    />
                                    <input
                                        className="text"
                                        ref="namaprods"
                                        type="hidden"
                                        value={namaProduk}
                                    />
                                    <input
                                        className="text"
                                        ref="idprods"
                                        type="hidden"
                                        value={id}
                                    />
                                    <input
                                        className="text"
                                        ref="prices"
                                        type="hidden"
                                        value={price}
                                    />
                                    
                                        {/* Quantity dari User */}
                                    <input
                                        className="text"
                                        placeholder="Quantity"
                                        ref="qty"
                                        type="number"
                                    />
                                    <br /><br />
                                    <div>
                                        <Button color="danger" onClick={()=>{this.AddToCard(Stock)}} >
                                            Add to Cart
                                    </Button>
                                    </div>
                                </div>
                            </div>
                        </center>
                    </Grid>
                </Grid>
            )
        })

        return (
            <div>
                <div className='header'>
                    <Header />
                </div>
                <div className='product'>
                    <Grid container spacing={16}>

                        {data}

                    </Grid>
                </div>
                <br />
                <div><Footer /></div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {

    const idprod = state.idproduct
    const idlogin= state.idLogin
    return { idprod, idlogin };

};

export default connect(mapStateToProps)(product);