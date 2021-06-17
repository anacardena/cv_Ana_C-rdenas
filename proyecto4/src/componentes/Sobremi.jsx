import React from 'react'
import '../utils/css/Sobremi.estilos.css'

function Sobremi () {
    return (
        <div id="sobremi" className="Container_Sobremi">
        <div className="Container_Texto">
         <h1> Sobre mí</h1>
         <div id="parrafo"><p>  Tengo 17 años, soy bachiller egresada del Colegio General Gustavo Rojas Pinilla I.E.D.  
        En noveno grado me certifiqué en el programa Hermes de la cámara de comercio Bogotá como conciliadora.</p>
        <p> En el primer trimestre del 2021 me certifiqué en el SENA con el programa "Atenciones básicas a personas con afectación de Salud" y para el mes de agosto me certificaré como "Técnica en programación y desarrollo web front-end" en el instituto Kuepa.</p> </div>
       </div>
       <div className="cuadros">
       <div className="cuadro1">
       <h2> Pasatiempos</h2>
       <p> Me apasiona los instrumentos musicales por tal motivo se tocar algunos; en mis ratos libres me gusta leer, pintar, salir a caminar y hacer ejercicio. Me considero una persona muy artística, visual y lógica. </p> 
        </div>
        <div className="cuadro2">
       <h2> Mis habilidades blandas</h2>
       <ul> 
       <li>Comunicación efectiva</li>
       <li>Gestión de conflictos</li>
       <li>Manejo del estrés</li>
       <li>Servicio al cliente</li>
       <li>Narración:Comunicar lo que hago es vital para que se produzca la transformación digital.</li>
       </ul> 
        </div>
        </div> 
        </div>

    )
}

export default Sobremi