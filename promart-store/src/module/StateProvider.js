import React, {createContext, useContext, useReducer} from "react";

//preparing the data layer
export const StateContext = createContext()

//wrap our component, provide the provider
export const StateProvider =({reducer, initialState, children}) => {
    return (<StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    </StateContext.Provider>)
};
//this is how we can use it inside a component
export const useStateValue =()=>useContext(StateContext)