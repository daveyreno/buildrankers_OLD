import { Button } from "@/components/ui/button";
import ContributeCTA from "../components/ContributeCTA";

export default function BuildingLocationPage() {
    return (
        <div className=''>
            <div className='flex items-center justify-between mb-4'>
                <h2 className='text-2xl font-semibold tracking-tighter'>Location</h2>
                <Button variant='outline'>Follow</Button>
            </div>

            <div className='flex flex-col gap-4'>

                {/* BASIC LOCATION */}
                <div className=''>
                    <div className='flex justify-between p-5 border rounded-t-lg'>
                        <div className='w-1/2 font-medium'>
                            <p>Street Address</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>1-11 Barangaroo Avenue</p>
                        </div>
                    </div>

                    <div className='flex p-5 border-b border-x'>
                        <div className='w-1/2 font-medium'>
                            <p>Suburb</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>Sydney</p>
                        </div>
                    </div>

                    <div className='flex p-5 border-b border-x'>
                        <div className='w-1/2 font-medium'>
                            <p>State</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>New South Wales</p>
                        </div>
                    </div>

                    <div className='flex p-5 border-b border-x'>
                        <div className='w-1/2 font-medium'>
                            <p>Post Code</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>2000</p>
                        </div>
                    </div>

                    <div className='flex justify-between p-5 border-b rounded-b-lg border-x'>
                        <div className='w-1/2 font-medium'>
                            <p>Country</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>Australia</p>
                        </div>
                    </div>
                </div>

                <ContributeCTA />

                {/* TRANSPORTATION */}
                <div className=''>
                    <div className='flex justify-between p-5 border rounded-t-lg'>
                        <div className='w-1/2 font-medium'>
                            <p>Airports</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>Sydney Kingsford Smith Airport</p>
                        </div>
                    </div>

                    <div className='flex p-5 border-b rounded-b-lg border-x'>
                        <div className='w-1/2 font-medium'>
                            <p>Train Stations</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>Barangaroo Station</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
