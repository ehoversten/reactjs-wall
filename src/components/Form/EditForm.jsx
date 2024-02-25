import React, { useState } from 'react'

function EditForm({ data, update }) {

    const [editReminder, setEditReminder] = useState(data);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        update(editReminder);
        setEditReminder('')
    }

    return (
      
        <div className='edit-form-container'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="edit-reminder" className='block text-left text-sm font-medium text-green-700'>Edit Reminder:</label>
                <input type="text" 
                    id="edit-reminder"
                    className='mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400'
                    value={editReminder} 
                    onChange={(evt) => setEditReminder(evt.target.value)}/>
                <button type="submit" className='w-full bg-green-700 hover:bg-green-800 my-5'>Update</button>
            </form>
        </div>
    )
}

export default EditForm