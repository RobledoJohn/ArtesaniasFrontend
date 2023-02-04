import "../styles/aprobado.css";
import { useState, useEffect } from "react";

export const Aprobado = () => {
  const [resumenItems, setResumenItems] = useState([]);

  function getResumenCarrito() {
    fetch("https://artesanias-backend.onrender.com/getResumenCarrito")
      .then((resp) => resp.json())
      .then((resp) => {
        return setResumenItems(resp);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getResumenCarrito();
  }, []);

  function vaciarCarrito() {
    // Ejemplo implementando el metodo POST:
    async function postData(url = "", data = {}) {
      // Opciones por defecto estan marcadas con un *
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }

    postData("https://artesanias-backend.onrender.com/ventas", { answer: 42 }).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });

    //vaciar carrito
    fetch("https://artesanias-backend.onrender.com/vaciarCarrito")
      .then((resp) => resp.json())
      .then((resp) => {
        return resp;
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <center>
        <h1 className="titulo-modificar-producto">Transacción Aprobada</h1>
        {resumenItems.map((datos) => (
          <div className="contenedor-resumen">
            <h4 className="titulo-resumen-compra">Resumen de la compra</h4>
            <form className="div-titulo">
              <p className="text-Total">Total productos en carrito:</p>
              <p className="text-valor">{datos.cantidad}</p>
            </form>
            <form className="div-total-pagar">
              <p className="text-Total text-total-big">Total de la compra:</p>
              <p className="text-valor text-valor-big"> $ {datos.total}</p>
            </form>
            <div className="div-boton-finzalizar">
              <a
                className="boton-finalizar"
                href="/Productos"
                onClick={vaciarCarrito}
              >
                Terminar
              </a>
            </div>
          </div>
        ))}
      </center>
    </>
  );
};
