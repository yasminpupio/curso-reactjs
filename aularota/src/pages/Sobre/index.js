import { Link } from "react-router-dom";

function Sobre() {
  return (
    <div>
      <h1>Bem vindo a página SOBRE</h1>
      <br /> <br />

      <Link to='/'>Home</Link> <br />
      <Link to='/contato'>Contato</Link> <br />
      <Link to='/produto'>Produto</Link> <br />
    </div>
  );
}

export default Sobre;
