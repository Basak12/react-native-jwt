import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

interface AuthContextProps {
    authState?: { token: string | null; authenticated: boolean | null };
    onRegister?: (email: string, password: string) => Promise<any>;
    onLogin?: (email: string, password: string) => Promise<any>;
    onLogout?: () => Promise<any>;
}

const TOKEN_KEY = "my-jwt";
export const API_URL = 'https://api.developbetterapps.com';
const AuthContext = createContext<AuthContextProps>({});

export const useAuth = () => {
    return useContext(AuthContext);
}
export const AuthProvider = ({children}: any) => {
    const [authState, setAuthState] = useState<{
            token: string | null;
            authenticated: boolean | null;

    }>({
        token: null,
        authenticated: null,
    })
    const [user, setUser] = useState<{
        id: string | null;
        email: string | null;
    }>({
        id: null,
        email: null,
    });

    useEffect(() =>{
        const loadedToken = async () => {
            const token = await SecureStore.getItemAsync(TOKEN_KEY);
            console.log('stored:', token)
            if(token){
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                setAuthState({
                    token: token,
                    authenticated:true,
                })
            }
        }
        loadedToken()
    }, [])

    const register= async (email: string, password: string) => {
        try {
            return await axios.post(`${API_URL}/users`, {email, password});
        } catch (e: string | any) {
            if (e.response && e.response.data && e.response.data.msg) {
                return { error: true, msg: e.response.data.msg };
            } else {
                return { error: true, msg: 'An unknown error occurred during registration.' };
            }
        }
    };

    const login= async (email: string, password: string) => {
        try {
            const result = await axios.post(`${API_URL}/auth`, {email,password});
            setAuthState({
                token: result.data.token,
                authenticated: true,
            });

            axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`
            await SecureStore.setItemAsync(TOKEN_KEY, result.data.token);
            return result;
        }catch (e){
            return {error: true, msg: (e as any).response.data.msg};
        }
    };
    const logout= async () => {
        await SecureStore.deleteItemAsync(TOKEN_KEY); // delete token from storage
        axios.defaults.headers.common['Authorization'] = ''; // update HTTP headers
        // Reset auth state
        setAuthState({
            token: null,
            authenticated: false,
        })

    };

    const value = {
        onRegister: register,
        onLogin: login,
        onLogout: logout,
        authState,
    };

    return <AuthContext.Provider value = {value}>{children}</AuthContext.Provider>
}