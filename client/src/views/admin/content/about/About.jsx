import React from 'react'
import Card from 'components/card';
import CardAbout from "./CardAbout";
import { AiOutlinePlus } from 'react-icons/ai'
import Images from './Images';
import { useState } from "react";
import AddEditAbout from "./AddEditAbout";
import Upload from './Upload';
export default function About({ data }) {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(!open);
    return (
        <div >
            <br></br>
            <AddEditAbout open={open} handleOpen={handleOpen} isAdd={true} />
            <Card extra={"w-full h-full p-3"}>
                <div className="relative mb-3 flex items-center justify-between pt-1">
                    <h4 className="text-3xl font-bold text-navy-700 dark:text-white">
                        About Layout
                    </h4>
                    <button
                        onClick={handleOpen}
                        className={`flex items-center text-xl hover:cursor-pointer bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10`}>
                        <AiOutlinePlus />
                    </button>

                </div>
                <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
                    {data.map(item =>
                        <CardAbout h_text={item.h_text} s_text={item.s_text} link={item.link} id={item._id} key={item.link} date={item.date} />
                    )
                    }


                </div>
                <div>
                    <Images />
                    <Upload />
                </div>
            </Card>
        </div>
    )
}
