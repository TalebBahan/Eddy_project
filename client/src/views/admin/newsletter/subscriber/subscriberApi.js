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
        send: builder.mutation({
            query: (body) => ({
                url: '/api/newsletter/send',
                method: 'POST',
                body: body,
            }),
            invalidatesTags: ['subscriber']
        }),
        sendIA: builder.mutation({
            query: (body) => ({
                url: '/api/newsletter/sendIA',
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
    useSendMutation,
    useSendIAMutation,
    useDeleteSubscriberMutation,
} = subscriberApi;
