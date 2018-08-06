import { GET_CLIENTS, DELETE_CLIENT, ADD_CLIENT, GET_CLIENT, UPDATE_CLIENT } from '../types';

const initialState = {
    clients: [
        {id:1, name: 'Peishion', lastName: 'Cookie', phone:'5566889900', email:'peishion@asd.com'},
        {id:2, name: 'Capuchina', lastName: 'Precishi', phone:'7766554433', email:'capuchina@asd.com'},
    ],
    client:{} // contacto seleccionado al editar
};

export default function(state = initialState, action){
    switch(action.type){
       
        default:
            return state;
    }
}