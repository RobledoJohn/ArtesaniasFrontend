import { useEffect, useState } from 'react';

export const ProductoItem = ({ data }) => {//recibo el data con el id del producto

  const [dataProductos, setDataProductos] = useState([]);//inicializo el array de productos vacio

  useEffect(() => {
    getData();
  }, [])


  function getData() {
    fetch(`https://api-artesania.netlify.app//productos/${data}`)//obtengo el producto completo enviando el id
      .then((resp) => resp.json())
      .then((resp) => {
        return setDataProductos(resp)
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      {dataProductos.map((prod) =>//recorro cada propiedad del producto recibido
        <div className="datos-modificar-producto">
          <h2 className="titulo-modificar-producto">PRODUCTO A MODIFICAR</h2>
          <p className="textoListProductos">Imagen:</p>
              <img src={prod.imagen} className="imagenProducto" alt="ImagenProducto" />
              <p className="textoListProductos">Referencia: </p><p className="texto-producto-eliminar">{prod.referencia}</p>
              <p className="textoListProductos">Nombre: </p><p className="texto-producto-eliminar"> {prod.nombre}</p>
              <p className="textoListProductos">Descripción: </p><p className="texto-producto-eliminar"> {prod.descripcion}</p>
              <p className="textoListProductos">Stock: </p><p className="texto-producto-eliminar"> {prod.stock}</p>
              <p className="textoListProductos">Precio: </p><p className="texto-producto-eliminar"> {prod.precio}</p>
        </div> 
      )
    }
    </>
  )
}