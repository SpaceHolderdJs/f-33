import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter";
import { usersSlice } from "./slices/users";

export const store = configureStore({
    reducer: combineReducers({
        counter: counterSlice.reducer,
        users: usersSlice.reducer,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
