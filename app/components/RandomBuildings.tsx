import { Timer } from 'lucide-react'
import Link from 'next/link'

export default function RandomBuildings() {
    return (
        <div className='md:p-3 lg:p-0'>
            <div className='flex items-center gap-1 mt-6 mb-3'>
                <Timer className='w-4 h-4 ml-2 md:ml-0' />
                <h2 className='text-sm tracking-widest'>New</h2>
            </div>

            <div className='grid grid-cols-1 md:gap-3 md:grid-cols-2 lg:grid-cols-4'>
                <Link href='/b' className='p-4 border-t md:border md:rounded-lg'>
                    <h3 className='font-semibold'>One Zabeel</h3>
                    <p className='text-xs text-slate-500'>Dubai, UAE</p>
                </Link>

                <Link href='/b' className='p-4 border-t md:rounded-lg md:border'>
                    <h3 className='font-semibold'>The Shard</h3>
                    <p className='text-xs text-slate-500'>London, UK</p>
                </Link>

                <Link href='/b' className='p-4 border-t md:rounded-lg md:border'>
                    <h3 className='font-semibold'>Pertronas Towers</h3>
                    <p className='text-xs text-slate-500'>Kuala Lumpur, Malaysia</p>
                </Link>

                <Link href='/b' className='p-4 md:rounded-lg border-y md:border'>
                    <h3 className='font-semibold'>Shanghai Tower</h3>
                    <p className='text-xs text-slate-500'>Shanghai, China</p>
                </Link>
            </div>
        </div>
    )
}
