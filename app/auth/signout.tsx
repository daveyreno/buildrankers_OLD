'use client';

import { useAuth } from '@/app/auth/AuthProvider';
import { useRouter } from 'next/navigation'

import { DropdownMenuItem } from "../../components/ui/dropdown-menu";
import { LogOut } from "lucide-react";

export default function SignOut() {

    const { signOut } = useAuth()
    const router = useRouter()

    async function handleSignOut() {

        const { error } = await signOut();
        router.push('/sign-in')

        if (error) {
            console.error('ERROR signing out:', error);
        }
    }

    return (
        <DropdownMenuItem onClick={handleSignOut}>
            <LogOut className="w-4 h-4 mr-2" />
            <span>Log out</span>
        </DropdownMenuItem>
    );
}
