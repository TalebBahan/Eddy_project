import React from 'react'
import Upload from './Upload'
import CardMedia from './CardMedia';
import NFt3 from "assets/img/nfts/Nft3.png";
import Card from "components/card";
import { AiOutlinePlus } from 'react-icons/ai'
import AddEditMedia from './AddEditMedia';
export default function Media({ data }) {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(!open);
    return (
        <div>
            <br></br>
            {/* <Upload /> */}
            <Card extra={"w-full h-full p-3"}>
                <AddEditMedia open={open} handleOpen={handleOpen} isAdd={true} />
                <div className="relative mb-3 flex items-center justify-between pt-1">
                    <h4 className="text-3xl font-bold text-navy-900 dark:text-white">
                        Media Coverage and Articles
                    </h4>
                    <button
                        onClick={handleOpen}
                        className={`flex items-center text-xl hover:cursor-pointer bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10`}>
                    
                        <AiOutlinePlus />
                    </button>

                </div>
                <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
                    {data.map(item =>
                        <CardMedia image={item.image} h_text={item.h_text} id={item._id} s_text={item.s_text} link={item.link} key={item.link} date={item.date} />
                    )
                    }
                </div>
            </Card>
        </div>
    )
}
