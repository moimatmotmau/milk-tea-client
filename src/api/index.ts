import axios from "axios";
import { IProduct } from "../interfaces";

const URL = `http://localhost:5000`;
export const usersApi = `${URL}/users`;
export const productsApi = `${URL}/products`;
export const ordersApi = `${URL}/orders`;
export const imageApi = "https://api.cloudinary.com/v1_1/vmilktea/image/upload";
export const getProduct = () => {
  return axios.get<IProduct[]>(`${productsApi}`);
};
