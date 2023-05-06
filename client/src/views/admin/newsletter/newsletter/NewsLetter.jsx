import React from 'react'
import Table from './Table'
import { useGetnewslettersQuery } from './newsletterApi'

const COLUMNS = [
    {
        Header: "Title",
        accessor: "title",
    },
    {
        Header: "scheduledTime",
        accessor: "scheduledTime",
    },
]

export default function NewsLetter() {
    const { data, isLoading, isError } = useGetnewslettersQuery()
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
