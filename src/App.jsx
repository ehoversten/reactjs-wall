import { useState } from 'react'
import './App.css'
import Whiteboard from './pages/Whiteboard';
import Todo from './pages/Todo';
import Calendar from './pages/Calendar';
import Modal from './components/Modal/Modal';

function App() {

  // -- Define global state --> ContextAPI -- //
  const [openModal, setOpenModal] = useState(false);


  return (
    <>
      <div>
        <h1>The Wall - Remind Me</h1>
        <Calendar />
        <Whiteboard />
        <Todo />
        <Modal open={openModal} close={setOpenModal}>Bingo Chicken!</Modal>
        <button onClick={() => setOpenModal(!openModal)}></button>
      </div>
    </>
  )
}

export default App
