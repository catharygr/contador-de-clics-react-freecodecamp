import './App.css'
import freCodecamp from './imagenes/freecodecamp-logo.png'

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freCodecamp}
          alt='Logo de freeCodecamp'
        />
      </div>
        <div className='contenedor-principal'></div>
    </div>
  );
}

export default App;
