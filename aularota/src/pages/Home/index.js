import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Bem vindo a página HOME</h1>
      <span>Yasmin</span>
      <br /> <br />

      <Link to='/sobre'>Sobre</Link> <br />
      <Link to='/contato'>Contato</Link> <br />
      <hr />
      <Link to='/produto/12345'>Acessar Produto 12453</Link> <br />
    </div>
  );
}

export default Home;
