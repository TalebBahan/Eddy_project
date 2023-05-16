import { apiSlice } from "app/api/apiSlice"

export const usersApiSlice = apiSlice.injectEndpoints({
    tagTypes: ['Users'],
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/api/users',
            keepUnusedDataFor: 5,
            providesTags: ['Users'],
            method: 'GET'
        }),
        getUserById: builder.query({
            query: (id) => `/api/users/${id}`,
            providesTags: (result, error, id) => [{ type: 'Users', id }],
            invalidatesTags: [{ type: 'Users' }],
            method: 'GET'
        }),
        getConnectedUser: builder.query({
            query: () => '/api/users/connectedUser',
            keepUnusedDataFor: 5,
            method: 'GET'
        }),
        addUsers: builder.mutation({
            query: (users) => ({
                url: '/api/users',
                method: 'POST',
                body: users
            }),
            invalidatesTags: ['Users']
        }),
        editUsers: builder.mutation({
            query: ({ id, roles }) => ({
                url: `/api/users/${id}/roles`,
                method: 'PUT',
                body: { roles }
            }),
            invalidatesTags: ['Users']
        }),
        deleteUsers: builder.mutation({
            query: (id) => ({
                url: `/api/users`,
                method: 'Delete',
                body: {id}
            }),
            invalidatesTags: ['Users']
        }),
        updateUserRoles: builder.mutation({
            query: ({ _id, roles }) => ({
                url: `/api/users/${_id}`,
                method: 'PUT',
                body: { roles }
            }),
            invalidatesTags: ['Users']
        }),
    })
})

export const {
    useGetUsersQuery,
    useGetConnectedUserQuery,
    useGetUserByIdQuery,
    useAddUsersMutation,
    useEditUsersMutation,
    useDeleteUsersMutation,
    useUpdateUserRolesMutation
} = usersApiSlice
