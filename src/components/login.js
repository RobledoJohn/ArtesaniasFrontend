import { Fragment } from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/login.css";

export const Formulariologin = () => {
  const [inputs, setInputs] = useState({
    email: "",
    contraseña: "",
  });

  const [mensaje, setMensaje] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { email, contraseña } = inputs;

  const HandleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email !== "" && contraseña !== "") {
      const Usuario = {
        email,
        contraseña,
      };
      setLoading(true);
      await axios
        .post("https://api-artesania.netlify.app//login", Usuario)
        .then((res) => {
          const { data } = res;
          setMensaje(data.mensaje);
          setTimeout(() => {
            setMensaje("");
            //localStorage.setItem("token", data?.usuario.token);
            navigate(`/Home/${data.usuario.id}`);
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
          setMensaje(alert("Usuario u contraseña incorrecta"));
          setTimeout(() => {
            setMensaje("");
          }, 2000);
        });
      setInputs({ correo: "", contraseña: "" });
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <center>
        <div className="contenedor-login">
          <div className="formulario">
            <h2 className="titulo-formulario">Iniciar Sesión</h2>
            <form className="formatito" onSubmit={(e) => onSubmit(e)}>
              <label htmlFor="email"></label>
              <input
                onChange={(e) => HandleChange(e)}
                value={email}
                className="campotex"
                type="email"
                name="email"
                placeholder="email"
              />
              <br></br>
              <br></br>
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
                {loading ? "Cargando..." : "Ingresar"}
              </button>
            </form>
            <div className="pass">
              <br></br>
              <br></br>
              <a href="/Registrarse" className="input">
                Registrarse
              </a>
            </div>
          </div>
          {mensaje && <div className="toast">{mensaje}</div>}
        </div>
      </center>
    </Fragment>
  );
};
