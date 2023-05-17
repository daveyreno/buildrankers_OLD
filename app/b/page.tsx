import Feed from '@/components/feed/Feed'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function page() {
    return (
        <div>
            <div className='flex items-center justify-between mb-4'>
                <h2 className='text-2xl font-semibold tracking-tighter'>Feed</h2>
                <Button variant='outline'>Follow</Button>
            </div>
            <Feed />
        </div>
    )
}