import { apiSlice } from "app/api/apiSlice"

export const linkedinApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['linkedin'],
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => `/api/linkedin`,
      providesTags: ['linkedin']
    }),
    getPostById: builder.query({
      query: (id) => `/api/linkedin/${id}`,
    }),
    createPost: builder.mutation({
      query: (body) => ({
        url: `/api/linkedin`,
        method: "POST",
        body,
      }),
      invalidatesTags: ['linkedin']
    }),
    updatePost: builder.mutation({
      query: ({ id, body }) => ({
        url: `/api/linkedin/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ['linkedin']
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/api/linkedin/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['linkedin']
    }),
  }),
})

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = linkedinApiSlice

