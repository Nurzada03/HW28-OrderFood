import axiosInstance from '../config/mealInstence'

const signUp = (data) => {
    return axiosInstance.post('/auth/register', data)
}

const signIn = (data) => {
    return axiosInstance.post('/auth/login', data)
}

export default {
    signUp,
    signIn,
}
