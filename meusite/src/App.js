const BemVindo = (props) => {
  return (
    <div>
      <h2>Bem-vindo(a) {props.nome}</h2>
      <h3>Tenho {props.idade} anos</h3>
    </div>
  )
}

function App() {
  return (
    <div>
      Olá mundo!
      <BemVindo nome='Yasmin' idade='21' />
      <BemVindo nome='Lucas' idade='10'/>
    </div>
  )
}

export default App