import axios from 'axios';

/**
 * Our configuration of axios.
 */
export const apiClient = axios.create({
    baseURL: "http://feat01-drupal8.dmz.local/dib/",
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json'
    }
});
