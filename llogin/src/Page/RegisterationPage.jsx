import React from "react";
import RegisterationForm from "../Registeration/RegisteratonForm";
import RegisterationHeader from "../Registeration/RegisterationHeader";

function RegisterationPage(props){
  return (
    <div>
      <RegisterationHeader/>
      <RegisterationForm/>
    </div>
  );
}

export default RegisterationPage;