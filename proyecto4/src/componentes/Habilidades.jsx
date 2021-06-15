import React from 'react'
import '../utils/css/Habilidades.estilos.css'
import html from '../utils/images/html5.jpg'
import java from '../utils/images/js.jpg'
import css from '../utils/images/css3.png'

function Habilidades () {
    return (
        <div className="Container_Habilidades">
        <div className="Container_Texto">
         <h1> Mis habilidades como desarrolladora</h1>
        <p> Con respecto a mi formación y trabajo me dedico a la interfaz desde el punto de vista del código para que el usuario pueda interactuar con un sistema.
        Además de esto trabajo con aspectos de diseño visual o experiencia de usuario para interpretar y traducir los diseños a código.</p>
       </div>
       <img src={html} />
          <img src={java} />
             <img src={css} />
        </div>

    )
}

export default Habilidades