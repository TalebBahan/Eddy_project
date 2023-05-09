import React from 'react'
import Carousel from './Carousel/Carousel'
import Media from './media/Media'
import About from './about/About'
import { useGetContentQuery } from './apiContent'
import search from 'features/serch'
import Navbar from "components/navbar";
import { useState } from 'react';
const COLUMNS = [
    {
        Header: "Header Text",
        accessor: "h_text",
    },
    {
        Header: "scheduledTime",
        accessor: "s_text",
    },
    {
        Header: "scheduledTime",
        accessor: "link",
    },
]
export default function Content() {
    const { data, isLoading, isError } = useGetContentQuery()

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
    const filterbytype = (type) => filteredData.filter(item => item.type === type);

    return (
        <div className="mt-3 grid h-full grid-cols-1 gap-10 divide-y divide-solid ">
            <Navbar
                searchTerm={searchTerm} handleSearch={handleSearch}
            />
            {filterbytype('carousel').length>0 && <Carousel data={filterbytype('carousel')} />}
            {filterbytype('about').length>0 && <About data={filterbytype('about')} />}
            {filterbytype('media').length>0 && <Media data={filterbytype('media')} />}
        </div>
    )
}
