import { Fragment } from "react";
import { useState } from "react";
import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

import JsonData from "../data/UsuariosEjemplo.json";

export function Login() {


 
  const [data, setDate] = useState({
    usuario: "",
    contraseña: "",
    rol: ""
  }
  )

  const [url, setURL] = useState("");


  return (

<Fragment>
        <center>
          <div className="contenedor-login">
            <div className="formulario">
              <h2 className="titulo-formulario">Iniciar Sesión</h2>
              <form className="formatito">
                <label for="usuario o email"></label>
                <input
                  className="campotex"
                  type="text"
                  name="usuario o email"
                  placeholder="Usuario o Email"
                  onChange={(e) => {
                    setDate({ ...data, user: e.target.value })
                  }

                  }></input>
                <br></br>
                <br></br>
                <label for="contraseña"></label>
                <input
                  className="campotex"
                  type="text"
                  name="Contraseña"
                  placeholder="Contraseña"
                  onChange={(e) => {
                    setDate({ ...data, user: e.target.value })
                  }
                }></input>
              </form>
              <div>
                <button onclick="btn" className="btn element">
                  <a class="line" href="/Home">Ingresar</a>
                </button>
              </div>
              <div className="pass">
                <br></br>
                <br></br>
                <a href="/Registrarse" className="input">
                  Registrarse
                </a>
              </div>
            </div>
          </div>
        </center>
      </Fragment>
    );
  


  function Validacion(usuarioNombre, contrasena) {

    var rol = "";
    var datos = JsonData; //Integra o con express o con mongoDb   


    for (const usuario of datos) {
      if (usuarioNombre === usuario.user && contrasena === usuario.pass) {
        rol=usuario.Rol
      }
    }
    return rol;
  }



  function VerInfo() {


console.log(Validacion(data.user, data.pass));

    // eslint-disable-next-line 
    if (Validacion(data.user, data.pass)==="Admin") {
      setURL("/ListaProductos")

    } else if (Validacion(data.user, data.pass)==="Cliente") {
      setURL("/HomeCliente")
    }else{
      alert("Los datos son incorrectos")
    }
  }
}