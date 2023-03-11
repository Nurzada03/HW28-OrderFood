import React from 'react'
import { Box } from '@mui/system'

import { Modal as ModalComponent } from '@mui/material'
import styled from '@emotion/styled'

const Modal = ({ modal, onClick, children }) => {
    return (
        <div>
            <ModalComponent open={modal} onClose={onClick}>
                <StyledBox>{children}</StyledBox>
            </ModalComponent>
        </div>
    )
}

export default Modal

const StyledBox = styled(Box)(() => ({
    background: '#fff',
    textAlign: 'center',
    width: '800px',
    height: '500px',
    position: 'fixed',
    left: '30%',
    top: '20%',
}))
