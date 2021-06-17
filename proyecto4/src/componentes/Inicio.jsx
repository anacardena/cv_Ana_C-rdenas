import React from 'react'
import '../utils/css/Inicio.estilos.css'
import sakura from '../utils/images/icons8-sakura-48.png'
import instagram from '../utils/images/instagram.png'
import facebook from '../utils/images/facebook.png'
import git from '../utils/images/icons8-github-64.png'
import linke from '../utils/images/icons8-linkedin-64.png'
function Inicio () {
    return (
        <div className="Container_Inicio">
    {/*menú*/}
        <div className="enlaces_internos">
        <a href="https://designificados.com/flor-de-cerezo/#:~:text=La%20flor%20de%20cerezo%20es,ca%C3%ADdos%20cuando%20comienza%20la%20primavera."><img id="sakura" src={sakura}/></a>
        <li><a href="#sobremi" class="link">Sobre mí</a> </li>
        <li><a href="#habilidades" class="link">Habilidades</a></li> 
        <li> <a href="#contacto" class="link">Contacto</a> </li>
        </div>
          {/*información y redes*/}
        <div className="Container_Texto">
        <h1> Ana Cárdenas</h1>
         <h2> ¿quién soy?</h2>
        <div id="parrafo"><p> Hola Soy Ana Briyid Cárdenas Bejarano tengo 17 años de edad y actualmente estoy estudiando un técnico en programación  y desarrollo web en el instituto Kuepa. </p></div>
       <div id="enlaces">
       <a href="https://www.instagram.com/anabcardenasb/?hl=es-la"><img id="inst"  src={instagram} /> </a>
      <a href="https://www.facebook.com/profile.php?id=100005098847657"><img id="face" src={facebook} /> </a>
      <a href="https://github.com/anacardena?tab=repositories"><img id="git" src={git} /> </a>
      <a href="https://www.linkedin.com/in/ana-briyid-cardenas-b-6437a5208/"><img id="linke" src={linke} /> </a>
    </div>
       </div>
        </div>

    )
}

export default Inicio