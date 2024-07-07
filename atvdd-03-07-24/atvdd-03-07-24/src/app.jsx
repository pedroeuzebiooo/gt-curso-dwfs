import React from "react";
import { Header } from "./components/header";
import { ItemList } from "./components/item-list";
import { Footer } from "./components/footer";

const App = () => {
  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <div>
      <Header>
        <p>Subtítulo do Cabeçalho</p>
      </Header>
      <main>
        <ItemList items={items} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
