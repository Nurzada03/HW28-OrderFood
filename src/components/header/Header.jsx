import { styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from '../../store/auth/auth.thunk'
import { getBasket } from '../../store/basket/basketThunk'
import { uiActions } from '../../store/UI/ui.slice'
import { withAuthModal } from '../hoc/withAuthModal'
import Button from '../UI/Button'
import BusketButton from './BusketButton'

const Header = ({ onShowBasket, showAuthModal }) => {
    const navigate = useNavigate()
    const items = useSelector((state) => state.basket.items)
    const [animationClass, setAnimationClass] = useState('')

    const isAuthorized = useSelector((state) => state.auth.isAuthorized)

    const themeMode = useSelector((state) => state.ui.themeMode)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBasket())
    }, [dispatch])

    const calculateTotalAmount = () => {
        const sum = items.reduce((s, item) => {
            return s + item.amount
        }, 0)

        return sum
    }

    useEffect(() => {
        setAnimationClass('bump')

        const id = setTimeout(() => {
            setAnimationClass('')
        }, 300)

        return () => {
            clearTimeout(id)
        }
    }, [items])

    const themeChangeHandler = () => {
        const theme = themeMode === 'light' ? 'dark' : 'light'

        dispatch(uiActions.changeTheme(theme))
    }

    const signOutHandler = () => {
        dispatch(signOut())
    }
    const showBasketHandler = () => {
        if (!isAuthorized) {
            return showAuthModal()
        }
        return onShowBasket()
    }

    return (
        <Container>
            <Link to="/">
                <Logo>ReactMeals</Logo>
            </Link>
            <Button onClick={() => navigate('/orderfood')}>show orders</Button>
            <BusketButton
                className={animationClass}
                onClick={showBasketHandler}
                count={calculateTotalAmount()}
            />
            <Button onClick={themeChangeHandler}>
                {themeMode === 'light' ? 'Turn Dark mode' : 'Turn light mode'}
            </Button>
            {isAuthorized ? (
                <Button onClick={signOutHandler}>Sign out</Button>
            ) : (
                <Button onClick={() => navigate('/signin')}>Sign In</Button>
            )}
        </Container>
    )
}

export default withAuthModal(Header)

const Container = styled('header')(({ theme }) => ({
    position: 'fixed',
    top: 0,
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '6.3125rem',
    backgroundColor: theme.palette.primary.light,
    padding: '0 7.5rem',
    alignItems: 'center',
    zIndex: 1,
}))

const Logo = styled('p')(() => ({
    fontWeight: 600,
    fontSize: '2.375rem',
    lineHeight: '3.5625rem',
    color: '#ffffff',
    margin: 0,
}))
