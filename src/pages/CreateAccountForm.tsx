import React from 'react'
import { Link } from 'react-router-dom';
import FormBox from '../layout/FormBox';
import Input from '../layout/Input';

const CreateAccountForm = () => {

 const handleSubmit = (event: any) => {
   event.preventDefault();
   const first = event.target.Name.value;
   const email = event.target.Email.value;
   const password = event.target.Password.value;
   const mix = [first, email, password];
   console.log(`datos utente Formulario Create Account: ${first} ${email} ${password}`);
   console.log(mix);
 };


  return (
    <>
      <div className="divCentrarElemento">
        <FormBox className={"divFormLayout"} textoH2={"Crea tu perfil"}>
          <form onSubmit={handleSubmit}>
            <br />
            <Input
              pl={"Escribe tu nombre.."}
              className={"inputForm"}
              type={"text"}
              name={"Name"}
            />{" "}
            <i className="bi bi-person"></i>
            <br />
            <Input
              pl={"Escribe tu Email.."}
              className={"inputForm"}
              type={"email"}
              name={"Email"}
            />{" "}
            <i className="bi bi-envelope-paper"></i>
            <br />
            <Input
              pl={"Crea una password.."}
              className={"inputForm"}
              type={"password"}
              name={"Password"}
            />{" "}
            <i className="bi bi-key"></i>
            <br />
            <button className=" m-2 btn btn-primary rounded-pill p-3 mt-5">
              click
            </button>
            <Link className="linkFormulario" to={"/login/form"}>
              ¿Ya tienes un perfil?
            </Link>
          </form>
        </FormBox>
      </div>
    </>
  );
}

export default CreateAccountForm







        // <label> Nombre: &nbsp;</label>

        // <label> Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
