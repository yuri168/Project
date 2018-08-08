import React, { Component } from 'react';
import Button from "../components/CustomButtons/Button.jsx";
import Axios from 'axios';
import './from.css';
import { connect } from 'react-redux';
import { loginID } from '../action';
import { Redirect } from 'react-router-dom';


class From extends Component {

    state = {
        name: '',
        phone: '',
        email: '',
        pass: '',
        redirect_home: false
    };

    submitform() {
        this.setState({ name: this.refs.names.value })
        this.setState({ pass: this.refs.passd.value })
        this.setState({ email: this.refs.emails.value })
        this.setState({ phone: this.refs.phones.value })
    }
    submitformnbtn() {
        console.log(this.state.name)
        console.log(this.state.pass)
        console.log(this.state.phone),
            console.log(this.state.email)
    }

    klikPost() {
        var url = `http://localhost:3222/SignIn`
        Axios.post(url, {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            password: this.state.pass,
        })
            .then((respon) => {
                if (respon.data.insertId > 0) {
                    var data = respon.data;
                    var idLog = data.insertId
                    // console.log(idLog)
                    this.props.loginID(idLog)
                    // console.log(this.props.idLogin)
                    this.setState({ redirect_home: true })
                }
                // else {
                //     alert("Usernam/Email & Password is wrong")
                // }

            })
            .catch((err) => { console.log(err) })
    }


    render() {

        const { redirect_home } = this.state;
        if (redirect_home) {
            this.setState({ redirect_home: false })
            return (< Redirect to='/' />)
        }

        return (
            <div>
                <div className='form'>
                    <h1>
                        Sign Up
                    </h1>
                    <center>
                        <div className="">
                            <input onChange={() => { this.submitform(); }}
                                className="text"
                                placeholder="Name"
                                ref="names"
                                type="text"
                            />
                            <br />
                            <input onChange={() => { this.submitform(); }}
                                className="text"
                                placeholder="Phone Number..."
                                ref="phones"
                                type="text"
                            />
                            <br />
                            <input onChange={() => { this.submitform(); }}
                                className="text"
                                placeholder="Email..."
                                ref="emails"
                                type="email"
                            />
                            <br />
                            <input onChange={() => { this.submitform(); }}
                                className="text"
                                placeholder="Password"
                                ref="passd"
                                type="password"
                            />
                            <br />
                            <Button color="danger" onClick={() => this.klikPost()}>
                                Submit!
                            </Button>
                        </div>
                    </center>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {

    const idLogin = state.idLogin
    return { idLogin };

};

export default connect(mapStateToProps, { loginID })(From);
