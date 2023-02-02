import "../styles/vistaProducto.css";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import iconoCarrito from "../resources/carrito-de-compras-azul.png";

export const VistaProducto = () => {

    const params = useParams()
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    function getData() {
        fetch(`https://api-artesania-backend.up.railway.app/productos/${params._id}`)
            .then((resp) => resp.json())
            .then((resp) => {
                return setProducto(resp)
            })
            .catch((err) => console.log(err));
    }

    const addProductosCarrito = async (prod) => {
        const { nombre, imagen, precio } = prod;
        await axios.post("https://api-artesania-backend.up.railway.app/postProductosCarrito", { nombre, imagen, precio });
    };

    return (
        <center>
            {producto && producto.map((prod) =>
                <div className="div-producto-individual">
                    <div className="div-imagen-producto">
                        <img
                            title="Imagen del producto"
                            className="imagen-producto-individual"
                            alt="Imagen de Producto"
                            src={prod.imagen}
                        ></img>
                    </div>
                    <div className="info-producto-individual">
                        <center>
                            <h2 title="Nombre del producto" className="titulo-producto-individual">{prod.nombre}</h2>
                            <p title="Descripción del producto" className="descripcion-producto-individual">
                                {prod.descripcion}{" "}
                            </p>
                        </center>
                        <h2 title="Precio del producto" className="precio-producto">$ {prod.precio}</h2>
                        <div className="opciones-prod">
                            <a title="Ir al carrito" className="boton-comprar-ahora" href="/Carrito" onClick={() => addProductosCarrito(prod)}>Comprar ahora</a>
                            <div>
                                <br></br>
                                {!prod.enCarrito ? (
                                    <a title="Agregar producto al carrito" className="boton-agregar-carrito" href="/Productos" onClick={() => addProductosCarrito(prod)}>Agregar</a>
                                ) : (
                                    <a title="El producto ya esta en tu carrito" className="boton-agregar-carrito" >En el carrito</a>
                                )}
                                <img
                                    className="icono-carrito"
                                    alt="icono carrito"
                                    src={iconoCarrito}
                                ></img>
                            </div>

                        </div>
                    </div>
                </div>
            )}

        </center>
    )

}