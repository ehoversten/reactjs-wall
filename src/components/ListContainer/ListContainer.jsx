import React from 'react'
import { FaTrashAlt, FaCalendarCheck, FaEdit } from "react-icons/fa";
import "./ListContainer.css";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

function ListContainer({ data, remove, edit, reorder }) {

  const handleDragDrop = (results) => {
    console.log("Event: ", results);

    const { source, destination, type } = results;

    if(!destination) return;

    if(source.droppableId === destination.droppableId && source.index === destination.index) return;

    if(type === 'group') {
      const reorderedReminders = [...data];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;
      // we want to 
      const [selectedReminder] = reorderedReminders.splice(sourceIndex, 1);
      reorderedReminders.splice(destinationIndex, 0, selectedReminder);

      return reorder(reorderedReminders);
    }
  }

  return (
    <div className='list-container'>
      <DragDropContext onDragEnd={handleDragDrop}>
        <h2>List Container</h2>
        {/* <div className="data-container">
          { data && data.map((item, index) => (
            <div className="data-item" key={index}>
                <p>{item}</p>
                <button className="edit" onClick={() => edit(item)}>Edit</button>
                <button className="delete" onClick={() => remove(item)}>X</button>
              </div>
          ))}
        </div> */}
        <div className="data-container">
          <Droppable droppableId='root' type='group'>
            { (provided) => (
              <div className="drop" {...provided.droppableProps} ref={provided.innerRef}>
                  { data && data.map((item, index) => (
                    <Draggable draggableId={item} key={item} index={index}>
                      { (provided) => (
                        <div className="data-item" 
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}  
                        >
                            <p>{item}</p>
                            {/* <div className="item-btn-container">
                              <button className="edit" onClick={() => edit(item)}>Edit</button>
                              <button className="delete" onClick={() => remove(item)}>X</button>
                            </div> */}
                            <div className="icon-container">
                                <FaEdit className='icon' onClick={() => edit(item)}/>
                                <FaTrashAlt className='icon' onClick={() => remove(item)}/>
                            </div>
                          </div>
                      ) }
                    </Draggable>
                  ))}
                { provided.placeholder }
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  )
}

export default ListContainer