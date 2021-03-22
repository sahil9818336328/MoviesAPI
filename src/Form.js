import React from "react";
import { useGlobalContext } from "./context";

const Form = () => {
  const { query, setQuery } = useGlobalContext(); // accessing initial value

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>movies</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default Form;
