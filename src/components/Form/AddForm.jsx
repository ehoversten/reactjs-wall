import React, { useState, useEffect } from 'react'

function Form({ add }) {

    const [newReminder, setNewReminder] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        add(newReminder);
        setNewReminder('')
    }

  return (
    <div className='add-form-container my-5'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-reminder" className='block text-left text-sm font-medium text-green-700 mb-2'>Add New : </label>
            <input type="text" 
                   id="new-reminder"
                   className='mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400'
                   value={newReminder} 
                   placeholder='Reminder...'
                   onChange={(evt) => setNewReminder(evt.target.value)}/>
            <button type="submit" className='w-full bg-green-700 hover:bg-green-800 my-5'>Add</button>
        </form>
    </div>
  )
}

export default Form