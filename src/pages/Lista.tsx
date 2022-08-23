import React from 'react';
import { Link } from 'react-router-dom';
import {motosYcoches} from '../data/Info'

const Lista = () => {

  return (
    <>
      <h1>Motos y Coches</h1>

      {motosYcoches.map((item: any) => (
        <div key={item.id} className="divDisplayLista">
          <h6>
            Proprietarios:{" "}
            <span style={{ color: "red" }}>{item.proprietario}</span>
          </h6> <div>clica sobre el vehículo por más informaciones</div>
          <Link to={`/${item.proprietario}/${item.age}/${item.id}/${item.tel}`}>
            <img src={`/assets/${item.id}.jpg`} alt={item.proprietario} />{" "}
          </Link>
        </div>
      ))}
    </>
  );
}

export default Lista