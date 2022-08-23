import React from 'react'
import { Route, Routes } from 'react-router-dom';
import MoreInfoVehiculos from "../../components/MoreInfoVehiculos";
import NotFound from '../../components/NotFound';
import Inicio from '../Inicio';
import MoreInfo from '../MoreInfo';
import SolamenteCoches from "../SolamenteCoches";
import SolamenteMotos from '../SolamenteMotos';

const PagesRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />{" "}
        <Route path={`:proprietario/:age/:id/:tel`} element={<MoreInfo />} />
        {/*  */}
        <Route
          path="onlycoches"
          element={<SolamenteCoches variable={"coche"} />}
        />
        {/*  */}
        <Route
          path="onlymotos"
          element={<SolamenteMotos variable={"moto"} />}
        />
        <Route path={`:id`} element={<MoreInfoVehiculos />} />
        {/*  */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default PagesRouter