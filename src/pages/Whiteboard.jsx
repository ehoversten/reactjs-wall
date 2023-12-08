import React, { useState } from 'react'
import Form from '../components/Form/Form'
import AddForm from '../components/Form/AddForm';
import EditForm from '../components/Form/EditForm';
import ListContainer from '../components/ListContainer/ListContainer';


function Whiteboard() {
    const [reminders, setReminders] = useState(['one', 'two']);
    const [toUpdate, setToUpdate] = useState('');
    const [isUpdating, setIsUpdating] = useState(false);

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

    const selectReminder = (item) => {
      setIsUpdating(true);
      setToUpdate(item);
    }

    const editReminder = (toEdit) => {
      console.log('editing: ', toEdit);

      // Remove old item and replace 
      let nonEditRemiders = reminders.filter(item => {
        return item !== toUpdate;
      });

      nonEditRemiders.push(toEdit);
      setReminders(nonEditRemiders)
      // Search for item by id and update value

      setIsUpdating(false);
      setToUpdate(null);
    }

  return (
    <div className='whiteboard-container'>
        <h2>Whiteboard</h2>
        { isUpdating ? (
            <EditForm data={toUpdate} update={editReminder}/>
          ) : (
            <AddForm add={addReminder}/>
        )}
        <ListContainer data={reminders} remove={removeReminder} edit={selectReminder}/>
    </div>
  )
}

export default Whiteboard