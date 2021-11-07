import React from 'react';
import Header from '../components/header/Header';
import UserUpdate from './edit/UserUpdate';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function UserEdit({isLogin, userinfo, handleLogout}) {
    return (
        <div>
            <Header userinfo={userinfo} isLogin={isLogin} handleLogout={handleLogout} />
            <BrowserRouter>
            <Switch>
                <Route exact path="/edit" 
                render={()=><UserUpdate userinfo={userinfo} isLogin={isLogin} handleLogout={handleLogout} />}></Route>
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default UserEdit