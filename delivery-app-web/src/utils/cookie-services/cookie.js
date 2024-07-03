

import { jwtDecode } from 'jwt-decode';
import UniversalCookie from 'universal-cookie';

const cookies = new UniversalCookie();

const TOKEN = 'jwtToken';

export const getToken = () => cookies.get(TOKEN);

export const setToken = (token) => cookies.set(TOKEN, token, { path: '/' });

export const removeToken = () => cookies.remove(TOKEN, { path: '/' });

export const getUserDetailsFromToken = () => {
    return jwtDecode(getToken())
}
