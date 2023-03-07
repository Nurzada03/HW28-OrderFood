import { Grid, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { signIn } from '../store/auth/auth.thunk'

const SignIn = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const data = {
            email,
            password,
        }
        dispatch(signIn(data))
            .unwrap()
            .then(() => navigate('/'))
    }

    return (
        <StyledGrid>
            <Container>
                <form onSubmit={submitHandler}>
                    <TextField
                        value={email}
                        onChange={emailChangeHandler}
                        label="Email"
                    />
                    <TextField
                        value={password}
                        onChange={passwordChangeHandler}
                        label="Password"
                    />
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
