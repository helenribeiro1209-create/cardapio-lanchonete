import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { Card } from "./components/ProductCard";

function App() {
  return (
    <>
      <h1>Projeto Inicial React com Vite</h1>

      <Card
        name={"X-Burguer"}
        price={24.9}
        description={"Pão, hambúrguer de 120 g, queijo e molho da casa."}
      />

      <Card name={"Coca-cola"} price={9.9} description={"2 Litros"} />

      <Card
        name={"Combo X-Burguer"}
        price={54.99}
        description={"Ideal para duas pessoas... depende da sua fome!"}
      />

      <Card
        name={"X-Baicon"}
        price={29.9}
        description={"Pão, hambúrguer de 120 g, baicon e queijo e molho da casa."}
      />
    </>
  );
}

export default App;
