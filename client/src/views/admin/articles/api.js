import { apiSlice } from "app/api/apiSlice"

export const Api = apiSlice.injectEndpoints({
    tagTypes: ['article'],
    endpoints: (builder) => ({
        getArticles: builder.query({
            query: () => '/api/articles',
            providesTags: ['article']
        }),
        createArticle: builder.mutation({
            query: (article) => ({
                url: '/api/articles',
                method: 'POST',
                body: article,
            }),
            invalidatesTags: ['article']
        }),
        //withoutimage
        createArticleWithoutImage: builder.mutation({
            query: (article) => ({
                url: '/api/articles/withoutimage',
                method: 'POST',
                body: article,
            }),
            invalidatesTags: ['article']
        }),
        updateArticle: builder.mutation({
            query: (article) => ({
                url: `/api/articles/${article.id}`,
                method: 'PUT',
                body: article.form,
            }),
            invalidatesTags: ['article']

        }),
        deleteArticleB: builder.mutation({
            query: (id) => ({
                url: `/api/articles/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['article']
        }),
    }),
});

export const {
    useGetArticlesQuery,
    useCreateArticleMutation,
    useUpdateArticleMutation,
    useDeleteArticleBMutation,
    useCreateArticleWithoutImageMutation
} = Api;

