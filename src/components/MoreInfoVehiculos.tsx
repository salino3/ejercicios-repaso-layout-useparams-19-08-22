import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getItemById } from "../helpers/getItemById";
import NavBar from "./NavBar";

const MoreInfoVehiculos = () => {


 const { id } = useParams();
//  const { item } : any= getTipoVehiculo(id);
//   const item = useMemo(() => getTipoVehiculo(id), [id]);
  const { ...item } = useMemo(() => getItemById(id), [id]);

  useParams()
  return (
    <>
      <NavBar />
      <h1 className="px-3">Informaciones del vehículo</h1>

      <div className="p-3">
        <p>
          Propritario/a:{" "}
          <span style={{ color: "red" }}> {item.proprietario} </span>
        </p>
        <p>
          Año: <span style={{ color: "red" }}>{item.age}</span>
        </p>
        <p>
          Número de telefono: <span style={{ color: "red" }}>{item.tel}</span>
        </p>

        <div key={item.id} className="divDisplayLista">
          <img src={`/assets/${item.id}.jpg`} alt={item.proprietario} />{" "}
        </div>
      </div>
    </>
  );
};

export default MoreInfoVehiculos;
