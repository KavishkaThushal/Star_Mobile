import { createSlice } from "@reduxjs/toolkit";
import { Appointment, fetchAppointments } from "../services/fetchAppointmentAPI";

interface UserAppointmentsState {
  appointments: Appointment[];
  loading: boolean;
  error: string | null;
}
const InitialState: UserAppointmentsState = {
  appointments: [],
  loading: false,
  error: null,
};
const userAppointmentsSlice = createSlice({
  name: "userAppointments",
  initialState: InitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.loading = false;
        state.appointments = action.payload.data;
      })
      .addCase(fetchAppointments.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Failed to fetch appointments details";
      });
  },
});

export default userAppointmentsSlice.reducer;
