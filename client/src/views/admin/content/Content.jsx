import React from 'react'
import Carousel from './Carousel/Carousel'
import Media from './media/Media'
import About from './about/About'
import { useGetContentQuery,useGetHeroLinksQuery } from './apiContent'
import search from 'features/serch'
import Navbar from "components/navbar";
import { useState } from 'react';
import Loading from 'components/Loading';
import Unauthorized from 'components/Unauthorized'
import HeroLinks from './HeroLinks'

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
    const { data, isLoading, isError,status } = useGetContentQuery()

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
    const filterbytype = (type) => filteredData.filter(item => item.type === type);

    return (
        <div className="mt-3 grid h-full grid-cols-1 gap-10 divide-y divide-solid ">
            <Navbar
                searchTerm={searchTerm} handleSearch={handleSearch}
            />
            {filterbytype('about').length>0 && <About data={filterbytype('about')} />}
            {filterbytype('media').length>0 && <Media data={filterbytype('media')} />}
        </div>
    )
}
