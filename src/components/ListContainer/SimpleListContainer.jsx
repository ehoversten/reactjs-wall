import React from 'react';
import { FaTrashAlt, FaCalendarCheck, FaEdit } from "react-icons/fa";
import { Tooltip } from 'react-tooltip'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import './ListContainer.css';

function SimpleListContainer({ data, remove, complete, edit }) {

  return (
    <div className="list-container">
        <h2>SimpleListContainer</h2>
        <div className="item-container">
            { data.map(item => (
                <div className="data-item" key={item.id}>
                    <p>{item.title}</p>
                    {/* <button className="complete" onClick={() => complete(item.id)}>Done</button>
                    <button className="delete" onClick={() => remove(item.id)}>X</button> */}
                    <div className="icon-container">
                        <FaCalendarCheck className='icon' onClick={() => complete(item.id)}/>
                        <FaEdit className='icon' onClick={() => edit(item.id)}/>
                        <FaTrashAlt className='icon' onClick={() => remove(item.id)}/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SimpleListContainer