import React, { createContext, useState } from 'react';


const EventContext = createContext({});
const RemiderContext = createContext({});
const TodoContext = createContext({});


function DataContextProvider() {
  return (
    <div>dataContext</div>
  )
}

export default DataContextProvider;