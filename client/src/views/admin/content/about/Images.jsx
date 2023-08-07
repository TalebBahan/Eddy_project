import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { useGetAboutImagesQuery,useDeleteAboutImageMutation } from '../apiContent';
export default function Images() {
  const { data, isLoading,isError } = useGetAboutImagesQuery()
  const [de] = useDeleteAboutImageMutation()
  function deleteItem(id){
    if(window.confirm('are you sure you wnat to delete this image ?')){
      de(id)
    }
  }
  return (
    <div className='mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3'>

      {!isError && !isLoading ? data.map(item =>
        <div className="relative w-full" key={item._id}>
          <img
            src={`${process.env.REACT_APP_API}/images/${item.image}`}
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            alt=""
          />
          <button
            onClick={()=>deleteItem(item._id)}
            className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-none  text-brand-200 hover:cursor-pointer"
          >
            <AiFillDelete color='rgb(234, 62, 42)' />
          </button>
        </div>)
        : 'loading...'
        }

    </div>
  )
}
