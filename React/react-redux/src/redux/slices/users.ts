import { createSlice } from "@reduxjs/toolkit";

export type UserType = {
    isAdmin?: boolean;
    name: string;
    age: number;
};

export const usersSlice = createSlice({
    name: "users",
    // initialState: new Array(5).fill({}).map(() => createUser()),
    initialState: [],
    reducers: {
        create: (state: UserType[], action) => {
            state.push(action.payload);
        },
        deleteUser: (state: UserType[], action) => {
            const indexOfUserToDelete = state.findIndex(
                (user) => user.name === action.payload
            );

            state.splice(indexOfUserToDelete, 1);
        },
        setInitialUsers: (state: UserType[], action) => {
            action.payload.forEach((user: UserType) => state.push(user));
        },
        setUserAdmin(state: UserType[], action) {
            const user = state.find((user) => user.name === action.payload);
            if (user) user.isAdmin = true;
        }

    },
});

export const { create, deleteUser, setInitialUsers, setUserAdmin } = usersSlice.actions;
