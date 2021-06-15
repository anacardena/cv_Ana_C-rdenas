import React from 'react'
import '../utils/css/Mensaje.estilos.css'
import frase from '../utils/images/flores.png'
import instagram from '../utils/images/instagram.png'
import facebook from '../utils/images/facebook.png'
import enviar from '../utils/images/dm.png'

function Mensaje () {
    return (
        <div className="Container_Mensaje">
        <div className="Container_Frase">
         <h1> Déjame tu mensaje</h1>
          <img id="principal" src={frase} />
        <p> Dirigido a todos l@s programadore/as ."No te preocupes si no funciona bien. Si todo estuviera correcto, serías despedido de tu trabajo"
-- Ley de Mosher de la Ingeniería del Software</p>
       </div>
       <div className="Container_formulario">
      <h2> Mis redes sociales</h2>
       <img id="inst" href="https://www.instagram.com/anabcardenasb/?hl=es-la" src={instagram} />
       <img id="face" href="https://www.facebook.com/profile.php?id=100005098847657" src={facebook} />
     <form >
    <p><input type="text" id="name" name="user_name" placeholder="Escribe tu nombre"></input></p>
    <p><input type="email" id="mail" name="user_mail" placeholder="Escribe tu correo"></input></p>
    <p><textarea id="msg" name="user_message"placeholder="Escribe tu mensaje"></textarea></p>
<button>
  <img src={enviar} /> 
</button> 
</form>

      </div>
        </div>  

    )
}

export default Mensaje