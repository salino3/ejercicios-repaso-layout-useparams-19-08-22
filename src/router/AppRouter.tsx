import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LoginRouter from '../pages/router/LoginRouter';
import PagesRouter from '../pages/router/PagesRouter';

const AppRouter = () => {


  return (
    <>
      {/*  className="divRouter" */}
      <div>
        <Routes>
          <Route path="/*" element={<PagesRouter />} />
          <Route path="login/*" element={<LoginRouter />} />
        </Routes>
      </div>
    </>
  );
}

export default AppRouter