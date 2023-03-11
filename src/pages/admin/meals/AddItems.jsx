import styled from '@emotion/styled'
import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { postMeal } from '../../../store/meals/mealsThunk'

const AddItems = ({ close }) => {
    const dispatch = useDispatch()
    const submitHandler = ({ title, description, price }) => {
        const newMeal = { title, description, price }
        dispatch(postMeal(newMeal))
        close()
    }

    const { values, handleChange, handleSubmit } = useFormik({
        initialValues: {
            title: '',
            description: '',
            price: 0,
        },
        onSubmit: submitHandler,
    })
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <StyledForm
                    id="outlined-controlled"
                    label="Foods"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    type="text"
                />{' '}
                <br />
                <StyledForm
                    id="outlined-controlled"
                    label="description"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    type="text"
                />{' '}
                <br />
                <StyledForm
                    type="number"
                    id="outlined-controlled"
                    label="price"
                    name="price"
                    value={values.price}
                    onChange={handleChange}
                />
            </div>
            <StyledButton>
                <Button variant="contained" type="submit">
                    add
                </Button>
                <Button variant="contained" onClick={close}>
                    close
                </Button>
            </StyledButton>
        </form>
    )
}

export default AddItems

const StyledForm = styled(TextField)(() => ({
    marginTop: '30px',
    width: '70%',
    marginBottom: '30px',
}))

const StyledButton = styled.button`
    display: flex;
    justify-content: end;
    width: 100%;
    gap: 20px;

    border: 0;
`
