import React from 'react';
import { useGetVideosQuery, useDeleteVideoMutation, useUploadVideoMutation } from './youtubeApi';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'features/auth/authSlice';
import Card from 'components/card';
import { AiFillDelete } from 'react-icons/ai';
import search from 'features/serch'
import { useState } from 'react';
import Navbar from 'components/navbar';
import Edit from './Edit';
import Loading from 'components/Loading';
import { useAddVideoMutation, useGetReVideosQuery,useRemoveVideoMutation } from './youtubeApi';
const COLUMNS = [{ Header: "Title", accessor: "title", }, { Header: "Description", accessor: "description", }, { Header: "Published At", accessor: "publishedAt", }, { Header: "Video ID", accessor: "videoId", },];
const VideoCard = ({ video,re }) => {
  const [deleteVideo] = useDeleteVideoMutation();
  const [remove] = useRemoveVideoMutation();
  console.log('====================================');
  console.log("data",re);
  console.log('====================================');
  const [add] = useAddVideoMutation();
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this video?')) {
      deleteVideo(id);
    }
  };
  
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open);
  const { title, description, publishedAt, videoId } = video;

    const foundObject = re?.find((object) => object.videoId === videoId);
    const s =  foundObject ? foundObject._id : false;
  return (
    <Card extra='flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white'>
      <Edit open={open} handleOpen={handleOpen} {...video} />
      <div className='h-full w-full'>
        <div className='relative w-full'>
          <iframe
            className='mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full'
            title='Youtube player'
            sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
            src={`https://youtube.com/embed/${videoId}?autoplay=0`}
          />
          <button onClick={() => handleDelete(videoId)} className=''>
            <AiFillDelete color='rgb(234, 62, 42)' />
          </button>
          {!s?
          <button onClick={() => add(video)} className='rounded-[10px] px-1 bg-green-900 text-white transition'>
            Add To Website
          </button>:
          <button onClick={() => remove(s)} className='rounded-[10px] px-1 bg-green-900 text-white transition'>
            Remove From Website
          </button>
          }
        </div>

        <div className=''>
          <div className='mb-2'>
            <p className='text-lg font-bold text-navy-700 dark:text-white'> {title} </p>
            <p className='mt-1 text-sm font-medium text-gray-600 md:mt-2'>Published At {publishedAt} </p>
            <p className='mt-1 text-sm font-medium text-gray-500 md:mt-2'> {description} </p>
          </div>
        </div>

        <div className=''>
          <button
            onClick={handleOpen}
            href=''
            className='linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90'
          >
            Edit
          </button>
        </div>
      </div>
    </Card>
  );
};

const VideoList = ({ data,re }) => {
  return (
    <div className='mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6'>
      {data.map((video) => (
        <VideoCard key={video.videoId} video={video} re={re} />
      ))}
    </div>
  );
};

const extractVideoData = (data) => {
  if (!data) {
    return [];
  }
  return data.items.map((video) => {
    const { title, description, publishedAt } = video.snippet;
    const { videoId } = video.snippet.resourceId;
    return { title, description, publishedAt, videoId };
  });
};

const Youtube = () => {
  const user = useSelector(selectCurrentUser);
  const { data, status, isLoading } = useGetVideosQuery(user);
  const { data:re, status:reStatus, isLoading:reisLoading } = useGetReVideosQuery(user);
  const [searchTerm, setSearchTerm] = useState('');

  if (isLoading || reisLoading) {
    return <Loading />
  }

  if (status === 'rejected') {
    return (
      <div>
        <a href={`${process.env.REACT_APP_API}/google/login/${user}`}>Login To your google account</a>
      </div>
    )
  };
  const filteredData = search(extractVideoData(data), COLUMNS, searchTerm);
  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }
  return <div className="mt-3 grid h-full grid-cols-1 gap-10 divide-y divide-solid ">

    <Navbar searchTerm={searchTerm} handleSearch={handleSearch} />
    <VideoList data={filteredData} re={re} />
  </div>
}

export default Youtube;
