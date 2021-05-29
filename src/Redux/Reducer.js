import { combineReducers } from "redux";

const initialLoginGlobal = {

    isLogin : false,
    userData : {}

}

function LoginReducer(state = initialLoginGlobal, action){

    if(action.type === "SET_LOGIN"){
        return({
            ...state,
            [action.inputType] : action.inputValue
        })
    }
    return state;

}

const reducer = combineReducers({

    LoginReducer

})
export default reducer