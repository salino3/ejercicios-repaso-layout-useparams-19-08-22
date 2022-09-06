import React from 'react'
import { Link } from 'react-router-dom'


const Inicio = () => {
  return (
    <>
      <div className="divInicio">
        <p>Inicio</p>

        <Link to="login">
          <button className="btn btn-primary rounded ">Entrar</button>
        </Link>
        <div className="divAñadirContenido">
          <h1 className='H1contenido'>Añadir contenido y fotos</h1>
          <img
            className="fotoVehiculos"
            src="fotosRellenosWeb/vehiculos.jpg"
            alt="imagen"
          />
        </div>
      </div>
    </>
  );
}

export default Inicio