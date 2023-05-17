'use client'

import { Progress } from '@/components/ui/progress'
import React from 'react'


export default function ProfileRank() {

    const [progress, setProgress] = React.useState(13)

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="">
            <p className='text-xs text-slate-500'>Rank</p>
            <p className='mb-3 text-lg font-semibold'>Corporal</p>
            <Progress value={progress} className='h-2 mb-2' />
            <div className='flex justify-between text-xs text-slate-500'>
                <p>Next Rank</p>
                <p>2,344 points</p>
            </div>
        </div>
    )
}
