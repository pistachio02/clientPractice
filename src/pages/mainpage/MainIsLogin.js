import React from 'react'
import {Link} from 'react-router-dom'
import LoginModal from '../../components/login/LoginModal'
import Touch from '../mainpage/Touch';
function MainIsLogin() {
    return (
        <div>
            {/* <Touch /> */}
            <div>ddddddd</div>
            <h1>로그인이 필요한 페이지 입니다,</h1>
            <h3>로그인을 하시겠습니까 ?</h3>
            <Link to="/login"><button>로그인 하기</button></Link>
            <Link to="/heal/moveimg"><button>취소</button></Link>
            {/* <LoginModal /> */}
        </div>
    )
}

export default MainIsLogin
