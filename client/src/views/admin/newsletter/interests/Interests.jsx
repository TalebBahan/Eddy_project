import Card from "components/card";
import React, { useState } from "react";
import {
    useGetInterestssQuery,
    useDeleteInterestsMutation
} from "./api";
import Form from "./Form";
import { AiOutlinePlus } from "react-icons/ai";
import Success from "components/Success";
import Error from "components/Error";

const Interests = () => {
    const { data, isLoading } = useGetInterestssQuery();
    const [deleteInterest] = useDeleteInterestsMutation();
    const [showModal, setShowModal] = useState(false);
    const [selectedInterest, setSelectedInterest] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const handleDelete = (interest) => {
        if (window.confirm('Are you sure you want to delete this interest?')) {
            deleteInterest(interest._id)
                .then(() => {
                    setSuccessMessage("Interest successfully deleted.");
                })
                .catch(() => {
                    setErrorMessage("Error deleting the interest.");
                });
        }
    };

    const handleEdit = (interest) => {
        setSelectedInterest(interest);
        setShowModal(true);
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedInterest(null);
        setShowModal(false);
        setSuccessMessage("");
        setErrorMessage("");
    };

    return (
        <Card extra={"w-full h-full p-4 sm:overflow-x-auto"}>
            <div className="relative flex items-center justify-between">
                <div className="text-xl font-bold text-navy-700 dark:text-white">
                    Interests
                </div>
                <button
                    className={`flex items-center text-xl hover:cursor-pointer bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10`}
                    onClick={handleOpenModal}
                >
                    <AiOutlinePlus />
                </button>
            </div>

            <div className="mt-8 h-full overflow-x-scroll xl:overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700">
                                <p className="text-xs tracking-wide text-gray-600">Interest</p>
                            </th>
                            <th className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700">
                                <p className="text-xs tracking-wide text-gray-600">Action</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? (
                            <tr>
                                <td colSpan={3}>Loading...</td>
                            </tr>
                        ) : (
                            data?.map((interest) => (
                                <tr key={interest._id}>
                                    <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                                            {interest.interest}
                                        </p>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-2">
                                            <button
                                                className="text-sm font-bold text-red-500 dark:text-white"
                                                onClick={() => handleDelete(interest)}
                                            >
                                                Delete
                                            </button>
                                            <button
                                                className="text-sm font-bold text-yellow-500 dark:text-white"
                                                onClick={() => handleEdit(interest)}
                                            >
                                                Edit
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {successMessage && <Success message={successMessage} />}
            {errorMessage && <Error message={errorMessage} />}

            <Form
                open={showModal}
                handleClose={handleCloseModal}
                isEdit={!!selectedInterest}
                interest={selectedInterest}
                setSuccessMessage={setSuccessMessage}
                setErrorMessage={setErrorMessage}
            />
        </Card>
    );
};

export default Interests;
