import React from 'react';
import Form from './Form';
import { useDeleteArticleBMutation } from './api';
import Success from 'components/Success';
import Error from 'components/Error';

const ArticleCard = ({ title, body, imageUrl,interests, link, _id }) => {
    const [open, setOpen] = React.useState(false);
    const [deleteArticle] = useDeleteArticleBMutation();
    const [successMessage, setSuccessMessage] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');

    const handleOpen = () => setOpen(!open);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this article?')) {
            deleteArticle(id)
                .then(() => {
                    setSuccessMessage('Article successfully deleted.');
                })
                .catch(() => {
                    setErrorMessage('Error deleting the article.');
                });
        }
    };

    const [editData, setEditData] = React.useState({});

    return (
        <div className="blog-card">
            {successMessage && <Success message={successMessage} />}
            {errorMessage && <Error message={errorMessage} />}

            <Form open={open} handleClose={handleOpen} isAdd={false} {...editData}  />
            <div className="meta">
                <div className="photo" style={{ backgroundImage: `url(${process.env.REACT_APP_API}/images/${imageUrl})` }}></div>
            </div>
            <div className="description">
                <a href={link}><h1>{title}</h1></a>
                <p>{body}</p>
            </div>
            <p className="read-more">
                <button
                    onClick={() => {
                        setEditData({ title, body, imageUrl, link, _id,interests });
                        handleOpen();
                    }}
                    className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
                >
                    Edit
                </button>
                <button
                    onClick={() => handleDelete(_id)}
                    className="linear rounded-[20px] bg-red-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-danger-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
                >
                    Delete
                </button>
            </p>
        </div>
    );
}

export default ArticleCard;
