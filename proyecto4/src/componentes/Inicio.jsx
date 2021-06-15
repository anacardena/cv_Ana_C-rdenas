import React from 'react'
import '../utils/css/Inicio.estilos.css'
import Ana from '../utils/images/foto.jpeg'
import sakura from '../utils/images/icons8-sakura-48.png'
import instagram from '../utils/images/instagram.png'
import facebook from '../utils/images/facebook.png'
function Inicio () {
    return (
        <div className="Container_Inicio">
        <img id="sakura" src={sakura}/>
        <img src={Ana} alt="hola esta es Ana"/>
        <div className="Container_Texto">
        <h1> Ana Cárdenas</h1>
         <h2> ¿quién soy?</h2>
        <p> Hola Soy Ana Briyid Cárdenas Bejarano tengo 17 años de edad y actualmente estoy estudiando un técnico en programación  y desarrollo web en el instituto Kuepa </p>
       <a href="https://www.instagram.com/anabcardenasb/?hl=es-la"><img id="inst"  src={instagram} /> </a>
      <a href="https://www.facebook.com/profile.php?id=100005098847657"><img id="face" src={facebook} /> </a>
       </div>
        </div>

    )
}

export default Inicio