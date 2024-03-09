import React from "react";
import { AuthContext } from "../contexts/AuthContext";

const LoginGoogle = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login("google", null, "google");
  };

  return (
    <button onClick={handleLogin}>
      Iniciar sesión con Google
    </button>
  );
};

export default LoginGoogle;