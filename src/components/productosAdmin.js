import '../styles/productosAdmin.css';
import { useState, useEffect } from 'react';
import lupa from "../resources/lupa (1).png";
import editar from '../resources/ajustes.png';
import eliminar from '../resources/basura.png';

export const ProductosAdmin = () => {

  const [dataProductos, setDataProductos] = useState([]);
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const handleChange = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }

  const filtrar = (terminoBusqueda) => {
    var resultadoBusqueda = productos.filter((elemento) => {
      if (elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) 
      || elemento.referencia.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
        return elemento;
      }
    })
    setDataProductos(resultadoBusqueda);
  }

  useEffect(() => {
    getData();
  }, [])


  function getData() {
    fetch("https://artesanias-backend.onrender.com//productos")
      .then((resp) => resp.json())
      .then((resp) => {
        return setDataProductos(resp),
          setProductos(resp)
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="div-buscar">
          <input
          title="Barra de búsqueda"
            className="input-buscar"
            value={busqueda}
            onChange={handleChange}
            placeholder="Buscar por referencia o nombre"
          />
          <button className="boton-buscar" ><img className="icono-lupa" src={lupa} /></button>
        </div>
      <center>
        <br></br>
        <br></br>
        <div className="titulo-prod-admin">
          <p className="textoListProductos">Lista de Productos</p>
        </div>
      </center>
      <div className="contenedorTabla">
        <table className="tabla-admin-prod">
          <thead>
            <tr className="encabezados">
              <th className="colRef">Ref.</th>
              <th>Imagen</th>
              <th>Nombre del producto</th>
              <th>Descripcion del producto</th>
              <th>Cant.</th>
              <th>Valor Unitario</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {dataProductos.map((prod) =>
              <tr>
                <td className="colRef">{prod.referencia}</td>
                <td className="columnaImagen">
                  <img src={prod.imagen} className="imagenProducto" alt="ImagenProducto" />
                </td>
                <td>{prod.nombre}</td>
                <td>{prod.descripcion}</td>
                <td>{prod.stock}</td>
                <td>$ {prod.precio}</td>
                <td className="colIcono">
                  <a href={`/Admin-Modificar-Producto/${prod._id}`} className="iconos" alt="Editar" >
                    <img title="Editar producto" src={editar} className="iconos" alt="Editar" />
                  </a>
                </td>
                <td className="colIcono">
                  <a href={`/Admin-Eliminar-Producto/${prod._id}`} className="iconos" alt="Eliminar" >
                    <img title="Eliminar producto" src={eliminar} className="iconos" alt="Eliminar" />
                  </a>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <center>
        <div className="botonAgregar">
          <a href="/Admin-Nuevo-Producto">
            <p className="textoAgregar">Agregar nuevo producto</p>
          </a>
        </div>
      </center>
    </>
  );
};