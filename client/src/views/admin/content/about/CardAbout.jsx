import Card from "components/card";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import AddEditAbout from "./AddEditAbout";
import Success from "components/Success";
import Error from "components/Error";

import { useDeleteContentMutation } from '../apiContent';

const CardAbout = ({ h_text, s_text, link, id, date }) => {
  const [open, setOpen] = useState(false);
  const [deleteM] = useDeleteContentMutation();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleOpen = () => setOpen(!open);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this?')) {
      deleteM(id)
        .then(() => {
          setSuccessMessage("Successfully deleted.");
        })
        .catch(() => {
          setErrorMessage("Error deleting the item.");
        });
    }
  };

  return (
    <Card extra="w-full h-full p-3">
      {successMessage && <Success message={successMessage} />}
      {errorMessage && <Error message={errorMessage} />}
      <AddEditAbout
        open={open}
        handleOpen={handleOpen}
        id={id}
        h_text={h_text}
        s_text={s_text}
        link={link}
        date={date}
      />
      {/* Header */}
      <div className="mt-2 mb-8 w-full">
        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
          {h_text}
          <button
            onClick={handleDelete}
            className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-none text-brand-200 hover:cursor-pointer"
          >
            <AiFillDelete color="rgb(234, 62, 42)" />
          </button>
        </h4>
        <p className="mt-2 px-2 text-base text-gray-600">{s_text}</p>
      </div>
      {/* Cards */}
      <button
        onClick={handleOpen}
        href=""
        className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
      >
        Edit
      </button>
    </Card>
  );
};

export default CardAbout;
