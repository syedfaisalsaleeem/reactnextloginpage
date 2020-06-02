import React, { useEffect,useState } from 'react';
import styles from "./App.module.css";
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
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({

  }));


export default function App(){
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
        <div>

<Grid container>
                <Grid item xs={12} className={styles.logo}>
                      <img src="vercel.svg" />
                </Grid>
                <Grid item xs={12} className={styles.loginfield}>
                <Container maxWidth="sm">
                    <Typography component="div" style={{ backgroundColor: 'white', height: '50vh', marginTop:"100px" }} >
                    <form>
                        
                        <TextField fullWidth className={clsx(classes.margin, classes.textField)} id="name" label="Username"  value={values.name} onChange={handleChange('name')}/>

                    
                    <FormControl style={{marginTop:"30px"}}fullWidth className={clsx(classes.margin, classes.textField)}>
                    <InputLabel >Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                    </FormControl>
                    <FormControlLabel className={styles.remember}
                    value="checkedA"
                    control={
                      
                    <Checkbox size="medium" checked={state.checkedA} name="checkedA" onChange={handleChange1} />
                      }
                    label="Remember Me"
                    
                    />


                    <br/>


                    <button className={styles.login}> Log In</button>

                    </form>
                    </Typography>
                </Container>
                </Grid>
                
                <Grid container>
                    <Grid item xs={12} className={styles.footer}>
                    <Typography   variant="h7" > Copyright 2020 © Cyber Intelligence House</Typography>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}