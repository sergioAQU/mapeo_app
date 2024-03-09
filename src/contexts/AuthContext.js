import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (email, password, rememberMe) => {
    // Implementar la lógica de inicio de sesión
    // Actualizar el estado de autenticación y usuario
  };

  const logout = () => {
    // Implementar la lógica de cierre de sesión
    // Restablecer el estado de autenticación y usuario
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};