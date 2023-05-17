'use client'

import { useEffect, useState } from 'react';
import supabase from '@/lib/supabase-browser';
import Link from 'next/link';

interface Country {
    name: string;
    slug: string;
}

export default function AllCountriesPage() {
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        fetchCountries();
    }, []);

    const fetchCountries = async () => {
        try {
            const { data, error } = await supabase.from('countries').select('name, slug');
            if (error) {
                console.error('Error fetching countries:', error);
            } else {
                setCountries(data);
            }
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    };

    return (

        <div className='m-8 border rounded-lg border-rounded-lg'>
            {countries.map((country) => (

                <Link href={`/countries/${country.slug}`} key={country.slug}>
                    <div className='p-4 border-b'>
                        {country.name}
                    </div>
                </Link>
            ))}
        </div>
    );
}
