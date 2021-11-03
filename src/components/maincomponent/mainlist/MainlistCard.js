import React,{useState} from 'react'
import '../maincss/Maincom.css'



function MainlistCard({img,handleCardClick}) {



    const {picture} = img
    return (
        <div key={img.id}>
            <div className="project">
          <img className="project__img"  src={picture} alt={img.title} />
            <div className="project__description">
                <h3 className="imgtext">{img.title}</h3>
                <span className="imgtext">{img.content}</span>
                <div className="audio" >
                <audio controls src={img.sound} type="audio/mpeg" ></audio>
                <button className="main__btn" 
                onClick ={()=>{handleCardClick(img)}} 
                >Touch</button>
                </div>
            </div>
        </div>  
        </div>   
    )
}

export default MainlistCard