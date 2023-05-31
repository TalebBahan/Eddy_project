import { apiSlice } from "app/api/apiSlice"

export const linkedinApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['linkdin'],
  endpoints: builder => ({
    uploadVideo: builder.mutation({
      query: (video) => ({
        url: `/api/linkedin/upload`,
        method: "POST",
        body: video,

      }),
    }),
    getPosts: builder.query({
      query: () => `/api/linkedin/Posts`,
      method: "GET",
      providesTags: ['linkdin']
    }),
    getOneVideo: builder.query({
      query: (id) => `/linkedin/videos/?id=${id}`,
      method: "GET",
    }),
    updateVideo: builder.mutation({
      query: (data) => ({
        url: `/api/linkedin/videos/${data.videoId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ['linkdin']
    }),
    deleteVideo: builder.mutation({
      query: (id) => ({
        url: `/api/linkedin/videos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['linkdin']
    }),



    getReVideos: builder.query({
      query: () => '/api/linkdin',
      providesTags: ['linkdin']   
    }),
    addVideo: builder.mutation({
      query: (videoData) => ({
        url: '/api/linkdin',
        method: 'POST',
        body: videoData,
      }),
      invalidatesTags: ['linkdin']
    }),
    removeVideo: builder.mutation({
      query: (id) => ({
        url: `/api/linkdin/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['linkdin']
    }),
  }),
});

export const {
  useGetPostsQuery,
  
} = linkedinApiSlice;
