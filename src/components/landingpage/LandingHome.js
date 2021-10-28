import React from 'react'
import Header from '../header/Header'
import LandingBody1 from './LandingBody1'


function LandingHome({isLogin, userinfo, handleLogout }) {
    return (
        <div>
            <Header userinfo={userinfo} isLogin={isLogin} handleLogout={handleLogout} />
          <LandingBody1/>
        </div>
    )
}

export default LandingHome
