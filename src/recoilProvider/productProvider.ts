import { atom } from "recoil";
import { IState } from "../interfaces";

export const INIT_PRODUCT = {
    name: '',
    price: '',
    salePrice: '',
    image: '',
    category: '',
    sizeM: false,
    sizeL: false,
    hot: false,
    id: '',
};

export const productState = atom({
    key: 'productState', // unique ID (with respect to other atoms/selectors)
    default: INIT_PRODUCT, // default value (aka initial value)
});