import { atom } from "recoil";
import { IUser } from "../interfaces";

export const initialValues: IUser = {
    username: '',
    password: '',
    email: '',
    phone: '',
    fullName: '',
    age: '',
    avatar: '',
    address: '',
    cart: [],
    orders: [],
    role: 'user',
    _id: '',
}

if (!localStorage.getItem("account")) {
    localStorage.setItem("account", JSON.stringify(initialValues))
}

const account: any = localStorage.getItem("account")

export const accountState = atom({
    key: 'accountState', 
    default: JSON.parse(account), 
});
export const cateSelectedState = atom({
    key: 'cateSelectedState', 
    default: '', 
});