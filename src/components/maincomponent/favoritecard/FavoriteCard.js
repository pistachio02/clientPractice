import React,{useState,useEffect} from 'react'



function FavoriteCard({likeCard,handleDelete}) {

  // console.log('card',likeCard)

    const {image} = likeCard
    return (
        <div key={likeCard.id}>
        <div className="project1">
      <video className="project__img1" 
      // autoPlay="autoPlay" 
      // loop="loop" 
      src={image} alt={likeCard.title} />
        <div className="project__description1">
            <h3 className="imgtext1">{likeCard.title}</h3>
            <span className="imgtext1">{likeCard.content}</span>
            <div className="audio1" >
            <audio controls src={likeCard.sound} type="audio/mpeg" ></audio>
            <div>
            <button className="main__btn1" 
            onClick={()=> handleDelete(likeCard.id)}
            >삭제하기</button>
            </div>
            </div>
        </div>
    </div>  
    </div>  
    )
}

export default FavoriteCard
