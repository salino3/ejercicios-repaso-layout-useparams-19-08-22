import React from "react";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import getTipoVehiculo from "../helpers/getTipoVehiculo";

const SolamenteMotos = ({ variable }: any) => {
  let myTipo = getTipoVehiculo(variable);

  return (
    <>
    
      {/* mostrando la lista de motos(ruta desde 'NavBar') */}
      <NavBar />
      <h1>Solamente Motos</h1>
      {myTipo &&
        myTipo.map((item: any) => <Card key={item.id} {...item} />)}{" "}
    </>
  );
};

export default SolamenteMotos;
