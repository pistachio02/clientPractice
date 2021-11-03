import React from 'react'
import '../maincss/Maincom.css'
import MainlistCard from './MainlistCard'



function Mainlist({imgs, handleCardClick}) {

    //console.log(imgs)
    return (
        <div>
        
        <div className="test-back">
        <h1>원하는 이미지를 선택해주세요</h1>
        <div className="test">
        {imgs && imgs.map((img, idx) => <MainlistCard
        handleCardClick={handleCardClick}
        img={img} 
        key={idx.id}/>)}
        </div>
        </div>
        </div>
    )
}



export default Mainlist
