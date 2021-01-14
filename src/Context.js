import React, { createContext } from 'react'
export const DataContext = createContext();

export default function DataProvider(props) {
   const jsonServer = `http://localhost:3001/users/`;
   return (
      <>
         <DataContext.Provider value={{ jsonServer }}>
            {props.children}
         </DataContext.Provider>
      </>
   )
}
