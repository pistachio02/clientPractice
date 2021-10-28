import React, {useState} from 'react'
import { ModalView, StyledButton} from '../style/styled'
import login from '../../image/login.jpg'
import Input from './Input'
import {Link} from 'react-router-dom'
import axios from 'axios'


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
