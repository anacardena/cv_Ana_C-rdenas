import React from 'react'
import '../utils/css/Sobremi.estilos.css'

function Sobremi () {
    return (
        <div className="Container_Sobremi">
        <div className="Container_Texto">
         <h1> Sobre mí</h1>
         <p> actualmente tengo 17 años, soy bachiller egresada del Colegio General Gustavo Rojas Pinilla I.E.D  </p>
        <p> En noveno grado me certifiqué en el programa Hermes de la cámara de comercio Bogotá como conciliadora</p>
       </div>
       <div className="cuadros">
       <div className="cuadro1">
       <h2> Pasatiempos</h2>
       <p> Me apasiona los instrumentos musicales por tal motivo se tocar algunos, en mis ratos libres me gusta leer, pintar, salir a caminar y hacer ejercicio. Me considero una persona muy artística </p> 
        </div>
        <div className="cuadro2">
       <h3> Mis habilidades blandas</h3>
       <ul> 
       <li>Soy una persona capaz de relacionarse y comunicarse de manera efectiva con otros.</li>
       <li>Gestión de conflictos</li>
       <li>Manejo del estrés</li>
       <li>Servicio al cliente</li>
       <li>Narración:Comunicar lo que hago es vital para que se produzca la transformación digital</li>
       </ul> 
        </div>
        </div>
        </div>

    )
}

export default Sobremi