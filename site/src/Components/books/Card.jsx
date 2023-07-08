import React from 'react'
import './style.css'
export default function Card({ title, body, link, imageUrl }) {
    return (
        <div class="book read">
        <div class="cover">
          <img  src={`${process.env.REACT_APP_API}/images/${imageUrl}`} />
        </div>
        <div class="description">
          <p class="title">{title}<br/>
            <span class="author">{body}</span></p>
        </div>
      </div>
    )
}
