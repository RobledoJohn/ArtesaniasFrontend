import '../styles/header.css';
import {useEffect, useState} from "react";
import usuario from '../resources/usuario.png';
import logo from '../resources/logo-1.png';
import carrito from '../resources/carrito-de-compras.png';
import productos from '../resources/paquete.png';
import home from '../resources/casa-de-perro.png';

export const Header = () => {

    const [carritoItems, setCarritoItems] = useState([]);

    useEffect(() => {
        getProductosCarrito();
      }, []);

    function getProductosCarrito() {
      fetch("https://artesanias-backend.onrender.com//getProductosCarrito")
        .then((resp) => resp.json())
        .then((resp) => {
          return setCarritoItems(resp)
        })
        .catch((err) => console.log(err));
    };

    return (
        <nav className="header">
            <a title="Inicio" href="/Home"><img src={logo} className="logo" alt="logo" /></a>
            <div className="divFondoIconos" id="fondoUsuario">
                <a title="Perfil de Usuario" href="/Perfil"><img src={usuario} className="iconosHeader" alt="Perfil"/></a>
            </div>
            <div className="divFondoIconos">
                <a title="Carrito de Compras" href="/Carrito">
                    <img src={carrito} className="iconosHeader" alt="CarritoCompras"/>
                    <p className="cant-prod-logo-carrito">{carritoItems.length}</p>
                    </a>
            </div>
            <div className="divFondoIconos">
                <a title="Productos" href="/Productos"><img src={productos} className="iconosHeader" alt="Productos"/></a>
            </div>   
            <div className="divFondoIconos">
                <a title="Inicio" href="/Home"><img src={home} className="iconosHeader" alt="Home"/></a>
            </div> 
        </nav>

    )
}