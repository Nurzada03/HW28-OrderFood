import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styledComponent from 'styled-components'
import getMeals, { deleteMeal } from '../../../store/meals/mealsThunk'
import Modal from './Modal'
import AddItems from './AddItems'
import EditFoods from './EditFoods'

export const Meals = () => {
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const { meals, isLoading, error } = useSelector((state) => state.meals)

    useEffect(() => {
        dispatch(getMeals())
    }, [])

    const closeHandler = () => {
        setModal(false)
        setShowModal(false)
    }

    const handleOpen = () => {
        setModal(true)
    }
    const handleOpenModal = () => {
        setShowModal((prevState) => !prevState)
    }

    const deleteMealHandler = (id) => {
        dispatch(deleteMeal(id))
    }

    return (
        <div>
            <StyledButton variant="contained" onClick={handleOpen}>
                Add
            </StyledButton>
            <Modal onClick={handleOpen} modal={modal}>
                <AddItems close={closeHandler} />
            </Modal>
            {isLoading && !error && <p>Loading</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Container>
                {meals.map((item) => (
                    <StyledLi key={item.id}>
                        <span>{item.title}</span>
                        <span>{item.description}</span>
                        <span>${item.price}</span>
                        <Button variant="contained" onClick={handleOpenModal}>
                            edit
                        </Button>
                        <Modal onClick={handleOpenModal} modal={showModal}>
                            <EditFoods item={item} close={closeHandler} />
                        </Modal>
                        <Button
                            variant="contained"
                            type="button"
                            // eslint-disable-next-line no-underscore-dangle
                            onClick={() => deleteMealHandler(item._id)}
                        >
                            delete
                        </Button>
                    </StyledLi>
                ))}
            </Container>
        </div>
    )
}

const Container = styledComponent.li`
    width: 60%;
    padding: 30px;
    background-color: #fff;
    list-style: none;
    margin: 100px 200px;
    box-shadow: 10px 5px 5px red;
    border: 3px solid red;
    border-radius: 10px;
`

const StyledLi = styledComponent.li`
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    box-shadow: 10px 5px 5px red;
    font-size: 35px;
`

const StyledButton = styled(Button)(() => ({
    width: '150px',
    padding: '20px',
    borderRadius: '15px',
    background: '#e6a2a2',
    marginLeft: '30px',
    marginTop: '30px',
    fontSize: '16px',
    '&: hover': {
        background: '#e0ab8b',
    },
}))
