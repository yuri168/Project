import React, { Component } from 'react';
import Header from './header.js';
import Footer from './footer.js';
import { connect } from 'react-redux';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { idInvoice } from '../action';
import './myprofile.css'

class myprofile extends Component {
    state = {
        Data: [],
        profile: [],
    }
    componentDidMount() {
        { this.detailtrans() }

    }

    detailtrans() {
        var url = `http://localhost:3222/MyProfile/${this.props.idlogin}`
        Axios.get(url).then((ambilData) => {
            // console.log(ambilData.data);
            // console.log(this.props.idlogin)
            this.setState({ Data: ambilData.data })
        })

        var urlid = `http://localhost:3222/Profile/${this.props.idlogin}`
        Axios.get(urlid).then((getdata) => {
            console.log(getdata.data[0])
            this.setState({ profile: getdata.data })
        })
    }

    getinv(inv) {
        this.props.idInvoice(inv);
    }
    render() {

        const data = this.state.Data.map((item, i) => {

            var kodeinv = item.codeinv
            var date = item.time
            var tanggal = date.substr(0, 10)
            var total = item.total
            return (

                <Grid item sm={12} key={i}>
                    <Link to={`/Detail/${kodeinv}`} onClick={() => this.getinv(kodeinv)}>
                        <Paper>
                            <Grid container spacing={8}>
                                <Grid item sm={12}>
                                    <div className="itemtitle">
                                        Kode: {kodeinv}
                                        <br /><br />
                                        <Divider />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="item">
                                        Tanggal: {tanggal}
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="item">
                                        Total: {total}
                                    </div>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Link>
                </Grid>

            )
        })

        const Profile = this.state.profile.map((item, i) => {
            var nama = item.name
            var email = item.email
            return (
                <div>
                    <Paper>
                        <div className="detailprofile">
                            <br />
                            <h4> Name  : {nama} </h4>
                            <br />
                            <h5> Email : {email} </h5>
                            <br />
                        </div>
                    </Paper>
                </div>
            )
        })


        return (
            <div>
                <Header />
                <div className="bodymy">
                    <div className="profile">
                        {Profile}
                    </div>
                    
                    <div>
                        <div className="trans">
                           <h4> Transaksi </h4>
                        <Divider/>
                        </div>
                    <Grid container spacing={24}>
                        {data}
                    </Grid>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const idlogin = state.idLogin
    return { idlogin };
};


export default connect(mapStateToProps, { idInvoice })(myprofile);