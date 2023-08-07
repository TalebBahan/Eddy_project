import React from 'react'
import CardMedia from './CardMedia';
import Card from "components/card";
import { AiOutlinePlus } from 'react-icons/ai'
import AddEditMedia from './AddEditMedia';
import { useGetMediaQuery } from './api';
import Loading from 'components/Loading';
import search from 'features/serch'
import Navbar from "components/navbar";

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
export default function Media() {
    const { data, isLoading } = useGetMediaQuery();
    const [open, setOpen] = React.useState(false)
    const [searchTerm, setSearchTerm] = React.useState('');
    const handleOpen = () => setOpen(!open);
    if (isLoading) {
        return <Loading />
    }
    const filteredData = search(data, COLUMNS, searchTerm);

    function handleSearch(event) {
        setSearchTerm(event.target.value);
    }

    return (
        <div>
            <Navbar
                searchTerm={searchTerm} handleSearch={handleSearch} withSearch={true}
            />
            <br></br>
            {/* <Upload /> */}
            <Card extra={"w-full h-full p-3"}>
                <AddEditMedia open={open} handleOpen={handleOpen} isAdd={true} />
                <div className="relative mb-3 flex items-center justify-between pt-1">
                    <h4 className="text-3xl font-bold text-navy-900 dark:text-white">
                        Media Coverage
                    </h4>
                    <button
                        onClick={handleOpen}
                        className={`flex items-center text-xl hover:cursor-pointer bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10`}>
                    
                        <AiOutlinePlus />
                    </button>

                </div>
                <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
                    {filteredData?.map(item =>
                        <CardMedia image={item.image} interests={item.interests} h_text={item.h_text} id={item._id} s_text={item.s_text} link={item.link} key={item.link} date={item.date} />
                    )
                    }
                </div>
            </Card>
        </div>
    )
}
