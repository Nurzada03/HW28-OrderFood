import styled from '@emotion/styled'
import { TextField } from '@mui/material'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import styledComponents from 'styled-components'
import Button from '../../../components/UI/Button'
import { updateMeal } from '../../../store/meals/mealsThunk'

const EditFoods = ({ item, close }) => {
    const dispatch = useDispatch()

    const submitHandler = ({ title, price, description }) => {
        const editMeal = {
            title,
            price,
            description,
        }

        const data = {
            // eslint-disable-next-line no-underscore-dangle
            id: item._id,
            editData: editMeal,
        }

        dispatch(updateMeal(data))
        close()
    }

    const { values, handleChange, handleSubmit } = useFormik({
        initialValues: {
            title: item.title,
            description: item.description,
            price: item.price,
        },
        onSubmit: submitHandler,
    })

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledInput
                value={values.title}
                onChange={handleChange}
                name="title"
            />
            <StyledInput
                value={values.description}
                onChange={handleChange}
                name="description"
            />
            <StyledInput
                value={values.price}
                onChange={handleChange}
                name="price"
                type="number"
            />

            <Button type="submit"> save</Button>
            <Button onClick={close}> close</Button>
        </StyledForm>
    )
}

export default EditFoods

const StyledForm = styledComponents.form`
    margin-top: 60px;
    display: flex;
    gap: 30px;
    justify-content: center;
`

const StyledInput = styled(TextField)(() => ({
    width: '500px',
}))
