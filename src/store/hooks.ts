import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import { type RootState, type AppDispatch } from "./index.ts";

type dispatchFnType = () => AppDispatch;
const useAppDispatch: dispatchFnType = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppDispatch, useAppSelector };
