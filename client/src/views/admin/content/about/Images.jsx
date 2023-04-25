import React from 'react'
import NFt3 from "assets/img/nfts/Nft3.png";
import { AiFillDelete } from 'react-icons/ai';

export default function Images() {
  return (
    <div className='mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3'>
        <div className="relative w-full">
          <img
            src={NFt3}
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            alt=""
          />
          <button
            
            className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-none  text-brand-200 hover:cursor-pointer"
          >
            <AiFillDelete color='rgb(234, 62, 42)' />
          </button>
        </div>
        <div className="relative w-full">
          <img
            src={NFt3}
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            alt=""
          />
          <button
            
            className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-none  text-brand-200 hover:cursor-pointer"
          >
            <AiFillDelete color='rgb(234, 62, 42)' />
          </button>
        </div>
        <div className="relative w-full">
          <img
            src={NFt3}
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            alt=""
          />
          <button
            
            className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-none  text-brand-200 hover:cursor-pointer"
          >
            <AiFillDelete color='rgb(234, 62, 42)' />
          </button>
        </div>
    </div>
  )
}
