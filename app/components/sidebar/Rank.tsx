import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";

export default function BuildingRank() {
    return (

        <div className=''>
            <div className='flex flex-col gap-3 p-4 border rounded-t-lg'>

                <div className='flex justify-between'>
                    <div className='mt-1 font-semibold tracking-tighter'>Ranking</div>
                    <Select>
                        <SelectTrigger className="w-[160px]">
                            <SelectValue placeholder="Height" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Metric</SelectLabel>
                                <SelectItem value="height">Height</SelectItem>
                                <SelectItem value="popularity">Popularity</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className='py-4 border rounded'>
                    <p className='flex justify-center text-2xl font-extrabold tracking-tighter'>2,345th</p>
                    <p className='flex justify-center text-slate-500'>Global Rank</p>
                </div>
            </div>

            <Link href='/b/rankings'>
                <div className='flex justify-center p-4 border-b rounded-b-lg cursor-pointer border-x'>
                    <p className='text-xs tracking-widest'>More Rankings</p>
                </div>
            </Link>
        </div>

    )
}
