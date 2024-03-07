import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'
import { postAPI } from "../services/PostService";

const rootReducer = combineReducers({
  userReducer,
  [postAPI.reducerPath]: postAPI.reducer,
  
})

// конфигурация redux хранилища
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'] // определив тип диспатча мы не сможем задиспатчить те экшны которые мы не определили