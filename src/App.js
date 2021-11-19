import logo from './logo.svg';
import Calculadora from './Calculadora';
import './App.css';
import React, {useState, useRef} from 'react';

function App() {
  const [nombre, setNombre] = useState("predeterminado");
  let txtNombre;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola {nombre}
        </p>

        <input className="texto" type="text" id="txtNombre" ref={txtNombre}/>
        <button className="boton" onClick={ ()=> { setNombre(document.getElementById('txtNombre').value);}}>Saludar</button>
        <Calculadora numero1="3" numero2="4"/>
        <Calculadora numero1="1" numero2="12"/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
