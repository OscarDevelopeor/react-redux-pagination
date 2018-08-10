import { GET_CLIENTS} from '../types';
import axios from 'axios';

export const getClients = () => async dispatch => {

    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);

    dispatch({
        type: GET_CLIENTS,
        payload:res.data
    });
};
