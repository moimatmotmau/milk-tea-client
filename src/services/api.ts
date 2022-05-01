import axios from 'axios';
import {IProduct} from '../interfaces'

export const getProduct = () => {
    return axios.get<IProduct[]>('http://localhost:5000/products')
}
