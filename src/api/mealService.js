import axiosInstance from '../config/mealInstence'

export const getMealRequest = () => {
    return axiosInstance.get('/foods')
}

export const getBasketReq = () => {
    return axiosInstance.get('/basket')
}

export const addToBasketReq = (newItem) => {
    return axiosInstance.post(`/foods/${newItem.id}/addToBasket`, {
        amount: newItem.amount,
    })
}

export const updateBasketItemReq = (id, basketAmount) => {
    return axiosInstance.put(`/basketItem/${id}/update`, {
        amount: basketAmount,
    })
}
export const deleteBasketItemReq = (id) => {
    return axiosInstance.delete(`/basketItem/${id}/delete`)
}

export const PostMealREquest = (data) => {
    return axiosInstance.post(`/foods`, data)
}

export const deleteMealREquest = (id) => {
    return axiosInstance.delete(`/foods/${id}`)
}

export const updateMealItemRequest = ({ id, editData }) => {
    return axiosInstance.put(`/foods/${id}`, editData)
}
