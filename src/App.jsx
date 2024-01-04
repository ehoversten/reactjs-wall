import { useState } from 'react'
import './App.css'
import Whiteboard from './pages/Whiteboard';
import Todo from './pages/Todo';

function App() {

  // -- Define global state --> ContextAPI -- //

  return (
    <>
      <div>
        <h1>The Wall - Remind Me</h1>
        <Whiteboard />
        <Todo />
      </div>
    </>
  )
}

export default App
