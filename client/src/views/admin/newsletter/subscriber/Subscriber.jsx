import React from 'react'
import Table from './Table'
import { useGetSubscribersQuery } from './subscriberApi'
import search from 'features/serch'
import Navbar from "components/navbar";
import { useState } from 'react'
import Loading from 'components/Loading';
import Unauthorized from 'components/Unauthorized'
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
    // {
    //     Header: "Location",
    //     accessor: "location",
    // },
]

export default function Subscriber() {
    const { data, isLoading, isError } = useGetSubscribersQuery();
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
            <Table columnsData={COLUMNS} tableData={filteredData} />
        </div>
    );
}

