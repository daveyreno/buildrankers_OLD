import React from 'react'
import createClient from '@/lib/supabase-server';
import UsernameLocation from './components/UsernameLocation';

export default async function UsernameChecker() {

    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    return (
        <UsernameLocation user={user} />
    )
}
