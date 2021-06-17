import React from 'react'
import '../utils/css/Habilidades.estilos.css'
import html from '../utils/images/html5.jpg'
import java from '../utils/images/js.png'
import css from '../utils/images/css3.png'

function Habilidades () {
    return (
    
        <div id="habilidades" className="Container_Habilidades">
        {/*este es el contenedor texto al lado izquierdo*/}
        <div className="Container_Texto">
         <h1> Mis habilidades como desarrolladora</h1>
        <p> Con respecto a mi formación y trabajo me dedico a la interfaz desde el punto de vista del código para que el usuario pueda interactuar con un sistema.
        Además de esto trabajo con aspectos de diseño visual o experiencia de usuario para interpretar y traducir los diseños a código.</p>
        <p>Mi responsabilidad como desarrolladora  front-end está en traducir el diseño, lograr una interfaz de usuario accesible y asegurar la correcta usabilidad del sistema permitiendo así  que estos medios digitales puedan ser óptimos.
Con la disposición de crecer en mi vida Laboral y fortalecer mi habilidades  personales y sociales.</p>
       <p>     
         Tengo habilidades en:
         <ul>
	<li>Diseño visual</li>
	<li>Uso de herramientas de diseño visual</li>
	<li>Diseño de Experiencia de Usuarios</li>
	<li>Manejo de frameworks   (react js)</li>
	</ul>
	    </p>
       </div>

       {/*este es el contenedor texto al de la columna derecha*/}
       <div id="imagenes">
       <h3>Actualmente  utilizo diferentes lenguajes de programación:</h3>
       {/*este es el contenedor texto al de la pimera imagen*/}
       <div class="box">
       <img src={html} />
       <div class="hover">
       <h2>HTML (hyperText Markup Language)</h2>
       </div>
       </div>
       {/*este es el contenedor texto al de la segunda imagen*/}
       <div class="box">
       <img src={css} />
       <div class="hover">
       <h2> CSS (cascading style sheets)</h2>
       </div>
       </div>
       {/*este es el contenedor texto al de la tercera imagen*/}
       <div class="box">
       <img src={java} />
       <div class="hover">
       <h2>JavaScript</h2>
       </div>
       </div>
       </div>
   {/*este es el contenedor para el otro párrafo*
        */}
        </div>     
        

    )
}

export default Habilidades