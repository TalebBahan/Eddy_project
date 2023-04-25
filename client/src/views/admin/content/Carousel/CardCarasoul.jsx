import React from 'react'
import Card from 'components/card'
import { AiFillDelete } from 'react-icons/ai'
import AddEditCarousel from './AddEditCarousel'
export default function CardCarasoul({ h_text, s_text, image, link }) {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(!open);
    return (
        <Card
            extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white`}
        >
            <AddEditCarousel open={open} handleOpen={handleOpen} h_text={h_text} s_text={s_text} link={link} />
            <div className="h-full w-full">
                <div className="relative w-full">
                    <img
                        src={image}
                        className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
                        alt=""
                    />
                    <button

                        className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-none  text-brand-200 hover:cursor-pointer"
                    >
                        <AiFillDelete color='rgb(234, 62, 42)' />
                    </button>
                </div>

                <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
                    <div className="mb-2">
                        <p className="text-lg font-bold text-navy-700 dark:text-white">
                            {" "}
                            {h_text}{" "}
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
                            By {s_text}{" "}
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-500 md:mt-2">
                            {"Learn more @ "}
                            {link}{" "}
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
                    <button
                        onClick={handleOpen}
                        href=""
                        className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
                    >
                        Edit
                    </button>
                </div>
            </div>
        </Card>
    )
}
