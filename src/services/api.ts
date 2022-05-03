import axios from 'axios';
import {IProduct} from '../interfaces'
import {productsApi} from '../api/index'

export const getProduct = () => {
    return axios.get<IProduct[]>(`${productsApi}`)
}
