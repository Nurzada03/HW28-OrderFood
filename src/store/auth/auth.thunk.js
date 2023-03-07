import { createAsyncThunk } from '@reduxjs/toolkit'
import authService from '../../api/authService'
import { STORAGE_KEYS } from '../../lib/constants/common'

export const signUp = createAsyncThunk(
    'auth/signup',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await authService.signUp(payload)
            localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(data.data))
            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const signIn = createAsyncThunk(
    'auth/signin',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await authService.signIn(payload)
            localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(data.data))
            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
