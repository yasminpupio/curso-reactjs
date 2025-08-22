import { Component } from "react";
import './style.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numero: 0,
      botao: 'INICIAR'
    }

    this.timer = null;
    this.iniciar = this.iniciar.bind(this)
    this.limpar = this.limpar.bind(this)
  }

  iniciar() {
    let state = this.state

    if (this.timer != null) {
      clearInterval(this.timer)
      this.timer = null
      this.state.botao = 'INICIAR'
    } else {
      this.timer = setInterval(() => {
        state.numero += 0.1
        this.setState(state)
      }, 100)
      this.state.botao = 'PAUSAR'
    }

    this.setState(state)
  }

  limpar() {
    let state = this.state

    if (this.timer != null) { 
      clearInterval(this.timer)
      this.timer = null
    }

    state.numero = 0
    state.botao = 'INICIAR'
    this.setState(state)
  }

  render() {
    return (
      <div className="container">
        <img src={require('./assets/cronometro.png')} className="img"></img>
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="botao" onClick={this.iniciar}>{this.state.botao}</a>
          <a className="botao" onClick={this.limpar}>LIMPAR</a>
        </div>
      </div>
    )
  }
}

export default App