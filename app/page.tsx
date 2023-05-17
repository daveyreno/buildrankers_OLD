import { Activity } from "lucide-react";
import RandomBuildings from "./components/RandomBuildings";
import SignupCta from "./components/sidebar/SignupCta";
import createClient from '@/lib/supabase-server'
import CountriesSidebar from "./components/sidebar/Countries";
import RegionsSidebar from "./components/sidebar/Regions";
import CitiesSidebar from "./components/sidebar/Cities";
import Feed from "@/components/feed/Feed";

export default async function HomePage() {

  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const isAuthenticated = !!user;

  return (
    <div className='flex justify-center mb-4'>

      {/* RECENTLY UPDATED */}
      <div className='flex flex-col w-full max-w-5xl gap-2'>

        <RandomBuildings />

        {/* CONTENT BLOCK */}

        <div className='flex items-center gap-1 mt-4 mb-3 ml-2 md:ml-0'>
          <Activity className='w-4 h-4' />
          <h2 className='text-sm tracking-widest'>Popular</h2>
        </div>

        <div className='flex flex-col-reverse gap-4 md:flex-row'>
          <div className='w-full md:w-2/3'>
            <Feed />
          </div>

          <div className='flex flex-col w-full gap-4 md:w-1/3'>

            {isAuthenticated ? null : <SignupCta />}

            <CountriesSidebar />
            <RegionsSidebar />
            <CitiesSidebar />

          </div>
        </div>
      </div>
    </div>
  )
}