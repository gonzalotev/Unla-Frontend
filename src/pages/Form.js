import React, {Component} from 'react';
import Cookies from "universal-cookie";
   
const cookies = new Cookies();

class Form extends Component {
    logOut = () =>{
        cookies.remove('id', {path: "/"});
        cookies.remove('lastname', {path: "/"});
        cookies.remove('name', {path: "/"});
        cookies.remove('username', {path: "/"});
        window.location.href='./';
    }

    componentDidMount(){
        if(!cookies.get('username')){
            window.location.href="./";
        }
    }

    render(){
        console.log('id' + cookies.get('id'));
        console.log('lastname' + cookies.get('lastname'));
        console.log('name' + cookies.get('name'));
        console.log('username' + cookies.get('username'));

    return (
        <div>
            <h1> estas logueado </h1>

            <button onClick={() => this.logOut()}>Cerrar sesion </button>
        </div>
    )
    }
    
}

export default Form
