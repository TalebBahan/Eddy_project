import React from 'react'
import Table from './Table'
import { useGetUsersQuery } from './apiUsers';
import search from 'features/serch'
import Navbar from "components/navbar";
import { useState } from 'react';
import Loading from 'components/Loading';
import Unauthorized from 'components/Unauthorized'
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
        return <Loading />;
    }

    if (isError) {
        return <Unauthorized />;
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
