import React, { useEffect,useState } from 'react';
import styles from "./LoginCard.module.css";
import {Button} from '@material-ui/core';
import {Typography,Container,Checkbox} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';

import FormControlLabel from '@material-ui/core/FormControlLabel';
const useStyles = makeStyles((theme) => ({

}));

export default function LoginCard(){
    const classes =useStyles();
    const [values, setValues] = React.useState({
        name:"",
        password: '',
        showPassword: false,
      });
      const [state, setState] = React.useState({
        checkedA: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });}
  
 const loginSubmit = () => {
    const { email, password, isChecked } = this.state
    if (isChecked & email !== "") {
        localStorage.username = email
        localStorage.password = password
        localStorage.checkbox = isChecked
    }
    // here call the API to signup/login
}
  const handleChange1 = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    console.log(state.checkedA)
  };  
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    return(
        <div className={styles.containerlogincard}>
            <div className={styles.containerlogincardin}>

            
            <form>
            
                <h5> Log in to your account</h5>
               
                <TextField variant="outlined" style={{marginTop:"10px"}} fullWidth className={clsx(classes.margin, classes.textField)} id="name" label="Username"  value={values.name} onChange={handleChange('name')}/>

                    
                <FormControl fullWidth style={{marginTop:"20px"}} className={clsx(classes.margin, classes.textField)} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                    labelWidth={70}
                />
                </FormControl>
                <FormControlLabel className={styles.remember}
                value="checkedA"
                control={
                
                <Checkbox size="medium" checked={state.checkedA} name="checkedA" onChange={handleChange1} />
                }
                label="Remember Me"

                />


                

                <div className={styles.loginb} >
                <button className={styles.login}> Log In</button>
                
                </div>
                <hr style={{marginTop:"20px"}}/>
                <div className={styles.loginfooter}>
                    <div className={styles.loginfooter1}>
                        <p> Can't log in ?</p>
                    </div>
                    <div className={styles.loginfooter2}>
                        <p> Contact Support</p>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}