import React, { useState, useEffect } from 'react';

const API_KEY = 'AIzaSyD2C0KVku7d_KLY6SWFG3NFP46hCqTlvAE';
const CHANNEL_ID = 'UCyk_1-oxcyVi7PLOesPgdew';



function Posts() {
  const [videos, setVideos] = useState([]);
  const [newVideo, setNewVideo] = useState({ title: '', description: '', publishedAt: '' });

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = () => {
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`)
      .then(response => response.json())
      .then(data => {
        setVideos(data.items);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewVideo(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        snippet: {
          title: newVideo.title,
          description: newVideo.description,
          scheduledPublishTime: newVideo.publishedAt
        }
      })
    })
      .then(response => {
        if (response.ok) {
          fetchVideos();
          setNewVideo({ title: '', description: '', publishedAt: '' });
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDelete = (videoId) => {
    fetch(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          fetchVideos();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className='page-content'>
      <h2>My YouTube Videos</h2>
      <ul>
        {videos.map(video => (
          <li key={video.id.videoId}>
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description}</p>
            <button onClick={() => handleDelete(video.id.videoId)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Add New Video</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={newVideo.title} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={newVideo.description} onChange={handleInputChange} />
        </div>
    
        <div>
          <label htmlFor="publishedAt">Publish Date:</label>
          <input type="datetime-local" id="publishedAt" name="publishedAt" value={newVideo.publishedAt} onChange={handleInputChange} />
        </div>
        <button type="submit">Add Video</button>
      </form>
    </div>
  );
}

export default Posts;

