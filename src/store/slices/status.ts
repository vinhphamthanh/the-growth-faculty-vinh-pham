import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store';

const initialState = {
	loading: false,
	error: null,
}

const slice = createSlice({
	name: 'status',
	initialState,
	reducers: {
		setLoading(state, action) {
			state.loading = action.payload;
		}
	}
});

export const appStatusSelector = (state: RootState) => state.status;
export const { setLoading } = slice.actions;
export const { reducer: statusReducer } = slice
