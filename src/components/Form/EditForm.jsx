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
                <label htmlFor="edit-reminder">Edit Reminder:</label>
                <input type="text" 
                    id="edit-reminder"
                    value={editReminder} 
                    onChange={(evt) => setEditReminder(evt.target.value)}/>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default EditForm