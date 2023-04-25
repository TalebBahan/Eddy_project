import React from 'react'
// import Upload from './Carousel/Upload'
import Carousel from './Carousel/Carousel'
import Media from './media/Media'
// import {AiOutlinePlus} from 'react-icons/ai'
import About from './about/About'
import { useGetContentQuery } from './apiContent'
export default function Content() {
    const {data,isLoading,}= useGetContentQuery()
    const filterbytype =(type)=>data.filter(item => item.type === type);
    return (
        <div className="mt-3 grid h-full grid-cols-1 gap-10 divide-y divide-solid ">
        {
            isLoading ? 'loading ...' :
            <>
            <Carousel data={filterbytype('carousel')}/>
            <About data={filterbytype('about')}/>
            <Media data={filterbytype('media')}/>
            </>
        }
            
        </div>
    )
}
