import React from 'react'
import '../utils/css/Mensaje.estilos.css'
import frase from '../utils/images/Salomon.jpg'

function Mensaje () {
    return (
        <div className="Container_Mensaje">
        <div className="Container_Frase">
         <h1> Déjame tu mensaje</h1>
          <img src={frase} />
        <p> Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Asperiores voluptates, repudiandae at, aperiam explicabo culpa numquam dicta, voluptatum porro, laboriosam alias maiores atque velit corporis molestias! Voluptates, repudiandae officia at.</p>
       </div>
       <div className="Container_formulario">
      <h2> Mis redes sociales</h2>
    /* <form action="/my-handling-form-page" method="post">
 <ul>
  <li>
    <label for="name">Nombre:</label>
    <input type="text" id="name" name="user_name">
  </li>
  <li>
    <label for="mail">Correo electrónico:</label>
    <input type="email" id="mail" name="user_mail">
  </li>
  <li>
    <label for="msg">Mensaje:</label>
    <textarea id="msg" name="user_message"></textarea>
  </li>
 </ul>
</form>
      </div>*/
        </div>

    )
}

export default Mensaje