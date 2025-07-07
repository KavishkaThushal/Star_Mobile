import { combineReducers } from "@reduxjs/toolkit";
import userDetailsSlice from "./userDetailsSlice";
import userAppointmentsSlice from "./fetchAppointmentsSlice";
const starFeatures = combineReducers({
  userDetails: userDetailsSlice,
  userAppointments: userAppointmentsSlice,
});

export default starFeatures;
