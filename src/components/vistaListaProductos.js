import "../styles/vistaListaProductos.css";
import { useState, useEffect } from 'react';
import lupa from "../resources/lupa (1).png";


export const ListaProductos = () => {

  const [dataProductos, setDataProductos] = useState([]);
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const handleChange = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }

  const filtrar = (busqueda) => {
    var resultadoBusqueda = productos.filter((elemento) => {
      if (elemento.nombre.toString().toLowerCase().includes(busqueda.toLowerCase())) {
        return elemento;
      }
    })
    setDataProductos(resultadoBusqueda);
  }

  useEffect(() => {
    getData();
  }, [])

  //se obtiene los productos de la base de datos
  function getData() {
    fetch("https://artesanias-backend.onrender.com/productosStock")
      .then((resp) => resp.json())
      .then((resp) => {
        return setProductos(resp),
          setDataProductos(resp)
      })
      .catch((err) => console.log(err));
  };


  return (
    <>
      <div className="div-buscar">
        <input
          title="Barra de búsqueda"
          className="input-buscar"
          value={busqueda}
          onChange={handleChange}
          placeholder="Buscar por nombre de producto"
        />
        <button className="boton-buscar" ><img className="icono-lupa" src={lupa} /></button>
      </div>
      <div className="container-productos">
        {dataProductos.map((prod) =>
          <div className="producto">
            <div className="imagen-producto-box">
              <img
                title="Imagen del producto"
                className="imagen-producto"
                alt="Imagen de Producto"
                src={prod.imagen}
              ></img>
            </div>
            <div title="Información del producto" className="info-producto">
              <center>
                <h2 className="titulo">{prod.nombre}</h2>
                <p className="descripcion">
                  {prod.descripcion}{" "}
                </p>
              <h2 title="Precio del producto" className="precio-lista-productos">$ {prod.precio}</h2>
              <div className="opciones-prod">
                <div>
                  <a title="Ver producto" className="boton-agregar" href={`Producto/${prod._id}`} >Ver Producto</a>
                </div>
              </div>
              </center>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
