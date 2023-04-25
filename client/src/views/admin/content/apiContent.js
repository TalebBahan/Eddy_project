import { apiSlice } from "app/api/apiSlice"

export const contentApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getContent: builder.query({
            query: () => '/api/content',
            keepUnusedDataFor: 5,
        })
    })
})

export const {
    useGetContentQuery
} = contentApiSlice 