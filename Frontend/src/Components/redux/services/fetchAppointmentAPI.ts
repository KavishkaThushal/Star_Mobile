import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import api from "../../../config/axiosInterceptor";

interface Response {
  success: boolean;
  message: string;
  data: Appointment[];
  timestamp: string;
}
export interface Appointment {
  _id: string;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  issue: string;
  appointDate: string;
  progress: "pending" | "completed" | "cancelled" | "InCompleted";
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export const fetchAppointments = createAsyncThunk<
  Response,
  void,
  { state: RootState }
>("user/userAppointments", async (_, {}) => {
  const response = await api.get("/appointment/get-user-appointments");
  console.log("Fetched appointments:", response.data);
  return response.data;
});
