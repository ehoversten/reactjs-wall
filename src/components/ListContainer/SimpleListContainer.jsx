import React from 'react';
import './ListContainer.css';

function SimpleListContainer({ data, remove, complete, edit }) {

  return (
    <div className="list-container">
        <h2>SimpleListContainer</h2>
        <div className="item-container">
            { data.map(item => (
                <div className="data-item" key={item.id}>
                    <p>{item.title}</p>
                    <button className="complete" onClick={() => complete(item.id)}>Done</button>
                    <button className="delete" onClick={() => remove(item.id)}>X</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SimpleListContainer