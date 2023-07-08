import React, { useEffect, useState } from 'react';

const Card = ({ title, author, body, imageUrl, link }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const truncatedBody = windowWidth < 800 ? `${body.substring(0, 100)}...` : body;

  return (
    <div className="searchresult">
      <h2><a href={link} target='_blank'>{title}</a></h2>
      <div className='bodyArticule'>
      <p>{truncatedBody}</p>
      <img src={`${process.env.REACT_APP_API}/images/${imageUrl}`} alt="Result Image" />
      </div>
    </div>
  );
};

export default Card;

// Rest of the code remains the same
