import React, { Component } from 'react';
import './App.css';
import Boton from './components/boton/component'
import CardProyecto from './components/cardProyecto/component'
import NavBar from './components/navbar/component'
import Footer from './components/footer/component'
import CardDraft from './components/cardDraft/component'


class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar></NavBar>
          <CardProyecto tagTitle={'Ciudadanía'} title={'Terrenos fiscales'} dateCreated={'12/12/2018'} commentaryItems={9}/>
          <Boton>Guardar cambios</Boton>
          <Boton primary>Publicar proyecto</Boton>
          <CardDraft tagTitle={'Ciudadanía'} title={'Terrenos fiscales'} dateCreated={'12/12/2018'} ></CardDraft>
          <Footer></Footer>
      </div>
    );
  }
}

export default App;
