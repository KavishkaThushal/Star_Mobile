import { combineReducers } from "@reduxjs/toolkit";
import userDetailsSlice from "./userDetailsSlice"
const starFeatures=combineReducers({
    userDetails:userDetailsSlice
})

export default starFeatures;