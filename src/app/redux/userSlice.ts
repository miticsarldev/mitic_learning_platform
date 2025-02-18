import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Définition du type d'utilisateur
interface UserState {
    id: string | null;
    email: string | null;
    username: string | null;
    role: string | null;
    accessToken: string | null;
}

const initialState: UserState = {
    id: null,
    email: null,
    username: null,
    role: null,
    accessToken: null,
};

// Création du slice utilisateur
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.username = action.payload.username;
            state.role = action.payload.role;
            state.accessToken = action.payload.accessToken;
        },
        logout: (state) => {
            state.id = null;
            state.email = null;
            state.username = null;
            state.role = null;
            state.accessToken = null;
        },
    },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
