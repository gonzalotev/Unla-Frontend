import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';



const Home = () => {
    
    

    return(
        <div className="home">
                <br/>
                <Link className="btnacceder" to="/Login">
                 ACCEDER
                </Link>
             <h1 id="TittleISDLA">ISDLA</h1>
             <h2 id="subtittle">Instituto Superior De La Alegria</h2>
             <h3 id="bienvenida">¡Bienvenido!</h3>
             <h3 id="bienvenida">Solicitud de Inscripción</h3>
             <h4 id="importante">Importante</h4>
             <p id="boxhome">
                 Para acceder al sistema por primera vez tiene que disponer de un usuario y contraseña.
                 Para ellos, debes escribir a la casilla de correo <strong>udla.lapaz.segundo@gmail.com</strong> indicando:
                    <li> Nombre y Apellido completo</li>
                    <li id="puntito">Tipo y Numero de documento</li>
                    <li id="puntito2"> Casilla de correo electronico</li>
             </p>
             
        </div>
      
    )

}

export default Home;