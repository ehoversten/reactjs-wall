import React, { useState, useEffect } from 'react'

function Form({ add, update }) {

    const [newItem, setNewItem] = useState('');

    useEffect(() => {
      if(update) {
        setNewItem(update);
      }
    }, [update])


    const handleSubmit = (evt) => {
        evt.preventDefault();
        add(newItem);
        setNewItem('')
        update('')
    }

  return (
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="reminder">Add New : </label>
            <input type="text" 
                   id="item"
                   value={newItem}
                   placeholder='Add New ...' 
                   onChange={(evt) => setNewItem(evt.target.value)}/>
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