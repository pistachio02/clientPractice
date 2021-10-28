import React from 'react'
import './App.css';
import {useState, useEffect} from 'react';
import {Route, Switch, useHistory} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage'
import SignUp from './pages/SignUp';
import Heal from './pages/Heal';
import Board from './pages/Board';
import axios from 'axios';


function App() {

  const [isLogin, setIsLogin] = useState(false);
  const [userinfo, setUserinfo] = useState({});
  const history = useHistory();

  const isAuthenticated = () => {
    const authorizationCode = new URL(window.location.href).searchParams.get('code')

    if(!authorizationCode){
      axios
       .get(
         'https://localhost:4000/auth',
         { withCredentials: true }
       )
       .then((res)=>{
         setIsLogin(true);
         setUserinfo(res.data.data.userInfo)
         history.push('/');
       })
    } else {
      axios
          .post('https://localhost:4000/kakaologin', 
          {
            authorizationCode: authorizationCode
          },
          { withCredentials: true })
          .then((res) => {
            console.log(res)
            setIsLogin(true);
            setUserinfo(res.data.userInfo)
          })
          }
  };

  const handleLogout = () => {
    axios
      .post('https://localhost:4000/logout', 
      {},
      { withCredentials: true })
      .then(() => {
        setUserinfo(null);
        setIsLogin(false);
        history.push('/');
      });
  };

  const handleResponseSuccess = () => {
    isAuthenticated();
  };

  // const KAKAO_LOGIN_URL = 'https://kauth.kakao.com/oauth/authorize?client_id=cd907f22e063b6c7cee0fe2befb6140f&redirect_uri=http://localhost:3000/&response_type=code'

  // const kakaoLoginHandler = async () => {
  //   window.location.assign(KAKAO_LOGIN_URL);
  //   const authorizationCode = new URL(window.location.href).searchParams.get('code')
  //   getUserInfo(authorizationCode)
  // }

  // const getUserInfo = async (authorizationCode) => {
  //   const res = await axios.post('https://localhost:4000/kakaologin', 
  //   {
  //     authorizationCode: authorizationCode
  //   },
  //   { withCredentials: true })
  //   setIsLogin(true);
  //   setUserinfo(res.data.data.userInfo)
  // }

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <div >
      <Switch>
        <Route exact path = '/'>
          <LandingPage userinfo={userinfo} isLogin={isLogin} handleLogout={handleLogout} />
        </Route>

        <Route path = '/login'>
          <LoginPage handleResponseSuccess={handleResponseSuccess} />
        </Route>

        <Route path = '/signup'>
          <SignUp/>
        </Route>
        <Route path = '/heal'>
          <Heal/>
        </Route>
        <Route path = '/board'>
          <Board/>
        </Route>
        <Route path = '/edit'>
          
        </Route>
        <Route path = '/favorite'>
          
        </Route>
        <Route path = '/written'>
          
        </Route>
      </Switch>
    </div>
  );
}

export default App;
