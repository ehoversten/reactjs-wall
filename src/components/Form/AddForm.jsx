import React, { useState, useEffect } from 'react'

function Form({ add }) {

    const [newReminder, setNewReminder] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        add(newReminder);
        setNewReminder('')
    }

  return (
    <div className='add-form-container'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-reminder">Add New : </label>
            <input type="text" 
                   id="new-reminder"
                   value={newReminder} 
                   placeholder='Reminder...'
                   onChange={(evt) => setNewReminder(evt.target.value)}/>
              <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default Form