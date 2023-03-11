import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    deleteMealREquest,
    getMealRequest,
    PostMealREquest,
    updateMealItemRequest,
} from '../../api/mealService'

const getMeals = createAsyncThunk(
    'meals/getMeals',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getMealRequest()
            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const postMeal = createAsyncThunk(
    'meal/postMeal',
    async (data, { rejectWithValue, dispatch }) => {
        try {
            await PostMealREquest(data)
            return dispatch(getMeals())
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const deleteMeal = createAsyncThunk(
    'meal/deleteMeal',
    async (id, { rejectWithValue, dispatch }) => {
        try {
            await deleteMealREquest(id)
            return dispatch(getMeals())
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const updateMeal = createAsyncThunk(
    'meal/updateMeal',
    async (data, { rejectWithValue, dispatch }) => {
        try {
            await updateMealItemRequest(data)
            return dispatch(getMeals())
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export default getMeals
