import React from 'react'
import { Link } from 'react-router-dom';
import FormBox from '../layout/FormBox';
import Input from '../layout/Input';

const Form = () => {

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const first = event.target.Name.value;
    const email = event.target.Email.value;
    const password = event.target.Password.value;
    const mix = [first, email, password];
    console.log(`datos utente Formulario Login: ${first} ${email} ${password}`);
    console.log(mix);
    alert("Usuario logueado!")
  };

  return (
    <>
      <div className="divCentrarElemento">
        <FormBox className={"divFormLayout"} textoH2={"Formulario Login"}>
          <form onSubmit={handleSubmit}>
            <br />
            <label> Nombre: &nbsp;&nbsp; </label>
            <i className="bi bi-person"></i>
            <Input
              pl={"Escribe tu nombre.."}
              className={"inputForm"}
              type={"text"}
              name={"Name"}
            />{" "}
            <br />
            <label> Email: &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-envelope-open"
              viewBox="0 0 16 16"
            >
              <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z" />
            </svg>
            <Input
              pl={"Escribe tu Email.."}
              className={"inputForm"}
              type={"email"}
              name={"Email"}
              autoComplete={"username"}
            />{" "}
            <br />
            <label>Password: &nbsp;</label>
            <i className="bi bi-key"></i>
            <Input
              pl={"Escribe tu password.."}
              className={"inputForm"}
              type={"password"}
              name={"Password"}
              autoComplete={"current-password"}
            />
            <br />
            <div className="divAbajoLogin">
              <button className=" m-2 btn btn-primary rounded-pill p-3 mt-5">
                click
              </button>
              <Link className="linkFormulario" to={"/login/createAccount"}>
                ¿Todavía no tienes un perfil?
              </Link>
            </div>
          </form>
        </FormBox>
      </div>
    </>
  );
}

export default Form