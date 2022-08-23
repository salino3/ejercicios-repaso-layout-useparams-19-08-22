import React from 'react'
import { Route, Routes } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import CreateAccountForm from '../CreateAccountForm';
import Form from '../Form';
import Lista from '../Lista';
import MoreInfo from '../MoreInfo';
import SecondPage from "../SecondPage";

const LoginRouter = () => {
  return (
    <>
      <NavBar />
      <div className="divLoginRouter">
        <Routes>
          <Route path="/*" element={<SecondPage />}>
            <Route path="lista" element={<Lista />} />
          </Route>
          {/* <Route
            path={`:proprietario/:age/:id`}
            element={<MoreInfo />}
          /> */}
          <Route path="form" element={<Form />} />
          <Route path="createAccount" element={<CreateAccountForm />} />
        </Routes>
      </div>
    </>
  );
}

export default LoginRouter