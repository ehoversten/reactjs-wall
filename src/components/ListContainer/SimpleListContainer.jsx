import React from 'react';
import './ListContainer.css';

function SimpleListContainer({ data }) {
    
  return (
    <div className="list-container">
        <h2>SimpleListContainer</h2>
        <div className="item-container">
            { data.map(item => (
                <div className="data-item" key={item}>{item}</div>
            ))}
        </div>
    </div>
  )
}

export default SimpleListContainer