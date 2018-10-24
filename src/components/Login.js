import React, {Component} from 'react'
import {gLogin} from '../services/firebase'



class Login extends Component{

    googleLogin = () => {
        gLogin()
        .then(()=>{
            this.props.history.push('/')
        })
      }

    render(){
        return (
            <button onClick={this.googleLogin} > Inicia sesión </button>  
            )
    }
}

export default Login