import { atom } from "recoil";
import { IUser } from "../interfaces";

export const cateSelectedStates = atom({
  key: "cateSelectedStates", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)s
});
