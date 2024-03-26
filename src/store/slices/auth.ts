import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store';

const initialState = {
	email: '',
	selection: {
		club: { qty: 0, cost: 0 },
		premium: { qty: 0, cost: 0 },
	}
}


const slice = createSlice({
	name: 'auth',
	initialState,
	reducers: build => ({
		logIn(state, action) {
			state.email = action.payload;
		},
		confirm(state, action) {
			state.selection = action.payload;
		},
		checkout(state, action) {

		}
	})
})

export const authSelector = (state: RootState) => state.auth
export const { logIn, confirm } = slice.actions;
export const { reducer: authReducer } = slice
