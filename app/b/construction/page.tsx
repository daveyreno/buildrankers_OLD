import { Button } from '@/components/ui/button'
import React from 'react'
import ContributeCTA from '../components/ContributeCTA'

export default function BuildingConstructionPage() {
    return (
        <div className=''>
            <div className='flex items-center justify-between mb-4'>
                <h2 className='text-2xl font-semibold tracking-tighter'>Construction</h2>
                <Button variant='outline'>Follow</Button>
            </div>

            <div className='flex flex-col gap-4'>

                {/* TIMELINES */}

                <div className='flex py-8 border rounded-lg'>



                    <div className='flex flex-col items-center flex-grow'>
                        <div className='w-3 h-3 mb-4 bg-orange-500 rounded-full'></div>
                        <div className='text-xl font-semibold tracking-tighter'>2013</div>
                        <div className='text-sm text-slate-500'>Proposed</div>
                    </div>

                    <div className='flex flex-col items-center flex-grow'>
                        <div className='w-3 h-3 mb-4 bg-blue-500 rounded-full'></div>
                        <div className='text-xl font-semibold tracking-tighter'>2016</div>
                        <div className='text-sm text-slate-500'>Started</div>
                    </div>

                    <div className='flex flex-col items-center flex-grow'>
                        <div className='w-3 h-3 mb-4 bg-green-500 rounded-full'></div>
                        <div className='text-xl font-semibold tracking-tighter'>2020</div>
                        <div className='text-sm text-slate-500'>Completed</div>
                    </div>





                </div>

                {/* OTHER CONTRACTORS */}

                <div className=''>

                    <div className='flex p-5 border rounded-t-lg'>
                        <div className='w-1/2 font-medium'>
                            <p>Developer</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>Lendlease</p>
                        </div>
                    </div>

                    <div className='flex p-5 border-b border-x'>
                        <div className='w-1/2 font-medium'>
                            <p>Main Contractor</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>Lendlease</p>
                        </div>
                    </div>

                    <div className='flex p-5 border-b border-x'>
                        <div className='w-1/2 font-medium'>
                            <p>Architecture</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <div className=''>
                                <p>WilkinsonEyre</p>
                                <p className='text-xs'>(Design)</p>
                            </div>
                            <div className=''>
                                <p>Bates Smart</p>
                                <p className='text-xs'>(Architect of Record)</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex p-5 border-b border-x'>
                        <div className='w-1/2 font-medium'>
                            <p>MEP Engineer</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>LCI Australia Pty Ltd.</p>
                        </div>
                    </div>

                    <div className='flex p-5 border-b border-x'>
                        <div className='w-1/2 font-medium'>
                            <p>Structural Engineer</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>Robert Bird Group</p>
                        </div>
                    </div>

                    <div className='flex p-5 border-b rounded-b-lg border-x'>
                        <div className='w-1/2 font-medium'>
                            <p>Project Manager</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>Lendlease</p>
                        </div>
                    </div>
                </div>

                {/* CONTRIBUTE CTA */}

                <ContributeCTA />

                {/* OTHER CONTRACTORS */}
                <div className=''>
                    <div className='px-5 py-4 border rounded-t-lg'>
                        <p className='text-xs tracking-widest'>OTHER CONTRACTORS</p>
                    </div>

                    <div className='flex p-5 border-b border-x'>
                        <div className='w-1/2 font-medium'>
                            <p>Façade</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>Arup</p>
                        </div>
                    </div>

                    <div className='flex p-5 border-b border-x'>
                        <div className='w-1/2 font-medium'>
                            <p>Façade Maintenance</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>Access Advisors Ltd</p>
                        </div>
                    </div>

                    <div className='flex p-5 border-b border-x'>
                        <div className='w-1/2 font-medium'>
                            <p>Quantity Surveyor</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>WT Partnership</p>
                        </div>
                    </div>

                    <div className='flex p-5 border-b rounded-b-lg border-x'>
                        <div className='w-1/2 font-medium'>
                            <p>Wind</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>Cermak Peterka Petersen (CPP), Inc.</p>
                        </div>
                    </div>
                </div>

                {/* MATERIAL SUPPLIERS */}

                <div className=''>
                    <div className='px-5 py-4 border rounded-t-lg'>
                        <p className='text-xs tracking-widest'>MATERIAL SUPPLIERS</p>
                    </div>

                    <div className='flex p-5 border-b border-x'>
                        <div className='w-1/2 font-medium'>
                            <p>Damper</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>A&H Tuned Mass Dampers</p>
                        </div>
                    </div>

                    <div className='flex p-5 border-b border-x'>
                        <div className='w-1/2 font-medium'>
                            <p>Elevator</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>Schindler</p>
                        </div>
                    </div>

                    <div className='flex p-5 border-b rounded-b-lg border-x'>
                        <div className='w-1/2 font-medium'>
                            <p>Steel</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>ArcelorMittal</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
