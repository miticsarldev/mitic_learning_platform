import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

// Crée un store Redux
export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

// Typage des `dispatch` et `state`
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
