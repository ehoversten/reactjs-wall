import React, { useState } from 'react'
import Form from '../components/Form/Form'
import ListContainer from '../components/ListContainer/ListContainer'

function Whiteboard() {
    const [reminders, setReminders] = useState(['one', 'two']);

    const addReminder = (item) => {
        setReminders(prev => [...prev, item]);
    }

  return (
    <div className='whiteboard-container'>
        <h2>Whiteboard</h2>
        <Form add={addReminder} />
        <ListContainer data={reminders}/>
    </div>
  )
}

export default Whiteboard