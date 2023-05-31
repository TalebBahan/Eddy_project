import React from 'react';
// import { useGetVideosQuery, useDeleteVideoMutation, useUploadVideoMutation } from './linkdubApi';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'features/auth/authSlice';
import Card from 'components/card';
import { AiFillDelete } from 'react-icons/ai';
import search from 'features/serch'
import { useState } from 'react';
import Navbar from 'components/navbar';
import Edit from './Edit';
import Loading from 'components/Loading';
import LinkedInButton from './LinkedInButton';


const LinkedIn = () => {
  // const user = useSelector(selectCurrentUser);
  // const { data, status, isLoading } = useGetVideosQuery(user);
  // const { data:re, status:reStatus, isLoading:reisLoading } = useGetReVideosQuery(user);
  // const [searchTerm, setSearchTerm] = useState('');



  // if (status === 'rejected') {
  return (
    <div className={`flex justify-center items-center flex-col h-screen`}>
      <p className='text-lg font-bold text-navy-700 dark:text-white'>You Must Sign In WIth Your Linkdin Account</p>
      <a href={`${process.env.REACT_APP_API}/linkdin/login/`}><LinkedInButton /></a>
    </div>
  )
};

export default LinkedIn;
