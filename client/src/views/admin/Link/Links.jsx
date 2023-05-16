import React from 'react'
import Table from './Table'
import { useGetLinkQuery } from './apiLink';
import Loading from 'components/Loading';
import Unauthorized from 'components/Unauthorized'
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

export default function Links() {
    const { data, isLoading,isError } = useGetLinkQuery()
    if (isLoading) {
        return <Loading />;
    }
    
    if (isError) {
        return <Unauthorized />;
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
