import React from 'react'

function ListContainer({ data, remove, edit }) {
  return (
    <div className='list-container'>
        <h2>List Container</h2>
        <div className="data-container">
            { data && data.map((item, index) => (
                <div className="data-item" key={index}>
                  <p>{item}</p>
                  <button className="edit" onClick={() => edit(item)}>Edit</button>
                  <button className="delete" onClick={() => remove(item)}>X</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ListContainer