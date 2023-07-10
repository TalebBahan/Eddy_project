import { apiSlice } from "app/api/apiSlice"

export const newsletterApi = apiSlice.injectEndpoints({
    tagTypes: ['newsletter'],
    endpoints: (builder) => ({
        getnewsletters: builder.query({
            query: () => '/api/newsletter',
            providesTags: ['newsletter']
        }),
        getCheckBoxes: builder.query({
            query: () => `/api/data/idTitle`,
            providesTags: ['newsletter', 'articles', 'books']
        }),
        getArticlesMediasBooksByIds: builder.query({
            query: (data) => ({
                url: `/api/newsletter/getArticlesMediasBooksByIds`,
                method: 'POST',
                body: data,
            }),       
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
                url: `/api/newsletter/${newsletter.id}`,
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
                url: `/api/newsletter/deleteA`,
                method: 'DELETE',
                body:{newsletterId,articleId}
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
    useGetCheckBoxesQuery,
    useGetArticlesMediasBooksByIdsQuery
} = newsletterApi;
