import React,{useEffect, useState} from 'react'
import Header from '../../components/header/Header'
import MainSideBar from '../../components/sidebar/SideBar'
import {Route, Switch} from 'react-router-dom'
import styled from 'styled-components';
// import ImgList from './ImgList';
import Touch from './Touch';
import MoveImgList from './MoveImgList';
import Home from './Home';
import axios from 'axios'
import swal from 'sweetalert'



const MainGrid = styled.div`
margin-left: 240px;
`
const MainGridBody = styled.div`
margin-left: 20px;
/* padding-top: 120px; */
text-align: center;
`




function Heal({isLogin, userinfo, handleLogout }) {

    const [moveImgs, setMoveImgs] = useState([])
    const [moveCurrentImgs, setMoveCurrentImgs] = useState("")
        
    const handleMoveCardClick = (movecurrentImgs) => {
    
        setMoveCurrentImgs(movecurrentImgs)
            console.log('이미지를 클릭했군요!');
            swal({
                title:"이잉~ 끼모륑!",
                text:"터치 페이지에서 더 즐겁게 감상하세욤!",
                icon:"success",
                dangerMode: true,
            })
            
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const resp = await axios.get('https://localhost:4000/healing', {withCredentials: true})
                const data = resp.data
                setMoveImgs([...data])
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [])


    return (
        <div>
            <Header userinfo={userinfo} isLogin={isLogin} handleLogout={handleLogout} />
            <MainSideBar/>

            <MainGridBody />
        <Switch>
        <MainGrid>
        <Route path='/heal' exact component={Home} />
        {/* <Route path='/heal/imglist'
        render={()=> <ImgList imgs={imgs} handleCardClick={handleCardClick}/>}/> */}


        <Route path='/heal/moveimglist' 
        render={()=><MoveImgList moveCurrentImgs={moveCurrentImgs} moveImgs={moveImgs} 
        handleMoveCardClick={handleMoveCardClick} />}
        />


        <Route path='/heal/touch' 
        render={()=> <Touch moveCurrentImgs={moveCurrentImgs} />}/>
        </MainGrid>
        </Switch>
        </div>
    )
}

export default Heal
