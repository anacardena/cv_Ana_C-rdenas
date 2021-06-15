import React from 'react'
import '../utils/css/Habilidades.estilos.css'
import html from '../utils/images/html5.jpg'
import java from '../utils/images/js.jpg'
import css from '../utils/images/css.jpg.crdownload'

function Habilidades () {
    return (
        <div className="Container_Habilidades">
        <div className="Container_Texto">
         <h1> Mis habilidades como desarrolladora</h1>
        <p> Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Asperiores voluptates, repudiandae at, aperiam explicabo culpa numquam dicta, voluptatum porro, laboriosam alias maiores atque velit corporis molestias! Voluptates, repudiandae officia at.</p>
       </div>
       <img src={html} />
          <img src={java} />
             <img src={css} />
        </div>

    )
}

export default Habilidades