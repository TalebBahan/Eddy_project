import React from 'react'
import './style.css'
export default function Card({ title, body: author, link: description, imageUrl }) {
  const windowWidth = window.innerWidth;
  return (
    <div>
    <div class="book">
      {/* <div class="cover"> */}
        <img src={`${process.env.REACT_APP_API}/images/${imageUrl}`} className='cover--img' />
      {/* </div> */}
      <p>
        <p class="title-book">
          {title}
        </p>
        <p className='book--author'>By {author}</p>

        <p class="description">
          {
           description
          }
        </p>
      </p>
      </div>
    </div>
  )
}
