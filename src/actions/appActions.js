import axios from 'axios';
import { FETCH_PROFILES } from '../constants/appConstants';


export function fetchProfile () {

    const request = axios.get('/data');
    return { type: FETCH_PROFILES, payload: request };

}