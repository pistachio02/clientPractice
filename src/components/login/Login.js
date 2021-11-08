import React from 'react'
import { ModalBackdrop } from '../style/styled'
import './Login.css'
import LoginModal from './LoginModal'
import { useHistory } from 'react-router-dom'

function Login({ handleResponseSuccess }) {
    const history = useHistory();
    const moveToMain = () => {
        history.push('/')
    }
    return (
        <div>
            <ModalBackdrop onClick = {moveToMain}>
                <LoginModal handleResponseSuccess={handleResponseSuccess} />
            </ModalBackdrop>
            
        </div>
    )
}

export default Login
