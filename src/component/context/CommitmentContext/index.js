import React, { createContext, useReducer } from "react";
import { initialState } from "./constants";
import { reducer } from "./reducer";

export const CommitmentContext = createContext();

export const CommitmentProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CommitmentContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CommitmentContext.Provider>
  );
};

export default CommitmentProvider;
