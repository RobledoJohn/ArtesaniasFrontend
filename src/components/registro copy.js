import "../styles/registro.css";
import { useState } from 'react';




export const Registro = () => {

  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [telefono, setTelefono] = useState("")
  const [direccion, setDireccion] = useState("")
  const [contraseña, setContraseña] = useState("")

  function registrarUsuario() {
    var usuario = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      contraseña: contraseña,

    }

    const datosJSON = JSON.stringify(usuario)

    fetch("https://artesanias-backend.onrender.com//api/usuario", {
      method: "POST",
      body: datosJSON,
      headers: {
        "Content-Type": "application/json",
      },
    })
    //Comprobacion  de los datos
    alert("Usuario creado correctamente")
  }


  return (
    <center>
      <div className="contenedor-login">
        <center>
          <div className="contenedor-login">
            <div className="formulario">
              <h2 className="titulo-formulario">Registrarse</h2>
              <form  className="formatito">
                <input
                  className="campotex"
                  type="text"
                  name="nombre"
                  placeholder="nombre"
                  onChange={(e) => { setNombre(e.target.value) }} value={nombre}
                />
                <input
                  className="campotex"
                  type="text"
                  name="email"
                  placeholder="email"
                  onChange={(e) => { setEmail(e.target.value) }} value={email}

                />
                <input
                  className="campotex"
                  type="tel"
                  name="telefono"
                  placeholder="telefono"
                  onChange={(e) => { setTelefono(e.target.value) }} value={telefono}
                />
                <input
                  className="campotex"
                  type="text"
                  name="direccion"
                  placeholder="direccion"
                  onChange={(e) => { setDireccion(e.target.value) }} value={direccion}
                />
                <input
                  className="campotex"
                  type="password"
                  name="contraseña"
                  placeholder="contraseña"
                  onChange={(e) => { setContraseña(e.target.value) }} value={contraseña}
                />

                <div>

                   <button onClick={registrarUsuario} className="btn element">
                    Registrarse
                    </button> 
                </div>
              </form>
              <div className="pass">
                <a href="/" className="input">
                  ¿Ya tienes una cuenta?
                </a>
              </div>
            </div>
          </div>
        </center>
      </div>
    </center>
  );
}
