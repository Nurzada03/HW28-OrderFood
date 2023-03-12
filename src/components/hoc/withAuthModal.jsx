import React, { useState } from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const withAuthModal = (Component) => {
    const Wrapper = (props) => {
        const navigate = useNavigate()
        const [isModalOpen, setMoadalOpen] = useState(false)

        const goToSignInHandler = () => {
            setMoadalOpen(false)
            navigate('/signin')
        }

        return (
            <>
                <Component
                    {...props}
                    showAuthModal={() => setMoadalOpen(true)}
                />

                <Dialog
                    open={isModalOpen}
                    onClose={() => setMoadalOpen(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        Not Authorized
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            In order to complete this actions, pleas sign In
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={goToSignInHandler}>
                            Go to Sign In
                        </Button>
                        <Button onClick={() => setMoadalOpen(false)} autoFocus>
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            </>
        )
    }
    return Wrapper
}
