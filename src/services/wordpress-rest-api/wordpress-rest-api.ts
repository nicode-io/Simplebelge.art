import axios, {AxiosRequestConfig} from 'axios';
import {WP_URL}                    from '../../env/env';


/**
 * Fetch all posts from WP
 */
export const wpFetchAllPosts: () => Promise<any> = async () => {
    const config: AxiosRequestConfig = {
        url: 'wp-json/wp/v2/posts',
        method: 'get',
        baseURL: WP_URL,
        headers: {'Content-Type': 'application/json'},
    };

    return WPQuery(config);
};

/**
 * Fetch custom books from WP
 */
export const wpFetchAllBooks: () => Promise<any> = async () => {
    const config: AxiosRequestConfig = {
        url: 'wp-json/wp/v2/books',
        method: 'get',
        baseURL: WP_URL,
        headers: {'Content-Type': 'application/json'},
    };

    return WPQuery(config);
};


/**
 * Fetch a specific WP user
 */
export const wpFetchUser: (userId: number) => Promise<any> = async (userId) => {
    const config: AxiosRequestConfig = {
        url: `wp-json/wp/v2/users/${userId}`,
        method: 'get',
        baseURL: WP_URL,
        headers: {'Content-Type': 'application/json'},
    };

    return WPQuery(config);
};


/**
 * Generic HTTP query for WordPress REST API
 * @param config
 * @return if success returns response.data
 * if failed return errorStatus if it's a server error
 * or error.message if it's an internal error
 */
export const WPQuery: (config: AxiosRequestConfig) => Promise<any> = async (config) => {
    const response = await axios(config);
    return response.data;
};
