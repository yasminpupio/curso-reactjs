import { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hora: '00:00:00'
    }
  }

  // Executa uma vez após o componente ser montado no DOM 
  componentDidMount() {
    setInterval(() => {
      let hora = new Date().toLocaleTimeString()
      this.setState({ hora: hora })
    }, 1000)
  }

  // Executa após o componente atualizar (estado ou props mudarem) 
  componentDidUpdate() {
    console.log('Atualizou!')
  }

  render() {
    return (
      <div>
        <h1>Meu Projeto {this.state.hora} PM</h1>
      </div>
    )
  }
}

export default App