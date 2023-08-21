import React from 'react';
import Form from './Form';
import { useDeleteBookMutation } from './api';
import Success from 'components/Success';
import Error from 'components/Error';
import './style.css'
const BookCard = ({ title, body, imageUrl, link, interests, _id }) => {
    const [open, setOpen] = React.useState(false);
    const [deleteBook] = useDeleteBookMutation();
    const [successMessage, setSuccessMessage] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');

    const handleOpen = () => setOpen(!open);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this book?')) {
            deleteBook(id)
                .then(() => {
                    setSuccessMessage('Book successfully deleted.');
                })
                .catch(() => {
                    setErrorMessage('Error deleting the book.');
                });
        }
    };

    const [editData, setEditData] = React.useState({});

    return (
        <div className="book read">
            {successMessage && <Success message={successMessage} />}
            {errorMessage && <Error message={errorMessage} />}

            <Form open={open} handleClose={handleOpen} isAdd={false} {...editData} />
            <div class="cover">
                <img src={`${process.env.REACT_APP_API}/images/${imageUrl}`} />
            </div>
            <div class="description">
                <p class="title">{title}<br />
                    <span class="author">{body}<br /></span><p class="expert">{
                        link.length > 550 ? link.substring(0, 550) + '...' : link
                    }</p></p>
                <div className="buttons">
                    <button
                        onClick={() => {
                            setEditData({ title, body, imageUrl, link, _id, interests });
                            handleOpen();
                        }}
                        className="flex flex-row items-center justify-center w-24 h-8 mt-4 text-sm font-bold text-white bg-navy-700 rounded-md"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="linear rounded-[20px] bg-red-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-danger-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BookCard;
