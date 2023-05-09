import React from 'react'
import { useQuery } from 'react-query'
import { useGetVideosQuery } from './youtubeApi'
import { Navigate } from 'react-router-dom'
import Card from 'components/card'
import { useSelector } from "react-redux"
import { selectCurrentUser } from "features/auth/authSlice";
const VideoCard = ({ video }) => {
  const { title, thumbnails, resourceId } = video.snippet;


  return (
    <Card
      extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white`}
    >
      <div className="h-full w-full">
        <div className="relative w-full">
          <iframe
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            title='Youtube player'
            sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
            src={`https://youtube.com/embed/${resourceId.videoId}?autoplay=0`}
          />
          {/* <button
            onClick={() => {
              return window.confirm('are you sure you want to delete this ?') ? deleteM(id) : null
            }
            }

            className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-none  text-brand-200 hover:cursor-pointer"
          >
            <AiFillDelete color='rgb(234, 62, 42)' />
          </button> */}
        </div>

        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700 dark:text-white">
              {" "}
              {title}{" "}
            </p>
            {/* <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
              By {s_text}{" "}
            </p>
            <p className="mt-1 text-sm font-medium text-gray-500 md:mt-2">
              {"Learn more @ "}
              {link}{" "}
            </p> */}
          </div>
        </div>

        <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
          <button
            // onClick={handleOpen}
            href=""
            className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
          >
            Edit
          </button>
        </div>
      </div>
    </Card>
  )
}


const VideoList = ({ data }) => {
  return (
    <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
      {data?.items.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default function Youtube() {
  const user = useSelector(selectCurrentUser)
  const { data, status, isSuccess, isError, isLoading } = useGetVideosQuery(user)

  const handleError = () => {
    // const id = data?.error?.id
    // if (id) {
    //   window.location.href = `${process.env.REACT_APP_API}/api/google/login/${id}`
    // }
  }

  if (isSuccess) {
    return <VideoList data={data ? data : []} />
  }


  return <a href={`${process.env.REACT_APP_API}/google/login/${user}`}>Login To your google account</a>
}


