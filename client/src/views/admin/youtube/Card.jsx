import { useAddVideoMutation, useRemoveVideoMutation } from './youtubeApi';
import Card from 'components/card';
import { AiFillDelete, AiFillPlusCircle } from 'react-icons/ai';
const VideoCard = ({ video, stored }) => {
    // replace the add and remove buttons with a spinner while the mutation is loading and disable the button
    const [addVideo, { isLoading: isAdding }] = useAddVideoMutation();
    const [removeVideo, { isLoading: isRemoving }] = useRemoveVideoMutation();

    const add = async (video) => {
        await addVideo(video);
    };

    const remove = async (videoId) => {
        await removeVideo(videoId);
    };

    console.log(video);
    const { title, description, publishedAt, videoId, _id } = video;

    

    return (
        <Card extra='flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white'>
            <div className='h-full w-full'>
                <div className='relative w-full'>
                    <iframe
                        className='mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full'
                        title='Youtube player'
                        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                        src={`https://youtube.com/embed/${videoId}?autoplay=0`}
                    />

                    {
                        stored ? (
                            <button
                                className='absolute top-2 right-2 text-white bg-red-500 rounded-full p-2'
                                onClick={() => remove(videoId)}
                                disabled={isRemoving}
                            >
                                <AiFillDelete size='1.5rem' />
                            </button>
                        ) : (
                            <button
                                // set background color to gray if isAdding is true
                                className={`absolute top-2 right-2 text-white bg-navy-700 rounded-full p-2 ${isAdding && 'bg-gray-500'}`}
                                onClick={() => add(video)}
                                disabled={isAdding}
                            >
                                <AiFillPlusCircle size='1.5rem' />
                            </button>
                        )
                    }
                </div>
                <div className=''>
                    <div className='mb-2'>
                        <p className='text-lg font-bold text-navy-700 dark:text-white'> {title} </p>
                        <p className='mt-1 text-sm font-medium text-gray-600 md:mt-2'>Published At {publishedAt} </p>
                        <p className='mt-1 text-sm font-medium text-gray-500 md:mt-2'> {description} </p>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default VideoCard;