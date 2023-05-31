import { apiSlice } from "app/api/apiSlice"

export const googleApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['Youtube'],
  endpoints: builder => ({
    googleLogin: builder.query({
      query: (user) => `/api/google/login${user}`,
      method: "GET",
      
    }),
    uploadVideo: builder.mutation({
      query: (video) => ({
        url: `/api/google/upload`,
        method: "POST",
        body: video,

      }),
    }),
    getVideos: builder.query({
      query: (id) => `/api/google/videos/${id}`,
      method: "GET",
      providesTags: ['Youtube']
    }),
    getOneVideo: builder.query({
      query: (id) => `/google/videos/?id=${id}`,
      method: "GET",
    }),
    updateVideo: builder.mutation({
      query: (data) => ({
        url: `/api/google/videos/${data.videoId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ['Youtube']
    }),
    deleteVideo: builder.mutation({
      query: (id) => ({
        url: `/api/google/videos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Youtube']
    }),



    getReVideos: builder.query({
      query: () => '/api/youtube',
      providesTags: ['Youtube']   
    }),
    addVideo: builder.mutation({
      query: (videoData) => ({
        url: '/api/youtube',
        method: 'POST',
        body: videoData,
      }),
      invalidatesTags: ['Youtube']
    }),
    removeVideo: builder.mutation({
      query: (id) => ({
        url: `/api/youtube/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Youtube']
    }),
  }),
});

export const {
  useGoogleLoginQuery,
  useGoogleCallbackQuery,
  useUploadVideoMutation,
  useGetVideosQuery,
  useGetOneVideoQuery,
  useUpdateVideoMutation,
  useDeleteVideoMutation,
  useRemoveVideoMutation,
  useAddVideoMutation,
  useGetReVideosQuery,
  
} = googleApiSlice;
