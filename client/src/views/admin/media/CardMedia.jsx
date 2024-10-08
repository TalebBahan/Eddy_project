import React from 'react';
import Card from 'components/card';
import { AiFillDelete } from 'react-icons/ai';
import AddEditMedia from './AddEditMedia';
import Success from 'components/Success';
import Error from 'components/Error';
import { useDeleteMediaMutation } from './api';

export default function CardMedia({ interests, h_text, s_text, image, link, id, date }) {
  const [deleteM] = useDeleteMediaMutation();
  const [open, setOpen] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleOpen = () => setOpen(!open);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this?')) {
      deleteM(id)
        .then(() => {
          setSuccessMessage('Successfully deleted.');
        })
        .catch(() => {
          setErrorMessage('Error deleting the item.');
        });
    }
  };
  const date1 = new Date(date);
  return (
    <Card extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white`}>
      {successMessage && <Success message={successMessage} />}
      {errorMessage && <Error message={errorMessage} />}

      <AddEditMedia open={open} handleOpen={handleOpen} h_text={h_text} s_text={s_text} link={link} id={id} date={date} interests={interests} image={image} />
      <div className="h-full w-full">
        <div className="relative w-full">
          <img
            src={`${process.env.REACT_APP_API}/images/${image}`}
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            alt=""
          />
          <button
            onClick={handleDelete}
            className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-none  text-brand-200 hover:cursor-pointer"
          >
            <AiFillDelete color="rgb(234, 62, 42)" />
          </button>
        </div>

        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700 dark:text-white">
              {" "}
              {h_text}{" "}
            </p>
            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
              {
                s_text.length > 100 ? s_text.substring(0, 100) + '...' : s_text

              }{" "}
            </p>
            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
              {date1.toLocaleDateString()}{" "}
            </p>
            <a className="mt-1 text-sm font-medium text-gray-900 md:mt-2" target='_blank' href={link}>
              {"Learn more @ "}
              {link}{" "}
            </a>
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
