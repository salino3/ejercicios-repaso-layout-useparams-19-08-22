import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

interface Props {
  id?: string;
  tipo?: string;
  proprietario?: string;
  age?: number;
  tel?: number
}


const Card = ({id, tipo, proprietario, age, tel}: Props) => {

    let rutaImg = `/assets/${id}.jpg`


  return (
    <>
      <div className="divCard">
        <img className="imgCard" src={rutaImg} alt={tipo} />

        <h3>{proprietario}</h3>
        <div>{age}</div>
        {/* si la ruta empieza con '/' no aparece el 'nav'  */}
        <Link to={`/${id}`}>Más informaciones..</Link>
      </div>
    </>
  );
}

export default Card

        // <Link to={`/${proprietario}/${age}/${id}/${tel}`}>
