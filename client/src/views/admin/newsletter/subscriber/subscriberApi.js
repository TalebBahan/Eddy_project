import { apiSlice } from "app/api/apiSlice"

export const subscriberApi = apiSlice.injectEndpoints({
    tagTypes: ['subscriber'],
    endpoints: (builder) => ({
        getSubscribers: builder.query({
            query: () => '/api/subscribers',
            providesTags: ['subscriber']
        }),
        createSubscriber: builder.mutation({
            query: (subscriber) => ({
                url: '/api/subscribers',
                method: 'POST',
                body: subscriber,
            }),
            invalidatesTags: ['subscriber']
        }),
        deleteMany: builder.mutation({
            query: (ids) => ({
                url: '/api/subscribers/deleteMany',
                method: 'POST',
                body: {ids},
            }),
            invalidatesTags: ['subscriber']
        }),
        sendIA: builder.mutation({
            query: (body) => ({
                url: '/api/newsletter/sendNewsLetter',
                method: 'POST',
                body: body,
            }),
            invalidatesTags: ['subscriber']
        }),
        updateSubscriber: builder.mutation({
            query: (subscriber) => ({
                url: `/api/subscribers/${subscriber.id}`,
                method: 'PUT',
                body: subscriber,
            }),
            invalidatesTags: ['subscriber']

        }),
        deleteSubscriber: builder.mutation({
            query: (id) => ({
                url: `/api/subscribers/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['subscriber']
        }),
    }),
});

export const {
    useGetSubscribersQuery,
    useCreateSubscriberMutation,
    useUpdateSubscriberMutation,
    useDeleteManyMutation,
    useSendIAMutation,
    useDeleteSubscriberMutation,
} = subscriberApi;
