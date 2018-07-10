import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from "../components/CustomButtons/Button.jsx";
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CustomInput from "../components/CustomInput/CustomInput.jsx";
// import 'primereact/resources/themes/omega/theme.css';

// import 'primereact/resources/primereact.min.css';

import './from.css';

class From extends Component {

    state = {
        password: '',
        showPassword: false, 
        date:null,  
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    
    render() {
    
        return (

            <div className='form'>
            <CustomInput
                  id="Name"
                  inputProps={{
                    placeholder: "Name"
                  }}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
            <CustomInput
                  id="Name"
                  inputProps={{
                    placeholder: "Name"
                  }}
                  formControlProps={{
                    fullWidth: true
                  }}
                />   
                
                <br />
                <br />
                <FormControl fullWidth> 
                    <InputLabel style={{ fontSize: 16 }} htmlFor="inputphone">Phone</InputLabel>
                    <Input style={{ fontSize: 16 }} placeholder=" Phone Number " id="inputphone" onChange={() => { }} />
                </FormControl>
                <br />
                <br />
                <FormControl fullWidth>
                    <InputLabel style={{ fontSize: 16 }} htmlFor="inputemail">Email</InputLabel>
                    <Input style={{ fontSize: 16 }} type="email" placeholder="example@xxxx.com" id="inputemail" onChange={() => { }} />
                </FormControl>
                <br />
                <br />
                <FormControl fullWidth>
                    <InputLabel style={{ fontSize: 16 }} htmlFor="adornment-password">Password</InputLabel>
                    <Input style={{ fontSize: 16 }} id="adornment-password" type={this.state.showPassword ? 'text' : 'password'} value={this.state.password} onChange={this.handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={this.handleClickShowPassword}
                                    onMouseDown={this.handleMouseDownPassword}
                                >
                                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <br />
                <br />
                
                    <Button color="danger">
                        Submit!
                        </Button>
                        
               

            </div>

        );
    }
}


export default From;
