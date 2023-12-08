import React from 'react'
import "./ListContainer.css";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

function ListContainer({ data, remove, edit }) {

  const handleDragDrop = (results) => {
    console.log("Event: ", results);
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
                            <button className="edit" onClick={() => edit(item)}>Edit</button>
                            <button className="delete" onClick={() => remove(item)}>X</button>
                          </div>
                      ) }
                    </Draggable>
                  ))}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  )
}

export default ListContainer