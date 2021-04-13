import React, { createContext, useState } from "react";
export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Harry Potter", id: 1 },
    { title: "Four Agreements", id: 2 },
    {
      title: "Snakes and ladders guide for dummies",
      id: 3,
    },
  ]);
    
    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    )
};

export default BookContextProvider;
