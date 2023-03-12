import { createSlice } from '@reduxjs/toolkit'
import { getAllOrder, getOrder } from './order.thunk'

const initialState = {
    orders: [],
    allOrders: [],
    isLoading: false,
    error: '',
}

export const orderSlice = createSlice({
    name: 'orders',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getOrder.fulfilled, (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.orders = action.payload
        })
        builder.addCase(getAllOrder.fulfilled, (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.allOrders = action.payload
        })
    },
})
