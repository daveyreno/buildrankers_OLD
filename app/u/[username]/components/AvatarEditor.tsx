import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


export default function AvatarEditor() {
    return (
        <Dialog>
            <DialogTrigger asChild className='cursor-pointer'>
                <Avatar className='w-32 h-32'>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Update Avatar</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center gap-2">
                    <Avatar className='mb-3 w-36 h-36'>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col w-full gap-2">
                        <p className="flex justify-center text-sm">Zoom</p>
                        <div className="flex justify-between gap-4 -mt-3">
                            <Button variant="outline">-</Button>
                            <Slider />
                            <Button variant="outline">+</Button>
                        </div>

                    </div>
                    <div className="flex flex-col w-full gap-3 mt-4">
                        <Button type="submit" variant="outline" className="w-full">Choose New Image</Button>
                        <Button type="submit" className="w-full">Save</Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
