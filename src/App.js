import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { crearUsuario, obtenerTodosLosUsuarios } from './localStorage/usuario';

function App() {
  

  const [state, setState] = useState({
    usuarios: [],
    identificador:  '',
    nombre: ''
  })

  useEffect(() => {
    
    obtenerTodosLosUsuarios()
    .then(usuarios => {
      setState({
        usuarios
      })
    })

  }, [])


  function añadirUsuario(){
    crearUsuario(state.identificador, {
      identificador: state.identificador, 
      nombre: state.nombre
    }).then(usuario => {
      let nuevoArreglo = state.usuarios
      nuevoArreglo.push(usuario)
      setState({
        ...state,
        usuarios: nuevoArreglo
      })
    })
  }

  function manejarCambio(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        <div>

          {state.usuarios.map(usuario => {
            return(
              <div style={{'display': 'flex'}}>
                <h5 style={{'margin': '10px'}}>Identificador </h5>
                <h5>{usuario.identificador}</h5>
                <h5 style={{'margin': '10px'}}>usuario </h5>
                <h5>{usuario.nombre}</h5>
              </div>
            )
          })}
        </div>

        <button onClick={añadirUsuario}>Añadir usuario al local storage</button>

        <input name="identificador" onChange={manejarCambio} value={state.identificador}/>
        <input name="nombre" onChange={manejarCambio} value={state.nombre}/>
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
