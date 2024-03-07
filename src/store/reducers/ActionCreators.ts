import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

export const fetchUsers = createAsyncThunk<IUser[]>(
  'user/fetchAll',
  async () => {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      return response.data;
  }
);


// import { AppDispatch } from "../store";
// import { userSlice } from "./UserSlice";

// export const fetchUsers = async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching()); // loading = true
//     const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users'); // делаем запрос
//     dispatch(userSlice.actions.usersFetchingSucces(response.data));
//   } catch (e) {
//     dispatch(userSlice.actions.usersFetchingError('Can not get the data from server - code 404'));
//   };
// };
