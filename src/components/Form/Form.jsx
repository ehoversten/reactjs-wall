import React, { useState, useEffect } from 'react'

function Form({ add, update }) {

    const [newReminder, setNewReminder] = useState('');

    useEffect(() => {
      if(update) {
        setNewReminder(update);
      }
    }, [update])


    const handleSubmit = (evt) => {
        evt.preventDefault();
        add(newReminder);
        setNewReminder('')
        update('')
    }

  return (
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="reminder">Add New Reminder:</label>
            <input type="text" 
                   id="reminder"
                   value={newReminder} 
                   onChange={(evt) => setNewReminder(evt.target.value)}/>
            { update ? (
              <button type="submit">Update</button>
            ) : (
              <button type="submit">Add</button> )
            }
            
        </form>
    </div>
  )
}

export default Form