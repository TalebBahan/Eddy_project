import { apiSlice } from "app/api/apiSlice"

export const contentApiSlice = apiSlice.injectEndpoints({
    tagTypes: ['Link'],
    endpoints: builder => ({
        getLink: builder.query({
            query: () => '/api/link',
            keepUnusedDataFor: 5,
            providesTags: ['Link']
        }),
        addLink: builder.mutation({
            query: (link) => ({
                url: '/api/link',
                method: 'POST',
                body: link
            }),
            invalidatesTags: ['Link']
        }),
        editLink: builder.mutation({
            query: (link) => ({
                url: `/api/link/${link.id}`,
                method: 'PUT',
                body: link
            }),
            invalidatesTags: ['Link']
        }),
        deleteLink: builder.mutation({
            query: (id) => ({
                url: `/api/link/${id}`,
                method: 'Delete',
                body: id
            }),
            invalidatesTags: ['Link']
        }),
    })
})

export const {
    useGetLinkQuery,
    useAddLinkMutation,
    useEditLinkMutation,
    useDeleteLinkMutation,
} = contentApiSlice 