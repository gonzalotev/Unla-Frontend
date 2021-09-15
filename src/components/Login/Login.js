import React, { Component } from "react";
import './Login.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from "universal-cookie";

const baseURL ="http://localhost:3001/usuarios";
const cookies = new Cookies();

class Login extends Component{

    state={
        form:{
            username: '',
            password: ''
        }
    }

    handelchange = async (e) =>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    logIn = async () =>{
        await axios.get(baseURL, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                var answer = response[0];
                cookies.set('id', answer.id, {path: "/"});
                cookies.set('lastname', answer.lastname, {path: "/"});
                cookies.set('name', answer.name, {path: "/"});
                cookies.set('username', answer.name, {path: "/"});
                alert(`bienvenido ${answer.name} ${answer.lastname}`);
                window.location.href = "/Form";

            }else{
                alert('el usuario o la contraseña no son correctos')
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }

    componentDidMount(){
        if(cookies.get('username')){
            window.location.href="./form";
        }
    }

    render(){

        return(
            <div className="principalContainer">
                <div className="secondaryContainer">
                    <div className="form-group">
                        <label>Usuario: </label>
                        <br/>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="username"
                            onChange={this.handelchange}
                        />
                        <br/>
                        <label>Contraseña: </label>
                        <br/>
                        <input 
                            type="password" 
                            className="form-control" 
                            name="password"
                            onChange={this.handelchange}
                        />
                        <br/>
                        <button className="btn-primary" onClick={() => this.logIn()}>Iniciar Sesión</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
