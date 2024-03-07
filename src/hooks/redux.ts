import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useSelector } from "react-redux";

// middleware - это то что позваляет функциям внутри себя использовать диспатч 
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
