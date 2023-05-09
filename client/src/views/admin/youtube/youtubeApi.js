import { apiSlice } from "app/api/apiSlice"

export const googleApiSlice = apiSlice.injectEndpoints({
    tagTypes: ['Users'],
    endpoints: builder => ({
    googleLogin: builder.query({
      query: (user) => `/api/google/login${user}`,
      method: "GET",
    }),
    uploadVideo: builder.mutation({
      query: ({ video }) => ({
        url: `/api/google/upload`,
        method: "POST",
        body: video,
      }),
    }),
    getVideos: builder.query({
      query: (id) => `/api/google/videos/${id}`,
      method: "GET",
    }),
    getOneVideo: builder.query({
      query: (id) => `/google/videos/?id=${id}`,
      method: "GET",
    }),
  }),
});

export const {
  useGoogleLoginQuery,
  useGoogleCallbackQuery,
  useUploadVideoMutation,
  useGetVideosQuery,
  useGetOneVideoQuery,
} = googleApiSlice;
