import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_API}/api` }),
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => '/data',
            transformResponse: res => res,
        }),
        contact: builder.mutation({
            query: (Data) => ({
                url: '/data/contact',
                method: 'POST',
                body: Data
            }),
        }),
        subscribe: builder.mutation({
            query: (Data) => ({
                url: '/subscribers',
                method: 'POST',
                body: Data
            }),
        }),
        // /book-to-read/:id
        getBook: builder.query({
            query: (id) => `/data/book-to-read/${id}`,
            transformResponse: res => res,
        }),

    })
})

export const {
    useGetDataQuery,
    useContactMutation,
    useSubscribeMutation,
    useGetBookQuery
} = apiSlice