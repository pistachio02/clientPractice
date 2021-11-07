import React from 'react'
import MovelistCard from './MovelistCard'

function MoveImglist({moveImgs,moveCurrentImgs, handleMoveCardClick}) {

    return (

<div>
<div className="test-back1">
<div></div>
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