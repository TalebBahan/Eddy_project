import Card from "components/card";
import React from "react";
import AddEditNewsletter from "./AddEditNewsLetter";
const Table = (props) => {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(!open);
    return (
        <table className="w-full">
            <AddEditNewsletter open={open} handleClose={handleOpen} isAdd={false} {...props} />
            <thead>
                <tr>
                    <th className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700">
                        <p className="text-xs tracking-wide text-gray-600">
                            Title
                        </p>
                    </th>
                    <th className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700">
                        <p className="text-xs tracking-wide text-gray-600">
                            Subject
                        </p>
                    </th>
                    <th className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700">
                        <p className="text-xs tracking-wide text-gray-600">
                            Body
                        </p>
                    </th>
                    <th className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700">
                        <p className="text-xs tracking-wide text-gray-600">

                        </p>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                        <div className="flex items-center gap-2">
                            <p className="text-sm font-bold text-navy-700 dark:text-white">
                                {props.title}
                            </p>
                        </div>
                    </td>
                    <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                        <div className="flex items-center gap-2">
                            <p className="text-sm font-bold text-navy-700 dark:text-white">
                                {props.subject}
                            </p>
                        </div>
                    </td>
                    <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                        <div className="flex items-center gap-2">
                            <p className="text-sm font-bold text-navy-700 dark:text-white">
                                {props.body}
                            </p>
                        </div>
                    </td>
                    <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                        <button
                            onClick={handleOpen}
                            className="text-sm font-bold text-yellow-500 dark:text-white"
                        >
                            Edit
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
