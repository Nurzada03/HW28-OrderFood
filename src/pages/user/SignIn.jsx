import { Grid, TextField, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { signIn } from '../../store/auth/auth.thunk'

const SignIn = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
        setError('')
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
        setError('')
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const data = {
            email,
            password,
        }
        dispatch(signIn(data))
            .unwrap()
            .then(() => {
                navigate('/')
            })
            .catch((er) => {
                setError(er.response.data.message)
            })
    }

    const isEmailValid = () => {
        return email.length === 0 || (email.length > 0 && email.includes('@'))
    }

    const isPasswordValid = () => {
        return (
            password.length === 0 ||
            (password.length > 0 && password.length >= 6)
        )
    }

    return (
        <StyledGrid>
            <Container>
                <form onSubmit={submitHandler}>
                    <TextField
                        error={!isEmailValid()}
                        value={email}
                        onChange={emailChangeHandler}
                        label="Email"
                    />
                    <TextField
                        error={!isPasswordValid()}
                        value={password}
                        onChange={passwordChangeHandler}
                        label="Password"
                    />
                    {error && (
                        <Typography
                            textAlign="center"
                            sx={{ color: (theme) => theme.palette.error.main }}
                        >
                            {error}
                        </Typography>
                    )}
                    <Button type="submit">Sign In</Button>
                    <Link to="/signup">{`Don't have account ?`}</Link>
                </form>
            </Container>
        </StyledGrid>
    )
}

export default SignIn

const Container = styled(Grid)`
    background-color: white;
    width: 500px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const StyledGrid = styled(Grid)`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`
