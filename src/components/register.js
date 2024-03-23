import React from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import reload from "./login"


function Register({toggle, toggleForm }) {


    return(
            <form className={toggleForm ? "form__hide" : "form__container"}>
                <div className="title__container">
                    <h1>Registrarse</h1>
                    <button className="close__button" onClick={toggle}><IoIosCloseCircle size={25} /></button>
                </div>
                <div className="input__container">
                    <input 
                        type="text"
                        placeholder="Nombre"
                        requiered
                        className="input" />
                </div>
                <div className="input__container">
                    <input 
                        type="text"
                        placeholder="Apellido"
                        requiered
                        className="input" />
                </div>
                <div className="input__container">
                    <input 
                        type="email"
                        placeholder="Email"
                        requiered
                        className="input" />
                </div>
                <div className="input__container">
                    <input 
                        type="text"
                        placeholder="Usuario"
                        requiered
                        className="input" />
                </div>
                <div className="input__container">
                    <input 
                        type="password"
                        placeholder="Contraseña"
                        requiered
                        className="input" />
                </div>
                <div className="input__container">
                    <input 
                        type="password"
                        placeholder="Confirmar Contraseña"
                        requiered
                        className="input" />
                </div>
                <div className="checkbox__container agree__container">
                    <input type="checkbox" id="agree" />
                    <label htmlFor="agree" requiered>Estoy de acuerdo con los <a>Términos y Condiciones</a></label>
                </div>
                <button type="submit" className="button__select" onClick = {reload}>Registrarse</button>
            </form>
    )
}

export default Register;