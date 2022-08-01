import React from "react";
import LoginForm from "../login/LoginForm";
import LoginHeader from "../login/LoginHeader";

function LoginPage(props){
  return(
    <div>
      <LoginHeader/>
      <LoginForm/>
    </div>
  );
}

export default LoginPage;