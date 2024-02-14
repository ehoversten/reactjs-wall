import React, { useState, useEffect, useRef } from 'react'

function Form({ add, update }) {

    const [newItem, setNewItem] = useState('');

    const focusRef = useRef(null);

    useEffect(() => {
      focusRef.current.focus();
      if(update) {
        setNewItem(update);
      }
    }, [update])


    const handleSubmit = (evt) => {
        evt.preventDefault();
        add(newItem);
        setNewItem('')
        // update('')
    }

  return (
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="reminder"
                   className="block text-left text-sm font-medium text-green-700 mb-2">Add New : </label>
            <input type="text" 
                   id="item"
                   className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
                   value={newItem}
                   ref={focusRef}
                   placeholder='Task...' 
                   onChange={(evt) => setNewItem(evt.target.value)}/>
            { update ? (
              <button type="submit" className='w-full bg-green-700 hover:bg-green-800 my-5'>Update</button>
            ) : (
              <button type="submit" className='w-full bg-green-700 hover:bg-green-800 my-5'>Add</button> )
            }
            
        </form>
    </div>
  )
}

export default Form