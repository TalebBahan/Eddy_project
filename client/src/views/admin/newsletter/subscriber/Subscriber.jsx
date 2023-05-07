import React from 'react'
import Table from './Table'
import { useGetSubscribersQuery } from './subscriberApi'

const COLUMNS = [
    {
        Header: "Email",
        accessor: "email",
    },
    // {
    //     Header: "First Name",
    //     accessor: "firstName",
    // },
    // {
    //     Header: "Last Name",
    //     accessor: "lastName",
    // },
    {
        Header: "Interests",
        accessor: "interests",
    },
    {
        Header: "Age",
        accessor: "age",
    },
    {
        Header: "Location",
        accessor: "location",
    },
]

export default function Subscriber() {
    const { data, isLoading, isError } = useGetSubscribersQuery()
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {isError.message}</div>;
    }
    return (
        <div className='mt-3 grid h-full grid-cols-1 gap-10 divide-y divide-solid '>
            <Table
                columnsData={COLUMNS}
                tableData={data}
            />
        </div>
    )
}
