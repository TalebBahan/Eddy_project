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
          {title}<br ></br>By {author}<br></br>
        </p>

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
