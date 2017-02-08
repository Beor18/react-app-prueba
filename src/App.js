import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="App-fondo">
          <figure>
            <img className="media-object" width="30%" src={`http://produccionesbw.com.ar/assets/img/bg.png`} />
          </figure>
          
        </section>

         <div className="desktop-menu">
          <nav id="desktop-menu" class="hidden-sm hidden-xs"> 
            <ul> 
            <li class=""><a href="#home">INICIO</a></li> 
            <li class="current_menu_item"><a href="#about-us">NOSOTROS</a></li> 
            <li><a href="#team">STAFF</a></li> 
            <li><a href="#portfolio">PORTFOLIO</a></li> 
            <li><a href="#contact">CONTACTO</a></li> 
            </ul> 
          </nav>
        </div>
        <div className="container App-intro">
          <h1>NOSOTROS</h1>
          <p className="App-texto">Somos una productora joven relacionado en el ámbito del desarrollo web, formado en el año 2011.</p> 
          <p>Los trabajos que nos piden lo tomamos con SERIEDAD, COMPROMISO Y RESPETO hacia nuestros clientes.</p>
          <h3>PENSAMOS EN SU FUTURO ONLINE</h3>

          <figure>
            <img className="media-object" width="40%" src={`http://produccionesbw.com.ar/assets/img/devices.png`} />
          </figure>
        </div>
        <footer>
          <div className="App-footer">
            <p>Esto es un footer</p>
            <p><strong>- Realizado por Fernando Lopez 2017 -</strong></p>
          </div>
        </footer>
      </div>

    );
  }
}

export default App;
