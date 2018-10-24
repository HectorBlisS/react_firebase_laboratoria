import React, {Component} from 'react'
import firebase from '../services/firebase'

class Home extends Component{

    state ={
        user:false
    } 

    componentWillMount(){
        // firebase.auth().onAuthStateChanged((user)=>{
        //     if(!user) this.props.history.goBack()
        //     console.log(user)
        // })
        if(!localStorage.getItem('user')) this.props.history.goBack()
        else this.setState({user:true})
    }

    logOut = () => {
        firebase.auth().signOut()
        this.props.history.push('/login')
    }

    render(){
        const {user} = this.state
        if(!user) return <h1>Sin permiso</h1>
        return (
        
        <div>
            <p>Esta vista solo debe verla un usuario logueado</p>
            <button onClick={this.logOut} >Cerrar sesión</button>
        </div>
        )
    }
}

export default Home