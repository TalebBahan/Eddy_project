import React from 'react'
import './style.css'
export default function Card({ title, body, link, imageUrl }) {
  const windowWidth = window.innerWidth;
    return (
        <div class="book read">
        <div class="cover">
          <img  src={`${process.env.REACT_APP_API}/images/${imageUrl}`} />
        </div>
        <div class="description">
          <p class="title">{title}<br/>
            <span class="author">{body}<br/></span><p class="expert">
            {
              windowWidth > 768 ? link.length > 600 ? link.substring(0, 600) + '...' : link : link.length > 250 ? link.substring(0, 250) + '...' : link
            }</p></p>
          
        </div>
      </div>
    )
}
