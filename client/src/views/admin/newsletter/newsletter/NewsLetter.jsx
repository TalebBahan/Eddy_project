import React from 'react'
import Table from './Table'
import { useGetnewslettersQuery } from './newsletterApi'
import search from 'features/serch'
import Navbar from "components/navbar";
import { useState } from 'react';
import Loading from 'components/Loading';
import Unauthorized from 'components/Unauthorized'
const COLUMNS = [
    {
        Header: "Subject",
        accessor: "subject",
    },
    {
        Header: "Title",
        accessor: "title",
    },
    {
        Header: "Body",
        accessor: "body",
    },
]

export default function NewsLetter() {
    const { data, isLoading, isError } = useGetnewslettersQuery()

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
            {/* <SubscriberModel /> */}
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
