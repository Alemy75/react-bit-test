import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    TableItem,
    ControlValue,
    GraphItem,
    RootControlValue,
} from '../types/widget.types';

export const widgetApi = createApi({
    reducerPath: 'widgetApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dashboard.bit76.ru/' }),
    endpoints: (builder) => ({
        getControlValue: builder.query<ControlValue, void>({
            query: () => ({
                url: `controlValue/`,
            }),
            transformResponse: (response: RootControlValue) => {
                return response.value;
            },
        }),
        getTableValue: builder.query<TableItem[], void>({
            query: () => ({
                url: `tableValues/`,
            }),
        }),
        getGraphValue: builder.query<GraphItem[], void>({
            query: () => ({
                url: `graphValues/`,
            }),
        }),
    }),
});

export const {
    useGetControlValueQuery,
    useGetTableValueQuery,
    useGetGraphValueQuery,
} = widgetApi;
