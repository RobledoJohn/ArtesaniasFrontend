import { Component, Fragment } from "react";
import logo from "../resources/logo-1.png";
import '../styles/home.css';

export class Home extends Component {
  render() {
    return (
      <Fragment>
        <center>
          <div className="contenedor-home">
            <h1 className="titulo-home">Tienda Virtual</h1>
            <img src={logo} alt="logo artesanias"></img>
          </div>
        </center>
      </Fragment>
    );
  }
}
