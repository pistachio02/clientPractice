import React, {useState} from 'react'
import { ModalView, StyledButton} from '../style/styled'
import login from '../../image/login.jpg'
import Input from './Input'
import {Link} from 'react-router-dom'
import axios from 'axios'
import kakao from '../../image/kakao.png'
import google from '../../image/google.png'


function LoginModal({ handleResponseSuccess }) {

    const [userinfo, setuserinfo] = useState({
        email: '',
        password: ''
    });

    const handleInputValue = (key) => (e) => {
        setuserinfo({ ...userinfo, [key]: e.target.value });
    };

    const handleLogin = () => {
    
        const { email, password } = userinfo
    
        axios
          .post(
              'https://localhost:4000/login',
              { email, password },
              { headers: {
                 "Content-Type": "application/json" },
                withCredentials: true }
          )
          .then(()=>{
              handleResponseSuccess()
          })
          .catch((err)=>console.log(err))
    };

    const KAKAO_LOGIN_URL = 'https://kauth.kakao.com/oauth/authorize?client_id=cd907f22e063b6c7cee0fe2befb6140f&redirect_uri=http://localhost:3000/&response_type=code'
    const kakaoLoginHandler = async () => {
        window.location.assign(KAKAO_LOGIN_URL);
    }

    const GOOGLE_LOGIN_URL = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=1085457130769-nv16h3a5ug5b1fml2467muf8cqevg0t9.apps.googleusercontent.com&redirect_uri=http://localhost:3000/&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email&include_granted_scopes=true'
    const googleLoginHandler = async () => {
        window.location.assign(GOOGLE_LOGIN_URL);
    }

    return (
        <div>
            <ModalView>
               <img src = {login} alt = 'login' className = 'login'/>
               <div>
                    <h1 className = 'login-h1'> Touch</h1>
                    <div className = 'login-h2'>Login</div>
                    <Input className = 'email'
                      label="email"
                      type="email"
                      onChange = {handleInputValue("email")}
                      value = {userinfo.email}
                     />
                     <Input className = 'password'
                   label="password"
                    type="password"
                    onChange = {handleInputValue("password")}
                    value = {userinfo.password}
                     />
                     <StyledButton onClick={handleLogin}>로그인</StyledButton>
                     <div className = 'social-text'>소셜 계정으로 간편하게 로그인 하세요 !</div>
                     <img src = {kakao} alt = 'social-login' className = 'social-kakao' onClick={kakaoLoginHandler} />
                     <img src = {google} alt = 'social-login' className = 'social-kakao' onClick={googleLoginHandler} />
                     <p>아직 회원이 아니신가요 ?</p>
                     <Link to = '/signup' className = 'link'><div className = 'move-to-signup'>회원가입하기</div></Link>
                     
               </div>
               {/* {console.log(userinfo.email)}
               {console.log(userinfo.password)} */}
              
            </ModalView>
        </div>
    )
}

export default LoginModal