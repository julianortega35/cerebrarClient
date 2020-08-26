import React, { Component} from 'react'
import ReactPlayer from "react-player"
// import {Link} from "react-router-dom";


class Info extends Component {
  state

  render() {

    return (
      <div>
          <h2 className="h2-style"> Estrategias para regular pensamientos automáticos negativos</h2>

        
       
        <h5 className="headings-style"> Consejos</h5>
        <div className="video-size">
        <div className="video-position">
          <ReactPlayer width={200} height={200}
        url="https://www.youtube.com/watch?v=G7YvPl0J3UY"
      />
      </div>
    
      <div className="video-position"> 
        <ReactPlayer width={200} height={200}
        url="https://www.youtube.com/watch?v=1eZepcg6aC0"
      />
      </div>
      </div>
       
        <h5 className="headings-style"> Meditaciones guiadas</h5>
        <div className="video-size">
     
        <div className="video-position">
          <ReactPlayer  width={200} height={200}
        url="https://www.youtube.com/watch?v=6VKi0StcOxI"
      />
      </div>

      <div className="video-position"> 
        <ReactPlayer  width={200} height={200}
        url="https://www.youtube.com/watch?v=o-X-F-MXLrA"
      />
      </div>
      </div>


      <h5 className="headings-style">Enlaces de interés</h5>
      <div>




      <div className="info-links-style">
      <a  className="info-links-style" target="_blank" href="https://psicopedia.org/wp-content/uploads/2013/06/Reestructuracion-Cognitiva-paso-a-apso.pdf">Guía sobre Reestructuración cognitiva</a>
      </div>

      <div className="info-links-style">
      <a className="info-links-style" target="_blank" href="https://www.uptituddigital.com/pensamientos-negativos/#La_importancia_de_conocerse_para_superar_el_pesimismo">Cómo evitar pensamientos negativos</a>
      </div>

      <div className="info-links-style">
      <a className="info-links-style" target="_blank" href="http://www.asapar.com/descargas/mindfulness_02.pdf">Mindfulness para principiantes (Libro)</a>
      </div>
      </div>


      

      </div>
    )
  }
}

export default Info;
