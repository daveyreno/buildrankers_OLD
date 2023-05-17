'use client'

import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import supabase from '@/lib/supabase-browser';

interface Region {
    id: string;
    name: string;
    slug: string;
    country_id: string;
}

interface Country {
    id: string;
    name: string;
    slug: string;
}

interface CountriesSidebarProps {
    countryId?: string;
}

export default function CountriesSidebar({ countryId }: CountriesSidebarProps) {
    const [regions, setRegions] = useState<Region[]>([]);
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        async function fetchRegions() {
            let query = supabase.from('regions').select('id, name, slug, country_id').limit(8);

            if (countryId) {
                query = query.eq('country_id', countryId);
            }

            const { data: regionsData, error: regionsError } = await query;

            if (regionsError) {
                console.error(regionsError);
            } else {
                setRegions(regionsData || []);
            }
        }

        async function fetchCountries() {
            const { data: countriesData, error: countriesError } = await supabase
                .from('countries')
                .select('id, name, slug');

            if (countriesError) {
                console.error(countriesError);
            } else {
                setCountries(countriesData || []);
            }
        }

        fetchRegions();
        fetchCountries();
    }, [countryId]);

    return (
        <div className="">
            <div className="flex flex-wrap gap-2 p-3 border rounded-t-lg">
                {regions.map((region) => (
                    <Link href={`/regions/${region.slug}`} key={region.id}>
                        <Badge variant="outline">{region.name}</Badge>
                    </Link>
                ))}
            </div>
            <Link href="/regions">
                <div className="flex justify-center p-3 border-b rounded-b-lg border-x">
                    <p className="text-xs tracking-widest">Show more Regions</p>
                </div>
            </Link>
        </div>
    );
}
