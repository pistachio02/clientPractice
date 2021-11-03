import React,{useEffect, useState} from 'react'
import MoveImglist from '../../components/maincomponent/mainmoveimg/MoveImglist'
import Loading from '../LoadingPage'
import axios from 'axios'
import swal from 'sweetalert'

function MoveImgList({moveImgs, handleMoveCardClick, moveCurrentImgs}) {

    const [loading, setLoading] = useState(true)

    // const [moveImgs, setMoveImgs] = useState([])
    // const [moveCurrentImgs, setMoveCurrentImgs] = useState("")
        
    // const handleMoveCardClick = (movecurrentImgs) => {
    
    //     setMoveCurrentImgs(movecurrentImgs)
    //         console.log('이미지를 클릭했군요!');
    //         swal({
    //             title:"이잉~ 끼모륑!",
    //             text:"터치 페이지에서 더 즐겁게 감상하세욤!",
    //             icon:"success",
    //             dangerMode: true,
    //         })
            
    // };

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const resp = await axios.get('https://localhost:4000/healing', {withCredentials: true})
    //             const data = resp.data
    //             setMoveImgs([...data])
    //             console.log(data)
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    //     fetchData()
    // }, [])


    useEffect(()=>{
        setTimeout(()=>{
          setLoading(false)
        },1000)
      },[])

//console.log('asdf', moveImgs)

    return loading?<Loading/>:(
        <div>
            <MoveImglist moveCurrentImgs={moveCurrentImgs} moveImgs={moveImgs} 
            handleMoveCardClick={handleMoveCardClick}/>
        </div>
    )
}

export default MoveImgList
