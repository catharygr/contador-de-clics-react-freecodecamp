import './App.css'
import freCodecamp from './imagenes/freecodecamp-logo.png'
import Boton from './componentes/Boton'

function App() {

  const manejarClic = () => {
    console.log('clic')
  }

  const reiniciarContador = () => {
      console.log('Reiniciar')
  }
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freCodecamp}
          alt='Logo de freeCodecamp'
        />
      </div>
        <div className='contenedor-principal'>
    <Boton
      texto='Clic'
      esBotonDeClic={true}
      manejarClic={manejarClic} />

    <Boton
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador} />

        </div>
    </div>
  );
}

export default App;
