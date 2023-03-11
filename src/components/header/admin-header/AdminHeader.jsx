import { useDispatch } from 'react-redux'

import React from 'react'
import { AppBar, Button, IconButton, Toolbar } from '@mui/material'
import styled from '@emotion/styled'

import MenuIcon from '@mui/icons-material/Menu'
import { NavLink } from 'react-router-dom'
import { signOut } from '../../../store/auth/auth.thunk'

const menus = [
    {
        path: 'meals',
        title: 'Meals',
    },
    {
        path: 'orders',
        title: 'Orders',
    },
]

const AdminHeader = () => {
    const dispatch = useDispatch()

    const signOutHandler = () => {
        dispatch(signOut())
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        style={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Container>
                        {menus.map((item) => (
                            <StyledNavLink
                                key={item.path}
                                to={item.path}
                                sx={{ marginRight: '10px' }}
                            >
                                {item.title}
                            </StyledNavLink>
                        ))}

                        <Button color="inherit" onClick={signOutHandler}>
                            Sign Out
                        </Button>
                    </Container>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default AdminHeader

const StyledNavLink = styled(NavLink)(() => ({
    color: '#fff',
}))

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    font-size: 20px;
`
