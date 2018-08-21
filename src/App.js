import React, { Component } from 'react';
import './App.css';
import Boton from './components/boton/component'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Boton>Guardar cambios</Boton>
          <Boton primary>Publicar proyecto</Boton>

      </div>
    );
  }
}

export default App;
