import React from 'react';
import Form from './Form';
import { useDeleteBookMutation } from './api';
const BookCard = ({ title, body, imageUrl, link, _id }) => {

    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(!open);
    const [deleteBook] = useDeleteBookMutation()

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this book?'))
            deleteBook(id)
    }
    const [editData, setEditData] = React.useState({})
    return (
        <div className="book read">
            <Form open={open} handleClose={handleOpen} isAdd={false} {...editData} />
            <div class="cover">
                <img src={`${process.env.REACT_APP_API}/images/${imageUrl}`} />
            </div>
            <div class="description">
                <p class="title">{title}<br />
                    <span class="author">{body}</span>
                </p>
                <div className="buttons">
                    <button
                        onClick={() => {
                            setEditData({ title, body, imageUrl, link, _id })
                            handleOpen()
                        }}
                    >Edit</button>
                    <button
                        onClick={() => handleDelete(_id)}
                    >Delete</button>
                </div>
            </div>


        </div>)
}

export default BookCard;
