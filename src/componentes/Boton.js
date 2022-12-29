import React from 'react'

export default function Boton({ texto, esBotonDeClic, manejarClic}) {
  return(
    <button 
    className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={manejarClic}>
      {texto}
    </button>
  )
}