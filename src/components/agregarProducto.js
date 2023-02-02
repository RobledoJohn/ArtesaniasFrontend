import { useState } from 'react';
import "../styles/agregarProducto.css";

export const AgregarProducto = () => {

  const [referencia, setReferencia]=useState("")
  const [nombre, setNombre]=useState("")
  const [descripcion, setDescripcion]=useState("")
  const [stock, setStock]=useState("")
  const [imagen, setImagen]=useState("")
  const [precio, setPrecio]=useState("")

  function agregarProducto() {
    var producto = {
      referencia: referencia,
      nombre: nombre,
      descripcion: descripcion,
      stock: stock,
      imagen: imagen,
      precio: precio,
      estado: true,
      enCarrito: false
    }
        
    const datosJSON = JSON.stringify(producto)       
    
    fetch("https://api-artesania-backend.up.railway.app/nuevoProducto", {
        method: "POST",
        body: datosJSON,
        headers: {
            "Content-Type": "application/json",
        },
    })
    //Comprobacion  de los datos
        alert("Producto agregado correctamente")
}
  
  return (
    <>
      <center>
        <div className="formato">
          <h2 className="titulo-formato">AGREGAR PRODUCTO</h2>
          <form className="format" >
            <input
              className="campo"
              type="text"
              placeholder="Referencia del Producto"
              onChange={(e) => {setReferencia(e.target.value)}} value={referencia}
            />
            <br></br>
            <input
              className="campo"
              type="text"
              placeholder="Nombre del Producto"
              onChange={(e) => {setNombre(e.target.value)}} value={nombre}
            />
            <br></br>
            <input
              className="campo"
              type="text"
              placeholder="Descripción del producto"
              onChange={(e) => {setDescripcion(e.target.value)}} value={descripcion}
            />
            <br></br>
            <input
              className="campo"
              type="text"
              placeholder="Cantidad en Stock"
              onChange={(e) => {setStock(e.target.value)}} value={stock}
            />
            <br></br>
            <input
              className="campo"
              type="text"
              placeholder="Precio Unitario de venta"
              onChange={(e) => {setPrecio(e.target.value)}} value={precio}
            />
            <br></br>
            
            <input
              className="campo"
              type="text"
              placeholder="URL: imagen del producto"
              onChange={(e) => {setImagen(e.target.value)}} value={imagen}
            />
            
            <div className="Boton-agregar-producto">
              <button onClick={agregarProducto} className="bton elemento" >
                <a href="/Admin-Productos">Guardar producto</a>
              </button>
            </div>
          </form>
        </div>
      </center>
    </>
  );
};
