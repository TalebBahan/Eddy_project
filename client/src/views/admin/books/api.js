import { apiSlice } from "app/api/apiSlice"

export const Api = apiSlice.injectEndpoints({
    tagTypes: ['book'],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => '/api/books',
            providesTags: ['book']
        }),
        createBook: builder.mutation({
            query: (book) => ({
                url: '/api/books',
                method: 'POST',
                body: book,
            }),
            invalidatesTags: ['book']
        }),
        updateBook: builder.mutation({
            query: (book) => ({
                url: `/api/books/${book.id}`,
                method: 'PUT',
                body: book.form,
            }),
            invalidatesTags: ['book']

        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/api/books/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['book']
        }),
    }),
});

export const {
    useGetBooksQuery,
    useCreateBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation,
} = Api;

