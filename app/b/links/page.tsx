import { Button } from "@/components/ui/button";
import { ChevronRight, Link2 } from 'lucide-react'
import Link from "next/link";

export default function BuildingLinksPage() {
    return (
        <div className=''>
            <div className='flex items-center justify-between mb-4'>
                <h2 className='text-2xl font-semibold tracking-tighter'>Links</h2>
                <Button variant='outline'>Follow</Button>
            </div>

            {/* LINKS LIST */}
            <Link href='https://skyscraperpage.com/cities/?buildingID=98988'>
                <div className='flex items-center justify-between p-6 border rounded-t-lg'>
                    <div className='flex items-center gap-4'>
                        <Link2 className='w-5 h-5' />
                        <div className=''>
                            <p className='font-medium'>Skyscraperpage</p>
                            <p className='text-sm text-slate-500'>Contains useful information about the building.</p>
                        </div>
                    </div>
                    <ChevronRight className='w-4 h-4' />
                </div>
            </Link>

            <Link href='https://skyscraperpage.com/cities/?buildingID=98988'>
                <div className='flex items-center justify-between p-6 border-b border-x'>
                    <div className='flex items-center gap-4'>
                        <Link2 className='w-5 h-5' />
                        <div className=''>
                            <p className='font-medium'>Wikipedia</p>
                            <p className='text-sm text-slate-500'>Contains useful information about the building.</p>
                        </div>
                    </div>
                    <ChevronRight className='w-4 h-4' />
                </div>
            </Link>

            <Link href='https://skyscraperpage.com/cities/?buildingID=98988'>
                <div className='flex items-center justify-between p-6 border-b rounded-b-lg border-x'>
                    <div className='flex items-center gap-4'>
                        <Link2 className='w-5 h-5' />
                        <div className=''>
                            <p className='font-medium'>Crown Towers</p>
                            <p className='text-sm text-slate-500'>Hotel website situated within One Barangaroo.</p>
                        </div>
                    </div>
                    <ChevronRight className='w-4 h-4' />
                </div>
            </Link>

        </div>
    )
}