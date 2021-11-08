import React from 'react'
import { ModalBackdrop } from '../style/styled'
import SignupModal from './SignupModal'
import { useHistory } from 'react-router-dom'

function Signup() {
    const history = useHistory();
    
    return (
        <div>
            <ModalBackdrop >
                <SignupModal/>
            </ModalBackdrop>
        </div>
    )
}

export default Signup
