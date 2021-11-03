import React,{useState, useEffect} from 'react'
import Mainlist from '../../components/maincomponent/mainlist/Mainlist'
import Loading from '../LoadingPage'

function ImgList({imgs, handleCardClick}) {


    const [loading, setLoading] = useState(true)


    useEffect(()=>{
        setTimeout(()=>{
          setLoading(false)
        },1000)
      },[])

    //console.log('img',imgs)
    return loading?<Loading />:(
        <div>
            <Mainlist imgs={imgs} handleCardClick={handleCardClick} />
        </div>
    )
}

export default ImgList
