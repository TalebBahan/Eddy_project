import React from 'react';
import { useGetVideosNotStoredQuery, useGetVideosStoredQuery } from './youtubeApi';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'features/auth/authSlice';
import Card from 'components/card';
import { AiFillDelete } from 'react-icons/ai';
import search from 'features/serch'
import { useState } from 'react';
import Navbar from 'components/navbar';
import Loading from 'components/Loading';
import GoogleButton from './GoogleButton';
import VideoCard from './Card';
const COLUMNS = [{ Header: "Title", accessor: "title", }, { Header: "Description", accessor: "description", }, { Header: "Published At", accessor: "publishedAt", }, { Header: "Video ID", accessor: "videoId", },];





const Youtube = () => {
  const user = useSelector(selectCurrentUser);
  const { data: notStored, status, isLoading } = useGetVideosNotStoredQuery();
  const { data: stored, isLoading: storedLoading } = useGetVideosStoredQuery();

  if (isLoading || storedLoading) {
    return <Loading />
  }
  console.log(notStored);

  // const filteredData = search(extractVideoData(data), COLUMNS, searchTerm);
  // function handleSearch(event) {
  //   setSearchTerm(event.target.value);
  // }
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-10 divide-y divide-solid ">
      <Card extra={"w-full h-full p-4 sm:overflow-x-auto"}>
        <div className="relative flex items-center justify-between">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            Videos On The Website
          </div>
        </div>
        <div className="mt-8 h-full overflow-x-scroll xl:overflow-hidden mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
          {stored?.map((video) => (
            <VideoCard key={video.videoId} video={video} stored={true} />
          ))}
        </div>
      </Card>
      <Card extra={"w-full h-full p-4 sm:overflow-x-auto"}>
        <div className="relative flex items-center justify-between">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            Videos Not On The Website
          </div>
        </div>
        {
          status === 'rejected' ?

            <div className="flex flex-col items-center justify-center">
              <div className="text-xl font-bold text-navy-700 dark:text-white">
                You need to login to your google account first
              </div>
              <a href={`${process.env.REACT_APP_API}/google/login/${user}`}><GoogleButton /></a>
            </div>
            :

            <div className="mt-8 h-full overflow-x-scroll xl:overflow-hidden mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
              {notStored?.map((video) => (
                <VideoCard key={video.videoId} video={video} stored={false} />
              ))}
            </div>}
      </Card>
    </div>
  )
}

export default Youtube;
