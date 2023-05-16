import React from 'react'
import Card from 'components/card'
import { AiFillDelete } from 'react-icons/ai'
import { useDeleteArticleMutation } from './newsletterApi'
export default function Sd({ h_text, s_text, image, link, newsletterId, articleId }) {
    const [deleteM] = useDeleteArticleMutation();
    return (
        <Card
            extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white`}
        >
            <div className="h-full w-full">
                <div className="relative w-full">
                    <img
                        src={`${process.env.REACT_APP_API}/images/${image}`}
                        className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
                        alt=""
                    />
                    <button
                        onClick={() => {
                            return window.confirm('are you sure you want to delete this ?') ? deleteM({newsletterId,articleId}) : null
                        }
                        }

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
            </div>
        </Card>
    )
}
