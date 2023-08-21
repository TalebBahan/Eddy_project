import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_API}/api/data` }),
    endpoints: (builder) => ({
        contact: builder.mutation({
            query: (Data) => ({
                url: '/contact',
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


        getAll: builder.query({
            query: () => '/',
            transformResponse: res => res,
        }),

        getYouTube: builder.query({
            query: () => '/youtube',
            transformResponse: res => res,
        }),
        getContent: builder.query({
            query: () => '/content',
            transformResponse: res => res,
        }),
        getAboutImages: builder.query({
            query: () => '/aboutImages',
            transformResponse: res => res,
        }),
        getLinkedin: builder.query({
            query: () => '/linkedin',
            transformResponse: res => res,
        }),
        getArticles: builder.query({
            query: () => '/articles',
            transformResponse: res => res,
        }),
        getBooks: builder.query({
            query: () => '/books',
            transformResponse: res => res,
        }),
        getInterests: builder.query({
            query: () => '/interests',
            transformResponse: res => res,
        }),
        getMedia: builder.query({
            query: () => '/media',
            transformResponse: res => res,
        }),
        getHero: builder.query({
            query: () => '/hero',
            transformResponse: res => res,
        }),
        getAchievements: builder.query({
            query: () => '/achievements',
            transformResponse: res => res,
        }),


    })
})

export const {
    useGetDataQuery,
    useContactMutation,
    useSubscribeMutation,
    useGetYouTubeQuery,
    useGetContentQuery,
    useGetAboutImagesQuery,
    useGetLinkedinQuery,
    useGetArticlesQuery,
    useGetBooksQuery,
    useGetInterestsQuery,
    useGetMediaQuery,
    useGetHeroQuery,
    useGetAllQuery,
    useGetAchievementsQuery

} = apiSlice