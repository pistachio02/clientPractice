import React from 'react'
import { ModalBackdrop } from '../style/styled'
import SignupModal from './SignupModal'
import { useHistory } from 'react-router-dom'

function Signup() {
    const history = useHistory();
    const moveToMain = () => {
        history.push('/')
    }
    return (
        <div>
            <ModalBackdrop onClick = {moveToMain}>
                <SignupModal/>
            </ModalBackdrop>
        </div>
    )
}

export default Signup
