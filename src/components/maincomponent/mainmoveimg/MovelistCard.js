import React from 'react'
import '../maincss/Movecss.css'

function MovelistCard({moveimg,handleMoveCardClick}) {
    
    const {image} = moveimg
    return (
        <div key={moveimg.id}>
            <div className="project1">
          <video className="project__img1" 
          autoPlay="autoPlay" 
          loop="loop" 
          src={image} alt={moveimg.title} />
            <div className="project__description1">
                <h3 className="imgtext1">{moveimg.title}</h3>
                <span className="imgtext1">{moveimg.content}</span>
                <div className="audio1" >
                <audio controls src={moveimg.sound} type="audio/mpeg" ></audio>
                <div>
                <button className="main__btn1" 
                onClick ={()=>{handleMoveCardClick(moveimg)}} 
                >Touch</button>
                </div>
                </div>
            </div>
        </div>  
        </div>  
    )
}

export default MovelistCard
