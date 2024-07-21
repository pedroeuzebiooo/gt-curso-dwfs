import { useState } from "react";

function App() {
  const [contador, adicionaAoContador] = useState(0);

  function incrementaAoContador() {
    adicionaAoContador(contador + 1);
  }

  return (
    <div>
      <button onClick={incrementaAoContador}>Clique aqui</button>
      <p>Você clicou no botão {contador} vezes</p>
    </div>
  );
}

export default App;
