import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar';

const MoreInfo = () => {
 const {proprietario,   ...item} = useParams()

  return (
    <>
      <NavBar />
{/* más informaciones (coches y motos) desde lista completa */}
      <div>
        <h1>Informaciones del vehículo</h1>
        <p>
          Propritario/a: <span style={{ color: "red" }}> {proprietario} </span>
        </p>
        <p>Año:      <span style={{ color: "red" }}>{item.age}</span></p>
        <p>Número de telefono: <span style={{ color: "red" }}>{item.tel}</span></p>

        <div key={item.id} className="divDisplayLista">
          <img src={`/assets/${item.id}.jpg`} alt={proprietario} />{" "}
        </div>
      </div>
    </>
  );
}

export default MoreInfo