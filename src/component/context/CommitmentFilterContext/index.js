import React, { createContext, useReducer } from 'react';
import { initialState } from "./constants";
import { reducer } from "./reducer";

export const CommitmentFilterContext = createContext();

const CommitmentFilterProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <CommitmentFilterContext.Provider value={{ state, dispatch }}>
            {props.children}
        </CommitmentFilterContext.Provider>
    );
}

export default CommitmentFilterProvider;