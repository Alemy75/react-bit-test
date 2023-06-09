import { configureStore } from '@reduxjs/toolkit'
import widgetSlice from './widget.slice'
import { setupListeners } from "@reduxjs/toolkit/query";
import { widgetApi } from './widget.api'

export const store = configureStore({
	reducer: {
		widget: widgetSlice,
		[widgetApi.reducerPath]: widgetApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(widgetApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch