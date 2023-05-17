'use client'

import { useEffect, useState } from 'react';
import supabase from '@/lib/supabase-browser';
import Link from 'next/link';

interface Region {
    name: string;
    slug: string;
}

export default function AllRegionsPage() {
    const [regions, setRegions] = useState<Regions[]>([]);

    useEffect(() => {
        fetchRegions();
    }, []);

    const fetchRegions = async () => {
        try {
            const { data, error } = await supabase.from('regions').select('name, slug');
            if (error) {
                console.error('Error fetching regions:', error);
            } else {
                setRegions(data);
            }
        } catch (error) {
            console.error('Error fetching regions:', error);
        }
    };

    return (

        <div className='m-8 border rounded-lg border-rounded-lg'>
            {regions.map((region) => (

                <Link href={`/regions/${region.slug}`} key={region.slug}>
                    <div className='p-4 border-b'>
                        {region.name}
                    </div>
                </Link>
            ))}
        </div>
    );
}
