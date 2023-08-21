import { apiSlice } from "app/api/apiSlice"

export const acheivementsApi = apiSlice.injectEndpoints({
    tagTypes: ['acheivements'],
    endpoints: (builder) => ({
        getAcheivements: builder.query({
            query: () => `/api/achievements`,
            providesTags: ['acheivements']
        }),
        updateAcheivement: builder.mutation({
            query: (body) => ({
                url: `/api/achievements/${body.id}`,
                method: "PUT",
                body
            }),
            invalidatesTags: ['acheivements']
        }),
    }),
});

export const {
    useGetAcheivementsQuery,
    useUpdateAcheivementMutation,
} = acheivementsApi;

