import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function BuildingMenu() {
    return (
        <div className='font-medium'>

            <Link href='/b/'>
                <div className='flex items-center justify-between p-5 px-5 border border-b rounded-t-lg cursor-pointer'>
                    <p>Feed</p>
                    <ChevronRight className='w-4 h-4' />
                </div>
            </Link>

            <Link href='/b/details'>
                <div className='flex items-center justify-between p-5 border-b cursor-pointer border-x'>
                    <p>Details</p>
                    <ChevronRight className='w-4 h-4' />
                </div>
            </Link>

            <Link href='/b/location'>
                <div className='flex items-center justify-between p-5 border-b cursor-pointer border-x'>
                    <p>Location</p>
                    <ChevronRight className='w-4 h-4' />
                </div>
            </Link>

            <Link href='/b/construction'>
                <div className='flex items-center justify-between p-5 border-b cursor-pointer border-x'>
                    <p>Construction</p>
                    <ChevronRight className='w-4 h-4' />
                </div>
            </Link>

            <Link href='/b/links'>
                <div className='flex items-center justify-between p-5 border-b rounded-b-lg cursor-pointer border-x'>
                    <p>Links</p>
                    <ChevronRight className='w-4 h-4' />
                </div>
            </Link>

        </div>
    )
}
