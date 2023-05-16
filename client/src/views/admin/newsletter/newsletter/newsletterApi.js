import { apiSlice } from "app/api/apiSlice"

export const newsletterApi = apiSlice.injectEndpoints({
    tagTypes: ['newsletter'],
    endpoints: (builder) => ({
        getnewsletters: builder.query({
            query: () => '/api/newsletter',
            providesTags: ['newsletter']
        }),
        createnewsletter: builder.mutation({
            query: (newsletter) => ({
                url: '/api/newsletter',
                method: 'POST',
                body: newsletter,
            }),
            invalidatesTags: ['newsletter']
        }),
        updatenewsletter: builder.mutation({
            query: (newsletter) => ({
                url: `/api/newsletters/${newsletter.id}`,
                method: 'PUT',
                body: newsletter,
            }),
            invalidatesTags: ['newsletter']

        }),
        addArticle: builder.mutation({
            query: ({id,data}) => ({

                url: `/api/newsletter/${id}`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['newsletter']

        }),
        deletenewsletter: builder.mutation({
            query: (id) => ({
                url: `/api/newsletter/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['newsletter']
        }),
        deleteArticle: builder.mutation({
            query: ({newsletterId,articleId}) => ({
                url: `/api/newsletter/newsletters/${newsletterId}/articles/${articleId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['newsletter']
        }),
    }),
});

export const {
    useGetnewslettersQuery,
    useCreatenewsletterMutation,
    useAddArticleMutation,
    useUpdatenewsletterMutation,
    useDeletenewsletterMutation,
    useDeleteArticleMutation,
} = newsletterApi;
