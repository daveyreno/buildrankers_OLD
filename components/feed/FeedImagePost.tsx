import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'
import onePic from '../../public/one.jpeg'
import { MessageCircle, Share2 } from "lucide-react"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function FeedImagePost() {

    return (
        <div className='flex flex-col gap-3 p-3 border rounded-lg'>


            <div className='flex justify-between p-2'>

                <div className='flex items-center gap-3'>
                    <Link href='/u'>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </Link>
                    <div className='flex flex-col'>
                        <Link href='/u'>

                            <p className='flex items-baseline font-semibold'><span className='text-sm font-light'>u/</span>DaveyReno</p>
                        </Link>
                        <p className='text-sm text-slate-500'>2min ago</p>
                    </div>
                </div>


                <div className=''>
                    <div className='flex flex-col'>
                        <Link href='/b'>
                            <p className='flex items-baseline justify-end font-semibold'>One Barangaroo</p>
                        </Link>
                        <p className='flex justify-end text-sm text-slate-500'>Sydney, Australia</p>
                    </div>
                </div>

            </div>


            <div className='rounded'>
                <Image src={onePic} alt="One Image" className='rounded-lg' />
            </div>
            <div className='flex gap-2'>
                <Button variant='outline' className='w-full'>
                    <Share2 className='w-5 h-5' />
                </Button>
                <Button variant='outline' className='flex w-full gap-1'>
                    <MessageCircle className='w-5 h-5' />
                    <p>2</p>
                </Button>
            </div>
        </div>
    )
}
