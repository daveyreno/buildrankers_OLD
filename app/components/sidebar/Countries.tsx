'use client'

import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import supabase from '@/lib/supabase-browser';

interface Country {
    name: string;
    slug: string;
}

export default function CountriesSidebar() {
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        async function fetchCountries() {
            const { data, error } = await supabase
                .from('countries')
                .select('name, slug')
                .limit(8);

            if (error) {
                console.error(error);
            } else {
                setCountries(data || []); // Add an empty array as fallback
            }
        }

        fetchCountries();
    }, []);

    return (
        <div className="">
            <div className='flex flex-wrap gap-2 p-3 border rounded-t-lg'>
                {countries.map((country: Country) => (
                    <Link href={`/countries/${country.slug}`} key={country.slug}>
                        <Badge variant="outline">{country.name}</Badge>
                    </Link>
                ))}
            </div>
            <Link href='/countries'>
                <div className='flex justify-center p-3 border-b rounded-b-lg border-x'>
                    <p className='text-xs tracking-widest'>Show more Countries</p>
                </div>
            </Link>
        </div>
    );
}