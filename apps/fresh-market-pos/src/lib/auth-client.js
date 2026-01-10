import { createAuthClient } from 'better-auth/react';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export const authClient = createAuthClient({
    baseURL: API_BASE_URL,
});

// Export individual hooks for convenience
export const {
    signIn,
    signUp,
    signOut,
    useSession,
} = authClient;

export default authClient;
