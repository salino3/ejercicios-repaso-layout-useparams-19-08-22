import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {

   const navigate = useNavigate();


   const handleNavigateBack = () => {
     navigate(-1);
   };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark  ">
        <h5 className="nav-item">
          <Link className="  text-white nav-link" to="/login">
            Home
          </Link>
        </h5>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav center mx-5 ">
            <li className="nav-item active ">
              <Link className="nav-link" to="/onlycoches">
                Sólo coches
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/onlymotos">
                Sólo Motos
              </Link>
            </li>

          </ul>
        </div>
        <button
          onClick={handleNavigateBack}
          className="btn btn-outline-primary mx-3"
        >
          Regresar
        </button>
      </nav>
    </>
  );
}

export default NavBar