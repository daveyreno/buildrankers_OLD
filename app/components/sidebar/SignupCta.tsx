import { Button } from "@/components/ui/button";
import Link from "next/link";



export default function SignupCta() {
    return (
        <div className='p-3 border rounded-lg'>
            <div className='flex flex-col gap-3 p-3'>
                <h1 className='text-xl font-semibold tracking-tighter'>
                    Rank with us!
                </h1>
                <p className='text-sm text-slate-500'>Join the other rankers and help us to build the #1 building resource.</p>
            </div>
            <Link href='/sign-up'>
                <Button className='w-full mt-3'>Join</Button>
            </Link>
        </div>
    )
}