'use client'

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Camera, Clapperboard, FileImage, Film } from "lucide-react"


export default function FeedPoster() {
    return (
        <div className='flex gap-2'>
            <Dialog>
                <DialogTrigger asChild>

                    <Button variant="outline" size='lg' className='flex w-full gap-2 h-14'>
                        <Camera className='w-5 h-5' />
                        Post Image
                    </Button>

                </DialogTrigger>

                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Image Post</DialogTitle>
                        <DialogDescription>
                            Select your image and post it to build your rank.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-4 py-4">
                        <div className="grid items-center grid-cols-4 gap-4">
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" className='w-full'>Post</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <Dialog>
                <DialogTrigger asChild>

                    <Button variant="outline" size='lg' className='flex w-full gap-2 h-14'>
                        <Clapperboard className='w-5 h-5' />
                        Post Video
                    </Button>

                </DialogTrigger>

                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Video Post</DialogTitle>
                        <DialogDescription>
                            Enter the relevant YouTube video url to build rank.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-4 py-4">
                        <div className="grid items-center grid-cols-4 gap-4">
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" className='w-full'>Post</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
