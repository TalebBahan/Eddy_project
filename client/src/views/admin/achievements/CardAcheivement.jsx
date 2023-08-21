import React, { useState } from 'react';
import Card from 'components/card';
import { useUpdateAcheivementMutation } from './api';

export default function CardAcheivement({ item }) {
    const [editing, setEditing] = useState(false);
    const [updateAcheivement] = useUpdateAcheivementMutation();
    const [updatedCounts, setUpdatedCounts] = useState(
        item.rest.map((i) => i.count)
    );

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleSaveClick = async () => {
        const updatedAchievement = {
            category: item.category,
            rest: item.rest.map((restItem, index) => ({
                ...restItem,
                count: updatedCounts[index]
            }))
        };


        await updateAcheivement({ id: item._id, ...updatedAchievement });
        setEditing(false);
    };


    return (
        <Card extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white`}>
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                        {item.category}
                    </h4>
                    <div className="flex flex-row justify-between">
                        {editing ? (
                            item.rest.map((i, index) => (
                                <div className="flex flex-col" key={index}>
                                    <h4 className="text-sm font-bold text-navy-500 dark:text-white">
                                        {i.type}
                                    </h4>
                                    <input
                                        type="number"
                                        value={updatedCounts[index]}
                                        className="w-16 h-8 text-sm font-bold text-navy-500 dark:text-white bg-white border border-navy-500 rounded-md border-collapse"
                                        onChange={(e) => {
                                            const newCounts = [...updatedCounts];
                                            newCounts[index] = e.target.value;
                                            setUpdatedCounts(newCounts);
                                        }}
                                    />
                                </div>
                            ))
                        ) : (
                            item.rest.map((i, index) => (
                                <div className="flex flex-col" key={index}>
                                    <h4 className="text-sm font-bold text-navy-500 dark:text-white">
                                        {i.type}
                                    </h4>
                                    <h4 className="text-sm font-bold text-navy-500 dark:text-white">
                                        {i.count}
                                    </h4>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="flex flex-row justify-end">
                        {editing ? (
                            <button
                                className="flex flex-row items-center justify-center w-24 h-8 mt-4 text-sm font-bold text-white bg-navy-700 rounded-md"
                                onClick={handleSaveClick}
                            >
                                Save
                            </button>
                        ) : (
                            <button
                                className="flex flex-row items-center justify-center w-24 h-8 mt-4 text-sm font-bold text-white bg-navy-700 rounded-md"
                                onClick={handleEditClick}
                            >
                                Edit
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </Card>
    );
}
