'use client'

import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import supabase from '@/lib/supabase-browser';

interface City {
    name: string;
    slug: string;
}

interface CitiesSidebarProps {
    countryId: string;
}

export default function CitiesSidebar({ countryId }: CitiesSidebarProps) {
    const [cities, setCities] = useState<City[]>([]);

    useEffect(() => {
        async function fetchCities() {
            let query = supabase.from('cities').select('name, slug').limit(8);

            if (countryId) {
                query = query.eq('country_id', countryId);
            }

            const { data, error } = await query;

            if (error) {
                console.error(error);
            } else {
                setCities(data || []);
            }
        }

        fetchCities();
    }, [countryId]);

    return (
        <div className="">
            <div className='flex flex-wrap gap-2 p-3 border rounded-t-lg'>
                {cities.map((city) => (
                    <Link href={`/cities/${city.slug}`} key={city.slug}>
                        <Badge variant="outline">{city.name}</Badge>
                    </Link>
                ))}
            </div>
            <Link href='/cities'>
                <div className='flex justify-center p-3 border-b rounded-b-lg border-x'>
                    <p className='text-xs tracking-widest'>Show more Cities</p>
                </div>
            </Link>
        </div>
    );
}
