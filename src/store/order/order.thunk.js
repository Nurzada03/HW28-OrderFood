import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    createOrderRequest,
    getAllOrderRequest,
    getOrderRequest,
} from '../../api/orderService'

export const postOrder = createAsyncThunk(
    'meal/postOrder',
    async (totalPrice, { rejectWithValue }) => {
        try {
            return await createOrderRequest(totalPrice)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const getOrder = createAsyncThunk(
    'meals/getOrder',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getOrderRequest()
            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const getAllOrder = createAsyncThunk(
    'meals/getAllOrder',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getAllOrderRequest()
            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
