import createClient from '@/lib/supabase-server'
import { Frown } from 'lucide-react'

import ProfileAvatar from './components/ProfileAvatar'
import ProfileRank from './components/ProfileRank'
import ProfileRankLogs from './components/ProfileRankLogs'
import Feed from '@/components/feed/Feed'
import { Button } from '@/components/ui/button'


export default async function ProfilePage({ params }) {
    const { username } = params
    const supabase = createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    const { data: profileData, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('username', username)
        .single();

    if (error) {
        // Handle error fetching user profile
        console.error('Error fetching user profile:', error)
        // Render an error state or redirect to an error page
        return <div>Error fetching user profile</div>
    }

    // Check if this is the viewing user's profile or not
    const isOwnProfile = user && user.id === profileData?.id;
    const profileType = isOwnProfile ? 'owner' : 'public';

    return (
        <div className=''>
            <div className='flex items-center justify-center h-40 border-b md:h-48 lg:h-60'>
                <div className='flex flex-row justify-center w-full max-w-5xl p-4 lg:p-0'>
                    <div className='flex flex-col justify-center md:w-2/3'>

                        <div className="flex items-baseline justify-center">
                            <p className="mr-1 text-slate-400">u/</p>
                            <h1 className="flex justify-center text-4xl font-extrabold tracking-tighter md:text-5xl">{username}</h1>
                        </div>

                        <p className='flex justify-center gap-2 md:mt-2 md:text-lg text-slate-500'>
                            <p>{profileData.location}</p>
                        </p>
                    </div>
                    <div className='md:w-1/3'></div>

                </div>
            </div>

            <div className='flex justify-center w-full p-4'>
                <div className='flex flex-col-reverse w-full max-w-5xl gap-6 md:flex-row'>

                    {/* CONTENT PANEL */}
                    <div className='w-full md:w-2/3'>
                        <div className='flex items-center justify-between mb-4'>
                            <h2 className='text-2xl font-semibold tracking-tighter'>Feed</h2>
                            <Button variant='outline'>Follow</Button>
                        </div>
                        <Feed />
                    </div>

                    {/* RIGHT PANEL */}
                    <div className='flex flex-col w-full md:-mt-48 md:w-1/3'>
                        <div className='flex justify-center pb-6 border rounded-t-lg'>
                            <ProfileAvatar profile={profileData} profileType={profileType} />
                        </div>
                        <div className='p-4 border-b border-x'>
                            <ProfileRank />
                        </div>
                        <div className='border-b rounded-b-lg border-x'>
                            <ProfileRankLogs />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
