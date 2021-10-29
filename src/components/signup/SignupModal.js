import React, {useState} from 'react'
import axios from 'axios';
import login from '../../image/login.jpg'
import Input from '../login/Input'
import {Link, useHistory } from 'react-router-dom'
import { ModalView, StyledButton} from '../style/styled'
import './Signup.css'

function SignupModal() {

    const [userinfo, setuserinfo] = useState({
        email: '',
        password: '',
        nickname: '',
        passwordCheck: ''
    });

    const history = useHistory();

    const handleInputValue = (key) => (e) => {
        setuserinfo({ ...userinfo, [key]: e.target.value });
    };

    const handleSignup = () => {
        const { email, password, nickname } = userinfo
        axios.post(
            "https://localhost:4000/register",
            { email, password, nickname },
            { 
                headers: { "Content-Type": "application/json" },
                withCredentials: true
            }
        )
        .catch((err)=>console.log(err))
        history.push("/login")
    };

    return (
        <div>
            <ModalView>
               <div>
                    <div className = 'signin-h1'> Touch</div>
                    <div className = 'signin-h2'>Sign Up</div>
                    <Input className = 'signin-password'
                   label="Nickname"
                    type="text"
                    onChange = {handleInputValue('nickname')}
                    value = {userinfo.nickname}
                     />
                    <Input className = 'signin-email'
                      label="email"
                      type="email"
                      onChange = {handleInputValue('email')}
                      value = {userinfo.email}
                     />
                     <Input className = 'signin-password'
                   label="password"
                    type="password"
                    onChange = {handleInputValue('password')}
                    value = {userinfo.password}
                     />
                      <Input className = 'signin-password'
                   label="password check"
                    type="password"
                    onChange = {handleInputValue('passwordCheck')}
                    value = {userinfo.passwordCheck}
                     />
                     <div>유효성검사칸</div>
                     <StyledButton onClick={handleSignup}>회원가입</StyledButton>
                     <p>이미 회원 이신가요 ?</p>
                     <Link to = '/login' className = 'link'><div className = 'move-to-signup'>로그인 하기</div></Link>
               </div>
               {/* {console.log(userinfo.email)}
               {console.log(userinfo.password)}
               {console.log(userinfo.nickname)} */}
               <img src = {login} alt = 'login' className = 'signup'/>
            </ModalView>
        </div>
    )
}

export default SignupModal
