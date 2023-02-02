import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "../styles/vistaPerfil.css";
import fotoPerfil from "../resources/usuario.png";
import botonEditar from "../resources/editar.png";

export const Perfil = () => {
  
  //solo para pruebas. Se debe recibir el id por parametros
  const idRecibido = "638aa129cc564459b758369b";

  //const params = useParams()

  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    getUsuario();
  }, [])

  function getUsuario() {
    //Se debe reemplazar "idRecibido" por params._id
    fetch(`https://api-artesania-backend.up.railway.app/user/${idRecibido}`)
      .then((resp) => resp.json())
      .then((resp) => {
        return setUsuario(resp)
      })
      .catch((err) => console.log(err));
  }
  console.log(usuario, typeof(usuario));

  return (
    <>
        <center>
          <div className="containerFormato">
            <div className="contenedor-elementos">
              <p className="img-item">
                <img className="fotoPerfil" src={fotoPerfil} alt="Foto Perfil"></img>
              </p>
              <div className="contenido-lista">
                <p className="list-item"></p>
                <p className="list-item"></p>
                <p className="list-item"></p>
                <p className="list-item"></p>
                <p  className="list-item"></p>
              </div>
              <div className="button-edit">
                <a href={`/Editar-Perfil/`}>
                  <img
                    className="botonEditar"
                    src={botonEditar}
                    alt="Boton editar"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </center>
    </>
  );
}
