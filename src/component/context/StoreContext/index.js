import React, { createContext, useReducer } from "react";
import { initialState } from "./constants";
import { reducer } from "./reducer";

export const StoreContext = createContext();

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
