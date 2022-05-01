import {INIT_STATE} from '../../constant'
import {getUsers, getType} from '../actions'

export default function productsReducer(state=INIT_STATE.users, action:any){
    switch(action.type){
        case getType(getUsers.getUsersRequest):
            return {
                ...state,
                isLoading: true,
            }
        case getType(getUsers.getUsersSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            }
        case getType(getUsers.getUsersFailure):
            return {
                ...state,
                isLoading: false,
            }
        default: 
            return state;
    }
}