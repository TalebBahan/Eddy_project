import React, { useState } from 'react';
import Card from 'components/card';
import { AiFillDelete } from 'react-icons/ai';
import AddEditMedia from './AddEditMedia';
import { useDeletePostMutation } from './linkdubApi';
import { Link } from 'react-router-dom';

export default function LinkedInCard({ text, tags, image, link, id }) {
  const [deleteM] = useDeletePostMutation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((prevOpen) => !prevOpen);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this?')) {
      deleteM(id);
    }
  };

  return (
    <Card extra="flex flex-col w-full h-full p-4 bg-white">
      <AddEditMedia open={open} handleOpen={handleOpen} tags={tags} text={text} link={link} id={id} />
      <div className="h-full w-full">
        <div className="relative w-full">
          <img
            src={`${process.env.REACT_APP_API}/images/${image}`}
            className="mb-3 h-full w-full rounded-xl"
            alt=""
          />
          <button
            onClick={handleDelete}
            className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-none text-brand-200 hover:cursor-pointer"
          >
            <AiFillDelete color="rgb(234, 62, 42)" />
          </button>
        </div>

        <div className="mb-3">
          <div>
            <p className="text-lg font-bold text-navy-700 dark:text-white whitespace-pre-line truncate">{tags}</p>
            <p className="mt-1 text-sm font-medium text-gray-600 truncate">{text}</p>
            <div className="max-w-full">
              <Link className="mt-1 text-sm font-medium text-gray-900 truncate" target="_blank" to={link}>
                {link}
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={handleOpen}
            href=""
            className="linear rounded-full bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
          >
            Edit
          </button>
        </div>
      </div>
    </Card>
  );
}
