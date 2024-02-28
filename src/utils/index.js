import Cookies from 'js-cookie';

export const getAccessToken = () => Cookies.get("token");
export const isAuthenticated = () => !!getAccessToken();