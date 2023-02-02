import "../styles/registro.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// https://api-artesania-backend.up.railway.app/api/usuario

export const Registro = () => {
  const [inputs, setInputs] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    contraseña: "",
  });

  const [mensaje, setMensaje] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { nombre, email, telefono, direccion, contraseña } = inputs;

  const HandleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      nombre !== "" &&
      email !== "" &&
      telefono !== "" &&
      direccion !== "" &&
      contraseña !== ""
    ) {
      const Usuario = {
        nombre,
        email,
        telefono,
        direccion,
        contraseña,
      };
      setLoading(true);
      await axios
        .post(
          "https://api-artesania-backend.up.railway.app/register",
          Usuario
        )
        .then((res) => {
          const { data } = res;
          setMensaje(data.mensaje);
          setInputs({
            nombre: "",
            email: "",
            telefono: "",
            direccion: "",
            contraseña: "",
          });
          setTimeout(() => {
            setMensaje(alert("Usuario creado con éxito"));
            navigate("/");
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
          setMensaje("Hubo un error");
          setTimeout(() => {
            setMensaje("");
          }, 2000);
        });
      setLoading(false);
    }
  };

  return (
    <center>
      <div className="contenedor-login">
        <center>
          <div className="contenedor-login">
            <div className="formulario">
              <h2 className="titulo-formulario">Registrarse</h2>
              <form className="formatito" onSubmit={(e) => onSubmit(e)}>
                <label htmlFor="nombre"></label>
                <input
                  onChange={(e) => HandleChange(e)}
                  value={nombre}
                  className="campotex"
                  type="text"
                  name="nombre"
                  placeholder="nombre"
                />
                <label htmlFor="email"></label>
                <input
                  onChange={(e) => HandleChange(e)}
                  value={email}
                  className="campotex"
                  type="email"
                  name="email"
                  placeholder="email"
                />
                <label htmlFor="telefono"></label>
                <input
                  onChange={(e) => HandleChange(e)}
                  value={telefono}
                  className="campotex"
                  type="tel"
                  name="telefono"
                  placeholder="telefono"
                />
                <label htmlFor="direccion"></label>
                <input
                  onChange={(e) => HandleChange(e)}
                  value={direccion}
                  className="campotex"
                  type="text"
                  name="direccion"
                  placeholder="direccion"
                />
                <label htmlFor="contraseña"></label>
                <input
                  onChange={(e) => HandleChange(e)}
                  value={contraseña}
                  className="campotex"
                  type="password"
                  name="contraseña"
                  placeholder="contraseña"
                />
                <button type="submit" className="btn element">
                  {loading ? "Cargando..." : "Registrarme"}
                </button>
              </form>
              <div className="pass">
                <a href="/" className="input">
                  ¿Ya tienes una cuenta?
                </a>
              </div>
            </div>
            {mensaje && <div className="toast">{mensaje}</div>}
          </div>
        </center>
      </div>
    </center>
  );
};
