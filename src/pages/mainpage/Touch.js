import React,{useState, useEffect} from 'react'
import swal from 'sweetalert';
import {FullScreen,useFullScreenHandle} from "react-full-screen";
import MainIsLogin from './MainIsLogin';
import axios from 'axios'


function Touch({moveImgs,isLogin}) {

    const handle = useFullScreenHandle();
   

    const handleLikeCardClick = () => {
      const healing_id = moveImgs.id

      axios
          .post('https://localhost:4000/zzim', {healing_id}, {withCredentials: true})
          .then((res) => {
            if(res.data.message === "Zzim Successfully Added!"){
              swal({
                title:"찜 하셨습니다!!",
                text:"마이페이지에 저장되었습니다!",
                icon:"success",
                dangerMode: true,
              })
            } else if(res.data === "Already Added to Zzim!"){
              swal({
                title:"바보야",
                text:"이미 찜 되어 있습니다!",
                dangerMode: true,
              })
            }
          })
      };

        return !isLogin?<MainIsLogin 
       
        />
        :(
            <div>
              <div>gdgd</div>
                <h1>즐기셈</h1>
                <button onClick={handle.enter}>Enter fullscreen</button>
                <button onClick={handleLikeCardClick}>찜하기 입니당</button>
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
                src={moveImgs.image} 
                alt='thumbnail' />
                <audio /*autoplay="autoplay"*/ src={moveImgs.sound} type="audio/mpeg" ></audio>
                </FullScreen>
            </div>
         )
} 


export default Touch

