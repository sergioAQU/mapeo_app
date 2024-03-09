import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import LoginForm from "../components/LoginForm";
import LoginGoogle from "../components/LoginGoogle";
import LoginAdmin from "../components/LoginAdmin";

const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = (email, password, rememberMe) => {
    // Implementar la lógica de inicio de sesión
    // Llamar a la función login proporcionada por AuthContext
    login(email, password, rememberMe);
  };

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <LoginForm onSubmit={handleLogin} />
      <LoginGoogle onSubmit={handleLogin} />
      <LoginAdmin onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;