import { GET_CLIENTS } from '../types';

const initialState = {
    clients: [],
    client:{} // contacto seleccionado al editar
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_CLIENTS:
        return{
            ...state,
            clients: action.payload
        };
        default:
            return state;
    }
}