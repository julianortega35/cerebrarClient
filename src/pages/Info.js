import React, { Component } from 'react'
import ReactPlayer from "react-player"


class Info extends Component {
  state

  render() {
    return (
      <div>
          <h4> Estrategias para regular pensamientos automáticos negativos</h4>

        
       
        <h5> Consejos</h5>
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
       
        <h5> Meditaciones guiadas</h5>
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
