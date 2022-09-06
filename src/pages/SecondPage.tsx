import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const SecondPage = () => {
  return (
    <>
      <div className="  p-2">
        <h2>Segunda Página</h2>

        <Link to="form">
          <button className=" buttonSecondPage btn btn-primary rounded   ">
            Ir al formulario
          </button>
        </Link>
        <Link to="lista">
          <button className=" buttonSecondPage btn btn-success rounded   ">
            <i className="bi bi-arrow-down"></i>
            <i className="bi bi-arrow-down"></i>
            &nbsp; Mostrar la lista completa &nbsp;
            <i className="bi bi-arrow-down"></i>
            <i className="bi bi-arrow-down"></i>
          </button>
        </Link>
      </div>
      <Outlet />
      <div className="divAñadirContenido">
        <h1 className="H1contenido">Añadir contenido y fotos</h1>
        <img
          className="fotoVehiculos"
          src="fotosRellenosWeb/imgMaserati.jpg"
          alt="imagen"
        />
      </div>
    </>
  );
}

export default SecondPage;