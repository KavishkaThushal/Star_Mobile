import { createSlice } from "@reduxjs/toolkit";
import { userDetails } from "../services/userDetailsAPI";

interface UserDetailsState {
  userData: any[];
  loading: boolean;
  error: string | null;
}
const InitialState: UserDetailsState = {
  userData: [],
  loading: false,
  error: null,
};
const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: InitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload.data;
      })
      .addCase(userDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch user details";
      });
  },
});

export default userDetailsSlice.reducer;
