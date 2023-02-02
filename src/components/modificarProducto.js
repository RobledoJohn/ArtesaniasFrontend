import "../styles/modificarProducto.css";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductoItem } from "./productoItem";


export const ModificarProducto = () => {

  const params = useParams()//para poder utilizar el id enviado por la url
  const [dataProductos, setDataProductos] = useState([]);

  useEffect(() => {
    getData();
  }, [])


  function getData() {
    fetch(`https://api-artesania.netlify.app//productos/${params._id}`)//obtengo los datos del producto enviando el id al backend
      .then((resp) => resp.json())
      .then((resp) => {
        return setDataProductos(resp)
      })
      .catch((err) => console.log(err));
  }

  function modificarProducto() {
    const datosJSON = JSON.stringify(dataProductos)//se convierte el producto con los atributos seteados a json
    fetch(`https://api-artesania.netlify.app//modificarProducto/${params._id}`, {//envio el id del producto a modificar al backend
      method: "PUT",
      body: datosJSON,
      headers: {
        "Content-Type": "application/json",
      },
    })
    alert("Producto modificado correctamente")//mensaje en pantalla
  }

  return (
    <>
      <center>
        <div className="div-modificar-producto">
          <ProductoItem data={params._id} />{/*llamo el componente que muestra los datos del producto enviando el id*/}
          <br></br>
          <br></br>
          <h3 className="titulo-modificar-producto">INGRESE LOS NUEVOS DATOS</h3>
          <form className="form-modificar-producto">
            <input
              className="input-modificar-producto"
              type="text"
              placeholder="Referencia del producto"
              onChange={(e) => { setDataProductos({ ...dataProductos, referencia: e.target.value }) }}//obtengo los valores ingresados en cada input y lo seteo en cada propiedad del producto
              value={dataProductos.referencia}
            />
            <br></br>
            <input
              className="input-modificar-producto"
              type="text"
              placeholder="Nombre del producto"
              onChange={(e) => { setDataProductos({ ...dataProductos, nombre: e.target.value }) }}
              value={dataProductos.nombre}
            />
            <br></br>
            <input
              className="input-modificar-producto"
              type="text"
              placeholder="Descripción del producto"
              onChange={(e) => { setDataProductos({ ...dataProductos, descripcion: e.target.value }) }}
              value={dataProductos.descripcion}
            />
            <br></br>
            <input
              className="input-modificar-producto"
              type="text"
              name="Nombre del Producto"
              placeholder="Cantidad en Stock"
              onChange={(e) => { setDataProductos({ ...dataProductos, stock: e.target.value }) }}
              value={dataProductos.stock}
            />
            <br></br>
            <input
              className="input-modificar-producto"
              type="text"
              placeholder="Precio de Venta"
              onChange={(e) => { setDataProductos({ ...dataProductos, precio: e.target.value }) }}
              value={dataProductos.precio}
            />
            <br></br>
            <p>Imagen del producto</p>
            <input
              className="file-modificar-producto"
              type="file"
              placeholder="Añadir Imagenes"
            />
          </form>
          <div className="boton-guardar-modificar-producto">
            <button onClick={modificarProducto} className="boton-guardar-modificar">{/*al hacer click en guardar llama la funcion modificar producto*/}
              <a href="/Admin-Productos">Guardar</a>
            </button>
            <button className="boton-guardar-modificar" ><a href="/Admin-Productos">Cancelar</a></button>
          </div>
        </div>
      </center>

    </>
  );

}
