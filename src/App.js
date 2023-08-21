import { Home } from "./components/home.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HeaderAdmin } from "./components/headerAdmin";
import { Header } from "./components/header.js";
import { Footer } from "./components/footer.js";

import { Formulariologin } from "./components/login.js";

import { Registro } from "./components/registro.js";

import { Perfil } from "./components/vistaPerfil.js";
import { EditarPerfil } from "./components/vistaEditarPerfil.js";

import { ListaProductos } from "./components/vistaListaProductos.js";
import { CarritoCompras } from "./components/carrito.js";

import { Aprobado } from "./components/aprobado.js";

import { ProductosAdmin } from "./components/productosAdmin.js";
import { AgregarProducto } from "./components/agregarProducto.js";
import { ModificarProducto } from "./components/modificarProducto.js";
import { Ventas } from "./components/ventas";

import { About } from "./components/about.js";
import { EliminarProducto } from "./components/eliminarProducto.js";
import { VistaProducto } from "./components/vistaProducto.js";
import { HeaderCarrito } from "./components/headerCarrito.js";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/Home/:_id"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route path="/" element={<Formulariologin />} />
          <Route path="/Registrarse" element={<Registro />} />
          <Route
            path="/Perfil/:_id"
            element={
              <>
                <Header />
                <Perfil />
                <Footer />
              </>
            }
          />
          <Route
            path="/Editar-Perfil/:_id"
            element={
              <>
                <Header />
                <EditarPerfil />
                <Footer />
              </>
            }
          />
          <Route
            path="/Productos"
            element={
              <>
                <Header />
                <ListaProductos />
                <Footer />
              </>
            }
          />
          <Route
            path="/Producto/:_id"
            element={
              <>
                <Header />
                <VistaProducto />
                <Footer />
              </>
            }
          />
          <Route
            path="/Carrito"
            element={
              <>
                <HeaderCarrito />
                <CarritoCompras />
                <Footer />
              </>
            }
          />
          <Route
            path="/Aprobado"
            element={
              <>
                <Header />
                <Aprobado />
                <Footer />
              </>
            }
          />
          <Route
            path="/Admin-Productos"
            element={
              <>
                <HeaderAdmin />
                <ProductosAdmin />
                <Footer />
              </>
            }
          />
          <Route
            path="/Admin-Nuevo-Producto"
            element={
              <>
                <HeaderAdmin />
                <AgregarProducto />
                <Footer />
              </>
            }
          />
          <Route
            path="/Admin-Modificar-Producto/:_id"
            element={
              <>
                <HeaderAdmin />
                <ModificarProducto />
                <Footer />
              </>
            }
          />
          <Route
            path="/Admin-Eliminar-Producto/:_id"
            element={
              <>
                <Header />
                <EliminarProducto />
                <Footer />
              </>
            }
          />
          <Route
            path="/Admin-Ventas"
            element={
              <>
                <HeaderAdmin />
                <Ventas />
                <Footer />
              </>
            }
          />

          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
