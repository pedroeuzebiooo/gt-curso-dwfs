import React from "react";

export const Header = ({ children }) => {
  return (
    <header>
      <h1>Bem-vindo ao Meu Projeto React</h1>
      {children}
    </header>
  );
};
