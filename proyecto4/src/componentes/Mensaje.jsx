import React from 'react'
import '../utils/css/Mensaje.estilos.css'
import frase from '../utils/images/flores.png'
import instagram from '../utils/images/instagram.png'
import facebook from '../utils/images/facebook.png'
import enviar from '../utils/images/dm.png'
import git from '../utils/images/icons8-github-64.png'
import linke from '../utils/images/icons8-linkedin-64.png'
function Mensaje () {
    return (
        <div id="contacto" className="Container_Mensaje">
        <div className="Container_Frase">
         <h1> Déjame tu mensaje</h1>
          <img id="principal" src={frase} />
        <p> Dirigido a todos l@s programadore/as ."No te preocupes si no funciona bien. Si todo estuviera correcto, serías despedido de tu trabajo"
-- Ley de Mosher de la Ingeniería del Software</p>
       </div>
       <div className="Container_formulario">
      <h2> Mis redes sociales</h2>
       <a href="https://www.instagram.com/anabcardenasb/?hl=es-la"><img id="inst"  src={instagram} /></a>
      <a href="https://www.facebook.com/profile.php?id=100005098847657"> <img id="face"  src={facebook} /> </a>
       <a href="https://www.linkedin.com/in/ana-briyid-cardenas-b-6437a5208/"><img id="linke" src={linke} /> </a>
      <a href="https://github.com/anacardena?tab=repositories"> <img id="git"  src={git} /> </a>
     <form  action="mailto:abcardenasb@gmail.com" method="post" enctype="text/plain" >
    <p><input type="text" id="name" name="user_name" placeholder="Escribe tu nombre"></input></p>
    <p><input type="email" id="mail" name="user_mail" placeholder="Escribe tu correo"></input></p>
    <p><textarea id="msg" name="user_message"placeholder="Escribe tu mensaje"></textarea></p>
<button className="boton" type="submit">
  <img src={enviar} /> 
</button> 
</form>

      </div>
        </div>  

    )
}

export default Mensaje