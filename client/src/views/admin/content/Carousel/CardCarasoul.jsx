import React from 'react'
import Card from 'components/card'
import AddEditCarousel from './AddEditCarousel'
export default function CardCarasoul({ h_text, s_text, reward, id }) {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(!open);
    return (
        <Card
            extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white`}
        >
            <AddEditCarousel open={open} handleOpen={handleOpen} reward={reward} h_text={h_text} s_text={s_text} id={id} />
            <div className="h-full w-full">
                <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
                    <div className="mb-2">
                        <p className="text-lg font-bold text-navy-700 dark:text-white">
                            {" "}
                            {h_text}{" "}
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
                            {s_text}{" "}
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
                            {reward}{" "}
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
                    <button
                        onClick={handleOpen}
                        href=""
                        className="flex flex-row items-center justify-center w-24 h-8 mt-4 text-sm font-bold text-white bg-navy-700 rounded-md"
                    >
                        Edit
                    </button>
                </div>
            </div>
        </Card>
    )
}
