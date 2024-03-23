import React from 'react';
import userImage from "../assets/user2.png"
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";


function Login({toggle, toggleForm}) {

    /*Función para simular el registro o el login, solo recarga la página*/
    const reload = () => {
         window.location.reload();
    }

    return(
        <form className= {toggleForm ? "form__container" : "form__hide"}>
        <div className="logo__container">
          <img src={userImage} alt="userImage" />
        </div>
        <div className="input__container">
          <label className="icon__container">
            <MdEmail className="icon" size={20}/>
          </label>
          <input 
            type="email" 
            placeholder="Escribe tu Email"
            requiered
            className="input"
          />
        </div>
        <div className="input__container"> 
          <label icon__container>
            <FaLock className="icon" size={20}/>
          </label>
          <input 
            type="password"
            placeholder="Contraseña"
            requiered
            className="input"
          />
        </div>
          <div className="checkbox__container">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Recuérdame</label>
          </div>
        <button type="submit" className="button__select" onClick = {reload}>Ingresar</button>
        <button className="button__select" onClick = {toggle} >Registrarse</button>
      </form>
    )
}

export default Login