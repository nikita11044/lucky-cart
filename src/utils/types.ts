import {rootReducer, store} from "../app/store";

export type RootReducerType = typeof rootReducer
export type AppRootStateType = ReturnType<RootReducerType>
export type AppDispatchType = typeof store.dispatch
export type ThunkError = { rejectValue: string }