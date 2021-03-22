import React, { createContext, useContext, useState } from "react";
import useFetch from "./useFetch";

const globalContext = createContext("PROVIDER NOT FOUND");
const AppProvider = ({ children }) => {
  const Provider = globalContext.Provider;

  const [query, setQuery] = useState("Superman");
  const { isLoading, isError, movies } = useFetch(`&s=${query}`); // accessing state varibles from useFetch hook , passing argument === url parameters

  return (
    <Provider value={{ query, setQuery, isError, isLoading, movies }}>
      {" "}
      {/* accessing the value globally */}
      {children}
    </Provider>
  );
};

// CUSTOM HOOK
const useGlobalContext = () => {
  return useContext(globalContext);
};
export { AppProvider, useGlobalContext };
