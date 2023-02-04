import "../styles/vistaEditarPerfil.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import fotoPerfil from "../resources/usuario.png";
import botonGuardar from "../resources/guardar.png";

export const EditarPerfil = () => {

  const params = useParams()
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    contraseña: ""
  });

  useEffect(() => {
    getUsuario();
  }, [])

  function getUsuario() {
    fetch(`https://artesanias-backend.onrender.com/user/${params._id}`)
      .then((resp) => resp.json())
      .then((resp) => {
        return setUsuario(resp)
      })
      .catch((err) => console.log(err));
  }

  const handleChange = e => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  }

  function editarUsuario() {
    const datosJSON = JSON.stringify(usuario)
    fetch(`https://artesanias-backend.onrender.com/editUser/${params._id}`, {
      method: "PUT",
      body: datosJSON,
      headers: {
        "Content-Type": "application/json",
      },
    })
    alert("Usuario modificado correctamente")
  }

  return (
    <>
      <section>
        <center>
          <div className="containerFormato-editar">
            <div className="contenedor-elementos-editar">
              <p className="img-item-editar">
                <img
                  className="fotoPerfil-editar"
                  src={fotoPerfil}
                  alt="Foto Perfil"
                ></img>
              </p>
              <form className="formulario-editar">
                <label htmlFor="Nombre"></label>
                <input
                  className="list-item-editar"
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  onChange={handleChange}
                  value={usuario.nombre}
                />
                <label htmlFor="Correo"></label>
                <input
                  className="list-item-editar"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={usuario.email}
                />
                <label htmlFor="Celular"></label>
                <input
                  className="list-item-editar"
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono"
                  onChange={handleChange}
                  value={usuario.telefono}
                />
                <label htmlFor="Dirección"></label>
                <input
                  className="list-item-editar"
                  type="text"
                  name="direccion"
                  placeholder="Dirección"
                  onChange={handleChange}
                  value={usuario.direccion}
                />
                <div className="campo-password">
                  <label htmlFor="Contraseña"></label>
                  <input
                    className="list-item-editar"
                    type="password"
                    id="password"
                    name="contraseña"
                    placeholder="Contraseñá"
                    onChange={handleChange}
                    value={usuario.contraseña}
                  />
                  <span>Mostrar</span>
                </div>
              </form>
              <div className="button-edit-editar">
                <a onClick={editarUsuario}>
                  <img
                    className="botonEditar-editar"
                    src={botonGuardar}
                    alt="Boton editar"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </center>
      </section>
    </>
  );
}

