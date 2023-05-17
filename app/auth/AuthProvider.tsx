'use client'

import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

import supabase from '@/lib/supabase-browser';

export const EVENTS = {
    PASSWORD_RECOVERY: 'PASSWORD_RECOVERY',
    SIGNED_OUT: 'SIGNED_OUT',
    USER_UPDATED: 'USER_UPDATED',
};

interface AuthProviderProps {
    accessToken: string;
    children: ReactNode;
}

export const AuthContext = createContext<any>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ accessToken, children }) => {
    const [initial, setInitial] = useState(true);
    const [session, setSession] = useState<any>(null);
    const [user, setUser] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        async function getActiveSession() {
            const { data } = await supabase.auth.getSession();
            const activeSession = data?.session;
            setSession(activeSession);
            setUser(activeSession?.user ?? null);
            setInitial(false);
        }
        getActiveSession();

        const { data } = supabase.auth.onAuthStateChange((event, currentSession) => {
            if (currentSession?.access_token !== accessToken) {
                window.location.reload();
            }

            setSession(currentSession);
            setUser(currentSession?.user ?? null);
        });

        return () => {
            data?.subscription?.unsubscribe();
        };
    }, [accessToken, router]);

    const value = useMemo(
        () => ({
            initial,
            session,
            user,
            signOut: () => supabase.auth.signOut(),
        }),
        [initial, session, user]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === null) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
