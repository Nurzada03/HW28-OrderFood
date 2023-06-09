import React, { useState } from 'react'
import styled from '@emotion/styled'

import { useDispatch, useSelector } from 'react-redux'

import AddIcon from '@mui/icons-material/Add'
import { TextField } from '@mui/material'
import Button from '../../UI/Button'
import { addToBasket } from '../../../store/basket/basketThunk'
import { withAuthModal } from '../../hoc/withAuthModal'

const MealItemForm = ({ id, title, price, showAuthModal }) => {
    const [amount, setAmount] = useState(1)
    const isAuthorized = useSelector((state) => state.auth.isAuthorized)

    const dispatch = useDispatch()

    const amountChangeHandler = (e) => {
        setAmount(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        if (!isAuthorized) {
            showAuthModal()
        }

        const basketItem = {
            id,
            price,
            title,
            amount,
        }

        dispatch(addToBasket(basketItem))
    }

    return (
        <StyledForm>
            <Container>
                <StyledLabel htmlFor={id}>Amount</StyledLabel>
                <StyledText
                    id={id}
                    type="number"
                    size="small"
                    value={amount}
                    onChange={amountChangeHandler}
                />
            </Container>
            <Button onClick={submitHandler}>
                <AddIcon />
                Add
            </Button>
        </StyledForm>
    )
}

export default withAuthModal(MealItemForm)

const StyledText = styled(TextField)(() => ({
    width: ' 3.75rem',
    height: '2rem',
    outline: 'none',
    borderRadius: '6px',
    fontWeight: '500',
    fontSize: '16px',
}))

const StyledForm = styled('form')(() => ({
    display: ' flex',
    flexDirection: ' column',
    alignItems: 'flex-end',
}))

const Container = styled('div')(() => ({
    marginBottom: '15px',
}))

const StyledLabel = styled('label')(() => ({
    fontWeight: '600',
    fontSize: '1.125rem',
    lineHeight: '1.6875rem',
    margin: '0 1.25rem 0 0',
}))
