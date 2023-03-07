import { Grid, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { UserRoles } from '../lib/constants/common'
import { signUp } from '../store/auth/auth.thunk'

const SignUp = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()

    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
    }

    const nameChangeHandler = (e) => {
        setName(e.target.value)
    }
    const confirmChangeHandler = (e) => {
        setConfirmPassword(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const data = {
            email,
            name,
            password,
            role: UserRoles.ADMIN,
        }
        dispatch(signUp(data))
            .unwrap()
            .then(() => navigate('/'))
    }

    return (
        <StyledGrid>
            <Container>
                <form onSubmit={submitHandler}>
                    <TextField
                        value={name}
                        onChange={nameChangeHandler}
                        label="name"
                    />

                    <TextField
                        value={email}
                        onChange={emailChangeHandler}
                        label="Email"
                    />
                    <TextField
                        value={confirmPassword}
                        onChange={confirmChangeHandler}
                        label="Confirm Password"
                    />

                    <TextField
                        value={password}
                        onChange={passwordChangeHandler}
                        label="Password"
                    />
                    <Button type="submit">Sign Up</Button>
                    <Link to="/signin">Have an account ?</Link>
                </form>
            </Container>
        </StyledGrid>
    )
}

export default SignUp

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
