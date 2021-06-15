import React from 'react'
import '../utils/css/Inicio.estilos.css'
import Ana from '../utils/images/foto.jpeg'

function Inicio () {
    return (
        <div className="Container_Inicio">
        <div className="Container_Texto">
         <h1> Ana Cárdenas</h1>
         <h2> ¿quién soy?</h2>
        <p> hola Soy Ana Briyid Cárdenas Bejarano tengo 17 años de edad y actualmente estoy estudiando un técnico en programación  y desarrollo web </p>
       </div>
       <img src={Ana} alt="hola esta es Ana"/>
        </div>

    )
}

export default Inicio