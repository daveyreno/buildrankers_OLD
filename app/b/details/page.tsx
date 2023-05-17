import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import ContributeCTA from "../components/ContributeCTA";

export default function BuildingDetailsPage() {
    return (
        <div className=''>
            <div className='flex items-center justify-between mb-4'>
                <h2 className='text-2xl font-semibold tracking-tighter'>The Building</h2>
                <Button variant='outline'>Follow</Button>
            </div>

            <div className='flex flex-col gap-4'>

                {/* BUILDING BASICS */}

                <div className=''>
                    <div className='flex justify-between p-5 border rounded-t-lg'>
                        <div className='w-1/2 font-medium'>
                            <p>Status</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <div className="">
                                <Badge>Operational</Badge>
                            </div>
                        </div>
                    </div>

                    <div className='flex p-5 border-b border-x'>
                        <div className='w-1/2 font-medium'>
                            <p>Official Name</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>One Barangaroo</p>
                        </div>
                    </div>

                    <div className='flex p-5 border-b border-x'>
                        <div className='w-1/2 font-medium'>
                            <p>Other Names</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>Crown Towers</p>
                            <p>Crown Towers Sydney</p>
                        </div>
                    </div>

                    <div className='flex justify-between p-5 border-b border-x'>
                        <div className='w-1/2 font-medium'>
                            <p>Complex Name</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>Barangaroo South</p>
                        </div>
                    </div>

                    <div className='flex justify-between p-5 border-b rounded-b-lg border-x'>
                        <div className='w-1/2 font-medium'>
                            <p>Owner</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>Crown Resorts Limited</p>
                        </div>
                    </div>

                </div>

                {/* CONTRIBUTE CTA */}

                <ContributeCTA />

                {/* HEIGHT BLOCK */}

                <div className=''>
                    <div className='flex items-center justify-between p-5 border rounded-t-lg'>
                        <div className='w-1/2'>
                            <p className='font-medium'>Height</p>
                            <p className='text-xs text-slate-500'>(Tip)</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>271.3 m / 890 ft</p>
                        </div>
                    </div>

                    <div className='flex items-center p-5 border-b border-x'>
                        <div className='w-1/2'>
                            <p className='font-medium'>Height</p>
                            <p className='text-xs text-slate-500'>(Architectural)</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>271.3 m / 890 ft</p>
                        </div>
                    </div>

                    <div className='flex items-center p-5 border-b border-x'>
                        <div className='w-1/2'>
                            <p className='font-medium'>Height </p>
                            <p className='text-xs text-slate-500'>(Occupied)</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>258.5 m / 848 ft</p>
                        </div>
                    </div>

                    <div className='flex items-center p-5 border-b border-x'>
                        <div className='w-1/2'>
                            <p className='font-medium'>Floor Area</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>77,500 m²</p>
                        </div>
                    </div>

                    <div className='flex justify-between p-5 border-b border-x'>
                        <div className='w-1/2 font-medium'>
                            <p>Floors</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>75</p>
                        </div>
                    </div>

                    <div className='flex justify-between p-5 border-b border-x'>
                        <div className='w-1/2 font-medium'>
                            <p>Basement Floors</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>4</p>
                        </div>
                    </div>

                    <div className='flex justify-between p-5 border-b rounded-b-lg border-x'>
                        <div className='w-1/2 font-medium'>
                            <p>Units / Rooms</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>416</p>
                        </div>
                    </div>

                </div>

                {/* USES BLOCK */}

                <div className=''>
                    <div className='flex justify-between p-5 border rounded-lg'>
                        <div className='w-1/2 font-medium'>
                            <p>Uses</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-1'>
                            <p>Residential</p>
                            <p>Commercial</p>
                            <p>Hotel</p>
                            <p>Casino</p>
                            <p>Parking</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
