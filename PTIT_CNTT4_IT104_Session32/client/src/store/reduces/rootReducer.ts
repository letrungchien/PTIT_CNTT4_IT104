import { combineReducers } from "redux";
import { reducerCounter } from "./ReducerCount";
import { reducerStudent } from "./ReducerStudent";
import { reducerProfile } from "./ReducerProfile";
import { randomNumber } from "./ReducerRanDom";
import { changeState } from "./ReducerChange";
import {  reducerDark } from "./ReducerDark";
import { account } from "./ReducerRegister";



 export const rootReducer =combineReducers({
    counter :reducerCounter,
    student :reducerStudent,
    profile:reducerProfile,
    ranDom:randomNumber,
    change:changeState,
    dark:reducerDark,
    register:account
})