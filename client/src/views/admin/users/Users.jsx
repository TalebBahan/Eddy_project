import React from 'react'
import Table from './Table'
import { useGetUsersQuery, useGetConnectedUserQuery } from './apiUsers';
const COLUMNS = [
    {
        Header: "Email",
        accessor: "email",
    },
    {
        Header: "User name",
        accessor: "username",
    },
]

export default function Users() {
    console.log(useGetConnectedUserQuery())
    const { data, isLoading } = useGetUsersQuery()
    const [a,sa]=React.useState('644ac60865ae9b5aca5059f7')
    return (
        <div className='mt-3 grid h-full grid-cols-1 gap-10 divide-y divide-solid '>
            {!isLoading &&
                <Table
                    columnsData={COLUMNS}
                    tableData={data ? data : []}
                />}
        </div>
    )
}
