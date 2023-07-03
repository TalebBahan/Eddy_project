import { apiSlice } from "app/api/apiSlice"

export const interestsApi = apiSlice.injectEndpoints({
    tagTypes: ['interests'],
    endpoints: (builder) => ({
        getInterestss: builder.query({
            query: () => '/api/interests',
            providesTags: ['interests']
        }),
        createInterests: builder.mutation({
            query: (interests) => ({
                url: '/api/interests',
                method: 'POST',
                body: interests,
            }),
            invalidatesTags: ['interests']
        }),
        updateInterests: builder.mutation({
            query: (interests) => ({
                url: `/api/interests/${interests.id}`,
                method: 'PUT',
                body: interests,
            }),
            invalidatesTags: ['interests']

        }),
        deleteInterests: builder.mutation({
            query: (id) => ({
                url: `/api/interests/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['interests']
        }),
    }),
});

export const {
    useGetInterestssQuery,
    useCreateInterestsMutation,
    useUpdateInterestsMutation,
    useDeleteInterestsMutation,
} = interestsApi;

