import { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export const ContactsContext = createContext();

const initialState = {
    contacts: [],
    errors: {},
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_CONTACTS":
            return { ...state, contacts: action.payload };
        case "ADD_CONTACT":
            return { ...state, contacts: [...state.contacts, action.payload] };
        case "UPDATE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.map(contact =>
                    contact.id === action.payload.id ? action.payload : contact
                )
            };
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case "SET_ERRORS":
            return { ...state, errors: action.payload };
        case "RESET_CONTACTS":
            return initialState;
        default:
            return state;
    }
};

export const ContactsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchContacts = async () => {
            const response = await axios.get('http://localhost:5000/contacts');
            dispatch({ type: 'SET_CONTACTS', payload: response.data });
        };
        fetchContacts();
    }, []);

    const addContact = async (contact) => {
        const newContact = { ...contact, id: uuidv4() };
        const response = await axios.post('http://localhost:5000/contacts', newContact);
        dispatch({ type: 'ADD_CONTACT', payload: response.data });
    };

    const updateContact = async (contact) => {
        await axios.put(`http://localhost:5000/contacts/${contact.id}`, contact);
        dispatch({ type: 'UPDATE_CONTACT', payload: contact });
    };

    const deleteContact = async (id) => {
        await axios.delete(`http://localhost:5000/contacts/${id}`);
        dispatch({ type: 'DELETE_CONTACT', payload: id });
    };

    return (
        <ContactsContext.Provider value={{
            contacts: state.contacts,
            addContact,
            updateContact,
            deleteContact,
            errors: state.errors,
            dispatch,
        }}>
            {children}
        </ContactsContext.Provider>
    );
};

