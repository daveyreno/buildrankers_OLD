import FeedPoster from './FeedPoster'
import FeedImagePost from './FeedImagePost'
import { Frown } from 'lucide-react'

export default function Feed() {
    return (
        <div className='flex flex-col gap-4'>
            <FeedImagePost />
            <FeedImagePost />
            <FeedImagePost />
            <FeedImagePost />
            <div className='flex flex-col items-center justify-center gap-2 p-5 text-sm border rounded-lg'>
                <Frown />No more posts here yet
            </div>
        </div>
    )
}