import React from 'react'

function ListContainer({ data }) {
  return (
    <div className='list-container'>
        <h2>List Container</h2>
        <div className="data-container">
            { data && data.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    </div>
  )
}

export default ListContainer