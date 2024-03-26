import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';

interface User {
	name: string;
	occupation: string;
	isConfirmed: boolean;
}

interface Auth {
	isAuthenticated: boolean;
	user: User | null;
}

const initialState: Auth = {
	isAuthenticated: false,
	user: null
}

const slice = createSlice({
	name: 'auth',
	initialState,
	reducers: build => ({
		logIn(state, action: PayloadAction<User | null>) {
			state.isAuthenticated = true;
			state.user = action.payload;
		},
		logOut(state) {
			state.isAuthenticated = false;
			state.user = null;
		}
	})
})

export const authSelector = (state: RootState) => state.auth
export const { logIn, logOut } = slice.actions;
export const { reducer: authReducer } = slice
