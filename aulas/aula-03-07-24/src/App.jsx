import { Header } from "./components/header";
import { Section } from "./components/section";

function App() {
  return (
    <div>
      <Header />

      <main>
        <Section titulo="Início" paragrafo="Texto 1..." />

        <Section titulo="Sobre" paragrafo="Texto 2..." />

        <Section titulo="Contato" paragrafo="Texto 3..." />
      </main>
    </div>
  );
}

export default App;
