"use client";

import { useState } from "react";

export function ButtonPage() {
  const [nome, setNome] = useState("Guinho");

  function handlerChangedName() {
    setNome("Henrique");
  }

  return (
    <div>
      <button onClick={handlerChangedName}>Alterar Nome</button>
      <h3>Nome: {nome}</h3>
    </div>
  );
}
