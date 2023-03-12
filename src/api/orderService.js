import axiosInstance from '../config/mealInstence'

export const createOrderRequest = (data) => {
    return axiosInstance.post(`/orders`, data)
}

export const getOrderRequest = () => {
    return axiosInstance.get(`/orders`)
}

export const getAllOrderRequest = () => {
    return axiosInstance.get(`/orders/all`)
}
