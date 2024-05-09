import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name        : null,
        email       : null,
        token       : null
    },
    reducers: {
        setUser: ( state, action ) => {
            state.name      = action.payload.name
            state.email     = action.payload.email
            state.token     = action.payload.token
        }
    }
});

export const { setUser } = userSlice.actions
export default userSlice.reducer