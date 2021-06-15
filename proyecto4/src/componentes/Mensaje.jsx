import React from 'react'
import '../utils/css/Mensaje.estilos.css'
import frase from '../utils/images/3653.jpg'
import instagram from '../utils/images/instagram.png'
import facebook from '../utils/images/facebook.png'
import enviar from '../utils/images/dm.png'

function Mensaje () {
    return (
        <div className="Container_Mensaje">
        <div className="Container_Frase">
         <h1> Déjame tu mensaje</h1>
          <img id="princial" src={frase} />
        <p> Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Asperiores voluptates, repudiandae at, aperiam explicabo culpa numquam dicta, voluptatum porro, laboriosam alias maiores atque velit corporis molestias! Voluptates, repudiandae officia at.</p>
       </div>
       <div className="Container_formulario">
      <h2> Mis redes sociales</h2>
       <img id="inst" href="https://www.instagram.com/anabcardenasb/?hl=es-la" src={instagram} />
       <img id="face" href="https://www.facebook.com/profile.php?id=100005098847657" src={facebook} />
     <form >
    <p><input type="text" id="name" name="user_name"></input></p>
    <p><input type="email" id="mail" name="user_mail"></input></p>
    <p><textarea id="msg" name="user_message"></textarea></p>
</form>
<button className="boton-enviar"> <img src={enviar} /> </button>
      </div>
        </div>  

    )
}

export default Mensaje