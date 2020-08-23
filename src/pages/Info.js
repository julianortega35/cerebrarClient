import React, { Component } from 'react'
import ReactPlayer from "react-player"


class Info extends Component {
  state

  render() {
    return (
      <div>
          <h1> Estrategias para regular pensamientos automáticos negativos</h1>

        
       
        <h2> Consejos</h2>
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
       
        <h2> Meditaciones guiadas</h2>
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


      

      </div>
    )
  }
}

export default Info;
