import { Component } from "react";
import Membro from "./components/membro";

class App extends Component {

  render(){
    return(
      <div>
        <Membro nome='Visitante'/> 
      </div>
    )
  }
}

export default App