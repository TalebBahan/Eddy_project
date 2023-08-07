import { apiSlice } from "app/api/apiSlice"

export const heroApi = apiSlice.injectEndpoints({
    tagTypes: ['hero'],
    endpoints: (builder) => ({
        getHeros: builder.query({
            query: () => '/api/hero',
            providesTags: ['hero']
        }),
        createHero: builder.mutation({
            query: (hero) => ({
                url: '/api/hero',
                method: 'POST',
                body: hero,
            }),
            invalidatesTags: ['hero']
        }),
        updateHero: builder.mutation({
            query: (hero) => ({
                url: `/api/hero/${hero.id}`,
                method: 'PUT',
                body: hero.formData,
            }),
            invalidatesTags: ['hero']

        }),
        deleteHero: builder.mutation({
            query: (id) => ({
                url: `/api/hero/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['hero']
        }),
    }),
});

export const {
    useGetHerosQuery,
    useCreateHeroMutation,
    useUpdateHeroMutation,
    useDeleteHeroMutation,
} = heroApi;

