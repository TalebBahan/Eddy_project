import React from 'react'
import Table from './Table'
import { useGetUsersQuery } from './apiUsers';
import search from 'features/serch'
import Navbar from "components/navbar";
import { useState } from 'react';
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
    const { data, isLoading, isError } = useGetUsersQuery();
    const [searchTerm, setSearchTerm] = useState('');

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {isError.message}</div>;
    }

    const filteredData = search(data, COLUMNS, searchTerm);

    function handleSearch(event) {
        setSearchTerm(event.target.value);
    }
    return (
        <div className='mt-3 grid h-full grid-cols-1 gap-10 divide-y divide-solid '>
            <Navbar
                searchTerm={searchTerm} handleSearch={handleSearch}
            />
            <Table
                columnsData={COLUMNS}
                tableData={filteredData}
            />
        </div>
    )
}
