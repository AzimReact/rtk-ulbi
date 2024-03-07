import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { fetchUsers } from "./ActionCreators";

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
  count: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
    decrement(state, action: PayloadAction<number>) {
      state.count -= action.payload;
    },
  },
  extraReducers: (builder) => {
    // console.log(builder);
    
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
        state.isLoading = false;
        state.error = '';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload && typeof action.payload === 'string') {
          state.error = action.payload;
        } else {
          state.error = 'An error occurred while fetching users.';
        }
      })
  },
});

export default userSlice.reducer;


// // increment(state, action: PayloadAction<number>) {
// //   state.count += action.payload;
// // },
// // decrement(state, action: PayloadAction<number>) {
// //   state.count -= action.payload;
// // },

//     // ------- GETTING THE USERS - async process with standard Redux ----------
    
//     // usersFetching(state) {
//     //   state.isLoading = true;
//     // },
//     // usersFetchingSucces(state, action: PayloadAction<IUser[]>) {
//     //   state.isLoading = false;
//     //   state.error = '';
//     //   state.users = action.payload;
//     // },
//     // usersFetchingError(state, action: PayloadAction<string>) {
//     //   state.isLoading = false;
//     //   state.error = action.payload;
//     // },
    



  // extraReducers: {
  //   [fetchUsers.pending.type]: (state: any) => {
  //     state.isLoading = true;
  //   },
  //   [fetchUsers.fulfilled.type]: (state: any, action: PayloadAction<IUser[]>) => {
  //     state.isLoading = false;
  //     state.error = '';
  //     state.users = action.payload;
  //   },
  //   [fetchUsers.rejected.type]: (state: any, action: PayloadAction<string>) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // } 