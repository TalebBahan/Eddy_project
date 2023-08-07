import { apiSlice } from "app/api/apiSlice"

export const mediaApi = apiSlice.injectEndpoints({
    tagTypes: ['Product'],
    endpoints: builder => ({
        getMedia: builder.query({
            query: () => '/api/media',
            keepUnusedDataFor: 5,
            providesTags: ['Product']
        }),
        addMedia: builder.mutation({
            query: (media) => ({
                url: '/api/media',
                method: 'POST',
                body: media
            }),
            invalidatesTags: ['Product']
        }),
        deleteMedia: builder.mutation({
            query: (id) => ({
                url: `/api/media/${id}`,
                method: 'Delete',
                body: id
            }),
            invalidatesTags: ['Product']
        }),
        editMedia: builder.mutation({
            query: (media) => ({
                url: `/api/media/${media.id}`,
                method: 'PUT',
                body: media.form
            }),
            invalidatesTags: ['Product']
        }),
    })

})

export const {
    useGetMediaQuery,
    useAddMediaMutation,
    useDeleteMediaMutation,
    useEditMediaMutation,
    
} = mediaApi