import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '@/store/slices/auth';
import { statusReducer } from '@/store/slices/status';

// create the store instance per request while retaining strong type safety
export const makeStore = () => configureStore({
	reducer: {
		auth: authReducer,
		status: statusReducer,
	}
})

// infer the type from makeStore
export type AppStore = ReturnType<typeof makeStore>
// infer the state and dispatch type from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
