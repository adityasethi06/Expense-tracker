import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial state
const initialState = {
    transactions: [
        {id:1 , text: 'salary', amount: 1000},
        {id:2 , text: 'camera', amount: -100}
    ]
}

// create context
export const GlobalContext = createContext(initialState);

//Provider component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            dispatch
        }}>
            {children}
        </GlobalContext.Provider>
    )
}