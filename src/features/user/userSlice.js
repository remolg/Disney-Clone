import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: '',
    email: '',
    photo: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.user = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },
        setSignOutState: state => {
            state.user = null;
            state.email = null;
            state.photo = null;
        },
    },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = state => state.user.user;
export const selectUserEmail = state => state.user.email;
export const selectUserPhoto = state => state.user.photo;


export default userSlice.reducer;