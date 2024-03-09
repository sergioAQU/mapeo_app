import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const DashboardPage = () => {
  const { logout, isAuthenticated, user } = useContext(AuthContext);

  return (
    <div>
      {isAuthenticated ? (
        <>
          <h1>Bienvenido, {user.email}!</h1>
          <button onClick={logout}>Cerrar sesión</button>
        </>
      ) : (
        <p>Inicia sesión para acceder al dashboard.</p>
      )}
    </div>
  );
};

export default DashboardPage;