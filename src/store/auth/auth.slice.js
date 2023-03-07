/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit'
import { STORAGE_KEYS, UserRoles } from '../../lib/constants/common'
import { signIn, signUp } from './auth.thunk'

const getInitialState = () => {
    const jsonData = localStorage.getItem(STORAGE_KEYS.AUTH)

    if (jsonData) {
        const userData = JSON.parse(jsonData)
        return {
            isAuthorized: true,
            token: userData.token,
            user: {
                name: userData.user.name,
                email: userData.user.email,
                role: userData.user.role,
            },
        }
    }
    return {
        isAuthorized: false,
        token: '',
        user: {
            email: '',
            name: '',
            role: UserRoles.GUEST,
        },
    }
}

const initialState = {
    isAuthorized: false,
    ...getInitialState(),
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(signUp.fulfilled, (state, { payload }) => {
            state.isAuthorized = true
            state.token = payload.token
            state.user = {
                name: payload.user.name,
                email: payload.user.email,
                role: payload.user.role,
            }
        })

        builder.addCase(signIn.fulfilled, (state, { payload }) => {
            state.isAuthorized = true
            state.token = payload.token
            state.user = {
                name: payload.user.name,
                email: payload.user.email,
                role: payload.user.role,
            }
        })
    },
})

export default authSlice
