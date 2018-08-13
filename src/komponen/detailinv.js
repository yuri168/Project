import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import Header from './header.js';
import Footer from './footer.js';
import './detail.css'


class SectionNavbars extends Component {
    state = {
        ambilData: [],
        datainv: [],
        datainvDetail: [],
    }

    componentDidMount() {
        { this.body() }
    }

    body() {
        var url = `http://localhost:3222/Detail/${this.props.inv}`;
        Axios.get(url).then((ambilData) => {
            this.setState({
                datainvDetail: ambilData.data.result2,
                datainv: ambilData.data.result1
            })
            console.log(this.state.datainv[0].codeinv)
        })
    }

    render() {
        var a=0
        for (var i = 0; i < this.state.datainvDetail.length; i++) {
            a = (this.state.datainvDetail[i].qty * this.state.datainvDetail[i].harga) + a;
        }

        const datainv = this.state.datainv.map((item,i)=>{

            var code = item.codeinv
            var tanggal = item.time
            var Nmpenerima = item.namapenerima
            var Alpenerima = item.alamatpenerima
            var Nopenerima = item.nopenerima

            return(
                <tbody>
                       <tr>
                            <th>Invoice</th>
                            <td>{code}</td>
                        </tr>
                        <tr>
                            <th>Tanggal</th>
                            <td>{tanggal}</td>
                        </tr>
                        <tr>
                            <th>Nama Penerima</th>
                            <td>{Nmpenerima}</td>
                        </tr>
                        <tr>
                            <th>Alamat Penerima</th>
                            <td>{Alpenerima}</td>
                        </tr>
                        <tr>
                            <th>No Penerima</th>
                            <td>{Nopenerima}</td>
                        </tr>
                        </tbody>  
            )
        })

        const data = this.state.datainvDetail.map((item, i) => {
            var no = i + 1
            var product = item.prodname
            var qty = item.qty
            var harga = item.harga
            var price = qty * harga

            return (
                
                    <tr>
                        <td> {no} </td>
                        <td> {product} </td>
                        <td> {qty} </td>
                        <td> {price} </td>
                    </tr>
                
            )
        })

        return (
            <div>
                <Header/>
            <div className="detailbody">
                <table>
                        {datainv}                   
                </table>
                <br/>
                <table>
                    <tbody>
                        <tr>
                            <th>  No. </th>
                            <th>  Product </th>
                            <th>  QTY </th>
                            <th> Price </th>
                        </tr>
                        {data}
                    </tbody>
                </table>
                <div className="total">
                Total: {a}
                </div>
            </div>
            <Footer/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const inv = state.invoice

    return { inv }
}
export default connect(mapStateToProps)(SectionNavbars);
