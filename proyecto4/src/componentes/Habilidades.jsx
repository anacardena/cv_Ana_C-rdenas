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
        <p>Mi responsabilidad como desarrolladora  front-end está en traducir el diseño, lograr una interfaz de usuario accesible y asegurar la correcta usabilidad del sistema permitiendo así  que estos medios digitales puedan ser óptimos.
Con la disposición de crecer en mi vida Laboral y fortalecer mi habilidades  personales y sociales.</p>

       </div>
       <div id="imagenes">
       <p>Actualmente  utilizo diferentes lenguajes de programación:
       <ul>
       <li>HTML (hyperText Markup Language)</li>
        <li>CSS (cascading style sheets)</li>
        <li>JavaScript</li>
        </ul>
        </p>
       <img src={html} />
          <img src={java} />
             <img src={css} />
        <p>     
       <ul> También tengo habilidades en:
	<li>Diseño visual</li>
	<li>Uso de herramientas de diseño visual</li>
	<li>Diseño de Experiencia de Usuarios</li>
	<li>Manejo de frameworks   (react js)</li>
	</ul>
     </p>
     
        </div>     
        </div>

    )
}

export default Habilidades