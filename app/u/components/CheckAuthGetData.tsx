import createClient from '@/lib/supabase-server';
import { redirect } from 'next/navigation';

export async function checkUserAuthentication() {
    const supabase = createClient();

    const { data: userData, error } = await supabase.auth.getUser();

    if (error || !userData) {
        redirect('/');
    }

    return userData;
}