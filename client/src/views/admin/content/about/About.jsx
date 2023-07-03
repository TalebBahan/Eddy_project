import React from 'react'
import Card from 'components/card';
import CardAbout from "./CardAbout";
import { AiOutlinePlus } from 'react-icons/ai'
import Images from './Images';
import { useState } from "react";
import AddEditAbout from "./AddEditAbout";
import Upload from './Upload';
export default function About({data}) {
    const [open, setOpen] = useState(false)
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    const handleOpen = () => setOpen(!open);
    return (
        <div >
            <br></br>
            <AddEditAbout open={open} handleOpen={handleOpen} isAdd={true} />
            {/* <Upload /> */}
            <Card extra={"w-full h-full p-3"}>
                <div className="relative mb-3 flex items-center justify-between pt-1">
                    <h4 className="text-3xl font-bold text-navy-700 dark:text-white">
                        About Layout
                    </h4>
                    <button
                        onClick={handleOpen}
                        className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-none  text-brand-200 hover:cursor-pointer"
                    >
                        <AiOutlinePlus />
                    </button>

                </div>
                <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
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
