import React from 'react'
import { Link } from 'react-router-dom';
import FormBox from '../layout/FormBox';
import Input from '../layout/Input';
//
import { FC } from "react";
import { useForm } from "../Hooks/useForm";

//

interface User {
  name: string;
  email: string;
  password: string;
}
//



const CreateAccountForm = () => {
//*
 const {
   handleSubmit,
   handleChange,
   data: user,
   setData,
   errors,
 } = useForm<User>({
   validations: {
     name: {
       pattern: {
         value: "^[A-Za-z]*$",
         message:
           "It isn't allowed to use special characters or numbers fot the name.",
       },
     },
    
     password: {
       custom: {
         isValid: (value) => value.length > 5,
         message: "The password needs to be at least 6 characters long.",
       },
     },
   },
   onSubmit: () => {alert("User submitted!")
  console.log(`datos utente Formulario Create Account: ${user.name} - ${user.email} `);
  // setData((prev) => ({ ...prev, [user.name]: user.name }));
}
 });
//*

//  const HandleSubmit = (event: any) => {
//    event.preventDefault();
//    const first = event.target.name.value;
//    const email = event.target.email.value;
//    const password = event.target.password.value;
//    const mix = [first, email, password];
//    console.log(`datos utente Formulario Create Account: ${first} ${email} ${password}`);
//    console.log(mix);
//  };



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
              name={"name"}
              value={user.name }
              onCh={handleChange("name")}
            />{" "}
            <i className="bi bi-person"></i>
            {errors.name && <p className="error">{errors.name}</p>}
            <br />
            <Input
              pl={"Escribe tu Email.."}
              className={"inputForm"}
              type={"email"}
              name={"email"}
              autoComplete={"username"}
              value={user.email }
              onCh={handleChange("email")}
            />{" "}
            <i className="bi bi-envelope-paper"></i>
            <br />
            <Input
              pl={"Crea una password.."}
              className={"inputForm"}
              type={"password"}
              name={"password"}
              autoComplete={"current-password"}
              value={user.password }
              onCh={handleChange("password")}
            />{" "}
            <i className="bi bi-key"></i>
            {errors.password && <p className="error">{errors.password}</p>}
            <br />
            <button
              // onClick={HandleSubmit}
              className=" m-2 btn btn-primary rounded-pill p-3 mt-5"
            >
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
