import { useSession, signIn, signUp, signOut } from '../lib/auth-client';

/**
 * Custom hook for authentication state and actions
 */
export function useAuth() {
    const { data: session, isPending, error, refetch } = useSession();

    const user = session?.user ?? null;
    const isAuthenticated = !!user;
    const isLoading = isPending;

    const login = async (email, password) => {
        const result = await signIn.email({
            email,
            password,
        });
        if (result.error) {
            throw new Error(result.error.message);
        }
        await refetch();
        return result;
    };

    const loginWithGoogle = async () => {
        const result = await signIn.social({
            provider: 'google',
        });
        if (result.error) {
            throw new Error(result.error.message);
        }
        return result;
    };

    const register = async (email, password, name) => {
        const result = await signUp.email({
            email,
            password,
            name,
        });
        if (result.error) {
            throw new Error(result.error.message);
        }
        await refetch();
        return result;
    };

    const logout = async () => {
        const result = await signOut();
        if (result.error) {
            throw new Error(result.error.message);
        }
        await refetch();
        return result;
    };

    return {
        user,
        session,
        isAuthenticated,
        isLoading,
        error,
        login,
        loginWithGoogle,
        register,
        logout,
        refetch,
    };
}

export default useAuth;
