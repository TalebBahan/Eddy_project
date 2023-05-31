import { apiSlice } from "app/api/apiSlice"

export const contentApiSlice = apiSlice.injectEndpoints({
    tagTypes: ['Product'],
    endpoints: builder => ({
        getContent: builder.query({
            query: () => '/api/content',
            keepUnusedDataFor: 5,
            providesTags: ['Product']
        }),
        getHeroLinks: builder.query({
            query: () => '/api/heroLinks',
            keepUnusedDataFor: 5,
            providesTags: ['Product']
        }),
        editHeroLinks: builder.mutation({
            query: (hero) => ({
                url: `/api/heroLinks/${hero.id}`,
                method: 'PUT',
                body: hero
            }),
            invalidatesTags: ['Product']
        }),
        getAboutImages: builder.query({
            query: () => '/api/content/imageAbout',
            keepUnusedDataFor: 5,
            providesTags: ['Product']
        }),
        addContent: builder.mutation({
            query: (content) => ({
                url: '/api/content',
                method: 'POST',
                body: content
            }),
            invalidatesTags: ['Product']
        }),
        addAboutImage: builder.mutation({
            query: (image) => ({
                url: '/api/content/imageAbout',
                method: 'POST',
                body: image
            }),
            invalidatesTags: ['Product']
        }),
        deleteContent: builder.mutation({
            query: (id) => ({
                url: `/api/content/${id}`,
                method: 'Delete',
                body: id
            }),
            invalidatesTags: ['Product']
        }),
        editContent: builder.mutation({
            query: (content) => ({
                url: `/api/content/${content.id}`,
                method: 'PUT',
                body: content
            }),
            invalidatesTags: ['Product']
        }),
        deleteAboutImage: builder.mutation({
            query: (id) => ({
                url: `/api/content/imageAbout/${id}`,
                method: 'Delete',
                body: id
            }),
            invalidatesTags: ['Product']
        }),
    })

})

export const {
    useGetContentQuery,
    useGetHeroLinksQuery,
    useGetAboutImagesQuery,
    useAddContentMutation,
    useAddAboutImageMutation,
    useDeleteContentMutation,
    useDeleteAboutImageMutation,
    useEditContentMutation,
    useEditHeroLinksMutation,
    
} = contentApiSlice 