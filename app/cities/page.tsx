'use client'

import { useEffect, useState } from 'react';
import supabase from '@/lib/supabase-browser';
import Link from 'next/link';

interface City {
    name: string;
    slug: string;
}

export default function AllCitiesPage() {
    const [cities, setCities] = useState<Cities[]>([]);

    useEffect(() => {
        fetchCities();
    }, []);

    const fetchCities = async () => {
        try {
            const { data, error } = await supabase.from('cities').select('name, slug');
            if (error) {
                console.error('Error fetching cities:', error);
            } else {
                setCities(data);
            }
        } catch (error) {
            console.error('Error fetching cities:', error);
        }
    };

    return (

        <div className='m-8 border rounded-lg border-rounded-lg'>
            {cities.map((city) => (
                <Link href={`/cities/${city.slug}`} key={city.slug}>
                    <div className='p-4 border-b'>
                        {city.name}
                    </div>
                </Link>
            ))}
        </div>
    );
}
