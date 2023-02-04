import "../styles/modificarProducto.css";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


export const EliminarProducto = () => {

  const params = useParams()
  const [dataProductos, setDataProductos] = useState([]);


  useEffect(() => {
    getData();
  }, [])


  function getData() {
    fetch(`https://artesanias-backend.onrender.com//productos/${params._id}`)
      .then((resp) => resp.json())
      .then((resp) => {
        return setDataProductos(resp)
      })
      .catch((err) => console.log(err));
  }
 
  function eliminarProducto() {

    const datosJSON = JSON.stringify(dataProductos)
    fetch(`https://artesanias-backend.onrender.com//eliminarProducto/${params._id}`, {
      method: "PUT",
      body: datosJSON,
      headers: {
        "Content-Type": "application/json",
      },
    })
    alert("Producto eliminado correctamente")
  }

  return (
    <>
      <center>

        <div className="div-modificar-producto">
          {dataProductos.map((prod) =>
            <div className="datos-modificar-producto">
              <h2 className="titulo-modificar-producto">PRODUCTO A ELIMINAR</h2>
              <p className="textoListProductos">Imagen:</p>
              <img src={prod.imagen} className="imagenProducto" alt="ImagenProducto" />
              <p className="textoListProductos">Referencia: </p><p className="texto-producto-eliminar">{prod.referencia}</p>
              <p className="textoListProductos">Nombre: </p><p className="texto-producto-eliminar"> {prod.nombre}</p>
              <p className="textoListProductos">Descripción: </p><p className="texto-producto-eliminar"> {prod.descripcion}</p>
              <p className="textoListProductos">Stock: </p><p className="texto-producto-eliminar"> {prod.stock}</p>
              <p className="textoListProductos">Precio: </p><p className="texto-producto-eliminar"> {prod.precio}</p>
            </div>
          )}
          <br></br>
          <h3 className="titulo-modificar-producto">¿ESTAS SEGURO QUE DESEAS ELIMINAR EL PRODUCTO?</h3>
          <button className="bton elemento" onClick={eliminarProducto}><a href="/Admin-Productos">Eliminar</a></button>
          <button className="bton elemento" ><a href="/Admin-Productos">Cancelar</a></button>
        </div>
      </center>
    </>
  );

}
