import React from 'react'
import Table from './Table'
import { useGetLinkQuery } from './apiLink';
import RolesList from './RolesList';
const COLUMNS = [
    {
        Header: "Link Text",
        accessor: "text",
    },
    {
        Header: "Link @",
        accessor: "link",
    },
    {
        Header: "Platform",
        accessor: "platform",
    },
]

export default function Users() {
    const { data, isLoading } = useGetLinkQuery()
    return (
        <div className='mt-3 grid h-full grid-cols-1 gap-10 divide-y divide-solid '>
            {!isLoading &&
                <Table
                    columnsData={COLUMNS}
                    tableData={data}
                />}
                <RolesList />
        </div>
    )
}
