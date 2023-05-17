import { Button } from '@/components/ui/button';
import Feed from '@/components/feed/Feed';
import SignupCta from '@/app/components/sidebar/SignupCta';
import CitiesSidebar from '@/app/components/sidebar/Cities';
import Rank from '@/app/components/sidebar/Rank';
import createClient from '@/lib/supabase-server';

export default async function RegionPage({ params }) {
    const { slug } = params;
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    const isAuthenticated = !!user;


    const { data: regionData, error } = await supabase
        .from('regions')
        .select('*')
        .eq('slug', slug)
        .single();

    if (error || !regionData) {
        throw new Error('Region not found');
    }

    const { data: countryData } = await supabase
        .from('countries')
        .select('name')
        .eq('id', regionData.country_id)
        .single();

    return (
        <div className=''>
            <div className='flex items-center justify-center h-40 border-b md:h-48 lg:h-60'>
                <div className='flex flex-row justify-center w-full max-w-5xl p-4 lg:p-0'>
                    <div className='flex flex-col justify-center md:w-2/3'>
                        <h1 className='flex justify-center text-4xl font-extrabold tracking-tighter md:text-5xl'>
                            {regionData.name}
                        </h1>
                        <p className='flex justify-center md:mt-2 md:text-lg text-slate-500'>
                            {countryData?.name}
                        </p>
                    </div>
                    <div className='md:w-1/3'></div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='w-full max-w-5xl p-4'>
                    <div className='flex flex-col gap-6 md:flex-row'>
                        <div className='w-full md:w-2/3'>
                            <div className='flex items-center justify-between mb-4'>
                                <h2 className='text-2xl font-semibold tracking-tighter'>Feed</h2>
                                <Button variant='outline'>Follow</Button>
                            </div>
                            <Feed />
                        </div>
                        <div className='flex flex-col w-full gap-4 md:-mt-48 md:w-1/3'>
                            <Rank />
                            {isAuthenticated ? null : <SignupCta />}
                            <CitiesSidebar regionId={regionData.id} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}