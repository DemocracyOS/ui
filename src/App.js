import React, { Component } from 'react';
import './App.css';
import Boton from './components/boton/component'
import CardProyecto from './components/cardProyecto/component'


class App extends Component {
  render() {
    return (
      <div className="App">
          <CardProyecto tagTitle={'Ciudadanía'} title={'Terrenos fiscales'} dateCreated={'12/12/2018'} commentaryItems={9}/>
          <Boton>Guardar cambios</Boton>
          <Boton primary>Publicar proyecto</Boton>
      </div>
    );
  }
}

export default App;
