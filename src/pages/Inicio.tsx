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
        <div>
          <h1 className="divAñadirContenido">Añadir contenido y fotos</h1>
        </div>
      </div>
    </>
  );
}

export default Inicio