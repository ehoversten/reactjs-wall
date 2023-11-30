import React, { useState } from 'react'
import Form from '../components/Form/Form'
import ListContainer from '../components/ListContainer/ListContainer'

function Whiteboard() {
    const [reminders, setReminders] = useState(['one', 'two']);
    const [toUpdate, setToUpdate] = useState('');

    const addReminder = (item) => {
        
        setReminders(prev => [...prev, item]);
    }

    const removeReminder = (toRemove) => {
      console.log('removing: ', toRemove)
      let filtered = reminders.filter(item => {
        if(item !== toRemove) {
          return item;
        }
      })
      setReminders(filtered);
    }

    const editReminder = (toEdit) => {
      console.log('editing: ', toEdit);

      setToUpdate(toEdit);
    }

  return (
    <div className='whiteboard-container'>
        <h2>Whiteboard</h2>
        <Form add={addReminder} update={toUpdate}/>
        <ListContainer data={reminders} remove={removeReminder} update={editReminder}/>
    </div>
  )
}

export default Whiteboard