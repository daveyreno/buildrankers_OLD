import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Slider } from '@/components/ui/slider';
import { PlusCircle, MinusCircle } from 'lucide-react'

export default function ProfileAvatar({ profile, profileType }) {

    const { username, avatar_url } = profile;
    const avatarFallbackChar = username.charAt(0);

    const handleUpdateAvatar = () => {
        // Logic to handle avatar update
    };

    return (
        <div className='-mt-8 h-36'>
            {/* Profile Avatar */}
            {profileType === 'owner' ? (
                <div className="flex justify-between w-full">
                    <Dialog>
                        {/* Dialog Trigger */}
                        <DialogTrigger asChild className="cursor-pointer">
                            <Avatar className='border-4 w-36 h-36'>
                                <AvatarImage src={avatar_url} alt={username} />
                                <AvatarFallback>{avatarFallbackChar}</AvatarFallback>
                            </Avatar>
                        </DialogTrigger>

                        {/* Dialog Content */}
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Update Avatar</DialogTitle>
                            </DialogHeader>
                            <div className="flex flex-col items-center gap-2">
                                {/* Avatar Update Form */}
                                {/* Add form fields, input for new image selection, etc. */}
                                <Avatar className="w-48 h-48 mb-3">
                                    <AvatarImage src={avatar_url} alt={username} />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col w-full gap-2">
                                    <p className="flex justify-center text-sm">Zoom</p>
                                    <div className="flex justify-between gap-4 -mt-3">
                                        <Button variant="outline">
                                            <MinusCircle className='w-5' />
                                        </Button>
                                        <Slider />
                                        <Button variant="outline">
                                            <PlusCircle className='w-5' />
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full gap-3 mt-4">
                                    <Button type="submit" variant="outline" className="w-full">
                                        Choose New Image
                                    </Button>
                                    <Button type="submit" className="w-full">
                                        Save
                                    </Button>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>

                </div>
            ) : (
                <Avatar className="w-16 h-16 border-4 md:text-xl lg:text-2xl md:w-24 md:h-24 lg:w-36 lg:h-36">
                    <AvatarImage src={avatar_url} alt={username} />
                    <AvatarFallback>{avatarFallbackChar}</AvatarFallback>
                </Avatar>
            )}
        </div>
    );
}
