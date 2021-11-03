import React,{useState, useEffect} from 'react'
import swal from 'sweetalert';
import {FullScreen,useFullScreenHandle} from "react-full-screen";


function Touch({ moveCurrentImgs }) {

    const handle = useFullScreenHandle();

    const [likeImgs, setLikeImgs] = useState([])

   

    const handleLikeCardClick = (img) => {
        setLikeImgs(img)
        // console.log('이미지를 클릭했군요!');
        swal({
          title:"찜 하셨습니다!!",
          text:"마이페이지에 저장되었습니다!",
          icon:"success",
          dangerMode: true,
        })
    };



if(!moveCurrentImgs){
    return '터치해주세염!!'
}


    if(moveCurrentImgs){
        return (
            <div>
                <h1>즐기셈</h1>
                <button onClick={handle.enter}>Enter fullscreen</button>
                <FullScreen  
                hight={'100%'}
                width={'100%'}
                handle={handle}>
                <video 
                width='100%'
                height='100%'
                autoPlay="autoPlay" 
                loop="loop" 
                className='thumbnail' 
                src={moveCurrentImgs.image} 
                alt='thumbnail' />
                <audio autoplay="autoplay" src={moveCurrentImgs.sound} type="audio/mpeg" ></audio>
                </FullScreen>
                <button onClick={handleLikeCardClick}>찜하기 입니당</button>
            </div>
        )
    }
}

export default Touch