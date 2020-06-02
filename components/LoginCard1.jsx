import React from 'react';
import Router  from 'next/router'

import styles from "./LoginCard.module.css";

import IconButton from '@material-ui/core/IconButton';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { Checkbox } from 'semantic-ui-react';


class LoginCard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            password: '',
            showPassword: false,
            checkedA:false,
            emailvalidate:true,
            passwordvalidate:true,
            authenticate:'',
            errors:{
                name:"",
                email:"",
                password:""
            }

        }
    }



    handleChange =(prop)=>(event)=> {
        this.setState({
            [prop]:event.target.value
            
        })
        }
    
   handleChange1 = () => {
      this.setState((prevState)=>{
          return {checkedA:!prevState.checkedA}
      })
        }
      handleClickShowPassword = () => {
        this.setState((prevState)=>{
            return {showPassword:!prevState.showPassword}
        })
      };
    
      handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.name,this.state.password)
        if(this.state.name!="faisal"){
                this.setState({passwordvalidate:true,emailvalidate:false,authenticate:false})
        }

        else if(this.state.password!="123"){
            this.setState({emailvalidate:true,passwordvalidate:false,authenticate:false})
        }


        else{
            
            Router.push("/Dashboard")

            
        }
      }
    render(){
        console.log(this.state.emailvalidate)



            return(

                <div className={styles.containerlogincard}>
                    <div className={styles.containerlogincardin}>
        
                    
                    <form onSubmit={this.handleSubmit} noValidate>
                    
                        <h5> Log in to your account</h5>
                        <div className={styles.email1}>
                        <TextField multiline size="small" variant="outlined" style={{marginTop:"10px"}} fullWidth  id="name" name="name" label="Enter Username or email"  value={this.state.name} onChange={this.handleChange('name')}/>
                        <div className={styles.email} style={{display:this.state.emailvalidate?"none":"flex"}}>
                            <p> Email is not registered</p>
                        </div>
                        </div>

                         <div className={styles.email1}>
                         <FormControl fullWidth style={{marginTop:"20px"}}  variant="outlined" size="small">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.password}
                                onChange={this.handleChange('password')}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={this.handleClickShowPassword}
                                    onMouseDown={this.handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>
                            <div className={styles.email} style={{display:this.state.passwordvalidate?"none":"flex"}}>
                                <p> Password is not valid</p>
                            </div>
                        
                        </div>   

                        
        
                        
                        <Checkbox className={styles.remember} label="Remember Me" checked={this.state.checkedA} name="checkedA" onChange={this.handleChange1} />
        
        
        
                        
        
                        <div className={styles.loginb} >
                        <button className={styles.login}> Log In</button>
                        
                        </div>
                        <hr className={styles.hrline}/>
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
            );
        

}
}
export default LoginCard