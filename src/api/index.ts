import axios from 'axios'
import {IProduct} from '../interfaces'

const URL =`https://vmilkteaapi.herokuapp.com`
export const usersApi= `${URL}/users`
export const productsApi= `${URL}/products`
export const ordersApi= `${URL}/orders`
export const adminId= 'L4InZ-dBp'
export const imageApi = 'https://api.cloudinary.com/v1_1/vmilktea/image/upload'
export const getProduct = () => {
    return axios.get<IProduct[]>(`${productsApi}`)
}