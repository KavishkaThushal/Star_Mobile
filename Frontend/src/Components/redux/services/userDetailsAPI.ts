import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import api from "../../../config/axiosInterceptor";

interface Response {
  success: boolean;
  message: string;
  data: any;
  timestamp: string;
}

export const userDetails = createAsyncThunk<
  Response,
  void,
  { state: RootState }
>("user/userDetails", async (_, {}) => {
  const response = await api.get("auth/user");

  return response.data;
});
