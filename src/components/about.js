import { Component, Fragment } from "react";

export class About extends Component {
  render() {
    return (
      <Fragment>
        <a href="/">Login</a>
        <br></br>
        <a href="/Registrarse">Registrarse</a>
        <br></br>
        <a href="/Home">Home</a>
        <br></br>
        <a href="/Perfil">Perfil</a>
        <br></br>
        <a href="/Editar-Perfil">Editar-Perfil</a>
        <br></br>
        <a href="/Productos">Productos</a>
        <br></br>
        <a href="/Aprobado">Aprobado</a>
        <br></br>
        <a href="/Admin-Productos">Admin-Productos</a>
        <br></br>
        <a href="/Admin-Nuevo-Producto">Admin-Nuevo-Producto</a>
        <br></br>
        <a href="/Admin-Ventas">Lista Ventas</a>
      </Fragment>
    );
  }
}
