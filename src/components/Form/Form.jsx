import React, { useState } from 'react'

function Form({ add }) {

    const [newReminder, setNewReminder] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        add(newReminder);
        setNewReminder('')
    }

  return (
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="reminder">Add New Reminder:</label>
            <input type="text" 
                   id="reminder"
                   value={newReminder} 
                   onChange={(evt) => setNewReminder(evt.target.value)}/>
            <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default Form