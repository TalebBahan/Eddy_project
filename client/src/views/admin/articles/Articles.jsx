import React from 'react';
import ArticleCard from './Card';
import './style.css';
import Loading from 'components/Loading';
import Unauthorized from 'components/Unauthorized';
import Form from './Form';
import { useGetArticlesQuery } from './api';
import './style.css'
import Card from 'components/card';
import Navbar from "components/navbar";
import search from 'features/serch'
const COLUMNS = [
    {
        Header: "Title",
        accessor: "title",
    },
    {
        Header: "body",
        accessor: "body",
    },
]
const Articles = () => {
    const { data, isLoading, isError } = useGetArticlesQuery()
    const [open, setOpen] = React.useState(false)
    const [searchTerm, setSearchTerm] = React.useState('');
    const handleOpenModal = () => setOpen(!open);
    console.log(useGetArticlesQuery())
    if (isLoading) {
        return <Loading />;
    }
    console.log(data)
    if (isError) {
        return <Unauthorized />;
    }

    const filteredData = search(data, COLUMNS, searchTerm);
    function handleSearch(event) {
        setSearchTerm(event.target.value);
    }
    return (
        <div className="mt-3 grid h-full grid-cols-1 gap-10 divide-y divide-solid ">
            <div>
                <br></br>
                <Navbar
                    searchTerm={searchTerm} handleSearch={handleSearch}
                />
                <Card extra={"w-full h-full p-4 sm:overflow-x-auto"}>
                    <Form open={open} handleClose={handleOpenModal} isAdd={true} />
                    <div className="relative flex items-center justify-between">
                        <div className="text-xl font-bold text-navy-700 dark:text-white">
                            Articles
                        </div>
                        <button
                            className="text-sm font-bold text-green-500 dark:text-white"
                            onClick={handleOpenModal}
                        >
                            Add
                        </button>
                    </div>
                    <div>
                        {filteredData?.map((article) => (
                            <ArticleCard {...article} />
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Articles;
