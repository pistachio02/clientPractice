import React from 'react'
import MovelistCard from './MovelistCard'

function MoveImglist({moveImgs, handleMoveCardClick}) {


    return (

<div>
<div className="test-back1">
<h1>원하는 이미지를 선택해주세요</h1>
<div className="test1">
{moveImgs && moveImgs.map((moveimg, idx) => <MovelistCard
handleMoveCardClick={handleMoveCardClick}
moveimg={moveimg} 
key={idx.id}/>)}
</div>
</div>
</div>




    )
}

export default MoveImglist
