import { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      status: false
    }

    this.entrar = this.entrar.bind(this)
    this.sair = this.sair.bind(this)
  }

  entrar() {
    this.setState({ status: true })
  }

  sair() {
    this.setState({ status: false })
  }

  render() {
    return (
      <div>
        <h2>
          {this.state.status ?
            <div>
              <p>
                Bem-vindo ao sistema!
                <br />
                <button onClick={this.sair}>Sair</button>
              </p>
            </div> :
            <div>
              <p>
                Olá visitante, faça seu login!
                <br />
                <button onClick={this.entrar}>Entrar no sistema</button>
              </p>
            </div>
          }
        </h2>
      </div>
    )
  }
}

export default App