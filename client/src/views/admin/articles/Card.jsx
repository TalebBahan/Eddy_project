import React from 'react';
import Form from './Form';
import { useDeleteArticleBMutation } from './api';
const ArticleCard = ({ title, body, imageUrl, link,_id }) => {

    const [open,setOpen] = React.useState(false)
    const handleOpen = () => setOpen(!open);
    const [deleteArticle] = useDeleteArticleBMutation()

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this article?'))
            deleteArticle(id)
    }
    const [editData, setEditData] = React.useState({})
    return (<div className="blog-card">
        <Form open={open} handleClose={handleOpen} isAdd={false} {...editData} />
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
                setEditData({title, body, imageUrl, link,_id})
                handleOpen()
            }}
            >Edit</button>
            <button 
            onClick={() => handleDelete(_id)}
            >Delete</button>
        </p>
  
    </div>)
}

export default ArticleCard;
