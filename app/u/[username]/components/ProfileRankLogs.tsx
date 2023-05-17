import { Badge } from "@/components/ui/badge"
import React from 'react'

export default function ProfileRankLogs() {
    return (
        <div>
            <div className='flex items-center justify-between px-4 py-3 border-b'>
                <div className=''>
                    <p className='text-sm'>Comment</p>
                    <p className='text-xs text-slate-500'>The Shard</p>
                </div>
                <div className=''>
                    <Badge>+100</Badge>
                </div>
            </div>

            <div className='flex items-center justify-between px-4 py-3 border-b'>
                <div className=''>
                    <p className='text-sm'>Highly Liked</p>
                    <p className='text-xs text-slate-500'>One Barangaroo</p>
                </div>
                <div className=''>
                    <Badge>+50</Badge>
                </div>
            </div>

            <div className='flex items-center justify-between px-4 py-3 border-b'>
                <div className=''>
                    <p className='text-sm'>Onboarded</p>
                </div>
                <div className=''>
                    <Badge>+250</Badge>
                </div>
            </div>

            <div className='flex items-center justify-between px-4 py-3'>
                <div className=''>
                    <p className='text-sm'>Successful Signup</p>
                </div>
                <div className=''>
                    <Badge>+250</Badge>
                </div>
            </div>
        </div>
    )
}
