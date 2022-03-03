import React from 'react';
import logo from './logo.svg';
import './App.css';
import MiComponente from './components/MiComponente';
import SegundoComponente from './components/SegundoComponente';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos';
import Padre from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import {HooksUseState, HooksUserEffect, HookUseEffectReloj} from './components/hooks';
import AjaxHooks from './components/AjaxHooks';
import CustomHooks from './components/customHooks';
import Referencias from './components/Referencias';
import Formularios from './components/Formularios';
import Estilos from './components/stilos';
import ComponentesEstilizados from './components/ComponentesEstilizados';

/* Aqui se cargan todos los componentes de pruebas */

function App() {

  var estaciones = ["Primavera","Verano","Otoño","Invierno"];

  return (
    
    <div className="App">

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <ul>
          {estaciones.map((el,index)=>(
            <li key={index}>{el}</li>
          ))}
        </ul>

        <hr/>
     
        <section>  
          <MiComponente
            cadena 		      = "Esto es una cadena"
            numero 		      = {19}
            booleano  		  = {true}
            arreglo 		    = {[1,2,3]}
            objecto 		    = { { nombre:"Boris", correo:"boris@email.et"} }
            elementoReact 	= { <i> Ejemplo elemento </i> }
            elementoFuncion = { (num) => num * num }  
            pasoComponente  = {<SegundoComponente/>}  

          />
        </section>

        <hr/>

        <section>
              <Estado/>
        </section>

        <hr/>

        <section>
          <RenderizadoCondicional />
        </section>

        <hr/>
        
        <section>
          <RenderizadoElementos />
        </section>
        
        <hr/>

        <section>
          <EventosES6/>
        </section>
        
        <hr/>

        <section>
            <EventosES7/>   
        </section>

        <hr/>

        <section>
            <MasSobreEventos/>   
        </section>

        <hr/>

        <section>
            <Padre />
        </section>

        <hr/>

        <section>
          <CicloVida/>
        </section>
        
        <hr/>

        <section>
          <AjaxApis/>
        </section>

        <hr/>

        <section>
          <HooksUseState/>
        </section>
        
        <hr/>

        <section>
          <HooksUserEffect/>
        </section>

        <hr/>

        <section>
          <HookUseEffectReloj/>
        </section>
        
        <hr/>

        <section>
            <AjaxHooks/>
        </section>
        
        <hr/>

        <section>
            <CustomHooks />
        </section>

        <hr/>

        <section>
          <Referencias/>
        </section>
        
        <hr/>

        <section>
          <Formularios/>
        </section>
      </header>

      <Estilos/>

      <hr/>

      <ComponentesEstilizados/>

    </div>
  );
}

export default App;
