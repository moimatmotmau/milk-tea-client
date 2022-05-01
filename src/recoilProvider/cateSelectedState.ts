import { atom } from "recoil";
import { IUser } from "../interfaces";

export const cateSelectedState = atom({
    key: 'cateSelectedState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});