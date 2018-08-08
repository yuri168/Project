import React, { Component } from 'react';
import Header from './header.js';
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
        Data: []
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
                                        <br/><br/>
                                        <Divider/>
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


        return (
            <div>
                <Header />
                <div className="bodymy">
                    <Grid container spacing={24}>
                        {data}
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const idlogin = state.idLogin
    return { idlogin };
};


export default connect(mapStateToProps, { idInvoice })(myprofile);