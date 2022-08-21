import React from "react";
import LoginForm from "../components/login/LoginForm";
import LoginHeader from "../components/login/LoginHeader";

const LoginPage: React.FC = () => {
  return (
    <div>
      <LoginHeader />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
