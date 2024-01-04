import React, { useState } from 'react'
import Form from '../components/Form/Form'
import ListContainer from '../components/ListContainer/ListContainer';
import SimpleListContainer from '../components/ListContainer/SimpleListContainer';

const todoData = [
    { id: 1, title: 'bingo', description: 'bingo chicken' }, 
    { id: 2, title: 'music', description: 'make more music' }
]

function Todo() {

    const [taskList, setTaskList] = useState(todoData);

    // --> What Actions need to be allowed(?) -- // 
    // Add new TODO
    // Remove TODO (by ID)
    // Mark Completed

    const addNew = (data) => {
        let newTodo = {
            id: taskList.length + 1, // random ID(?)
            title: data,
            // description: data.description
        }
        console.log("new: ", newTodo)
        setTaskList(prev => [...prev, newTodo]);
    }

    return (
        <div className="todo-container">
            <h1>Todo</h1>
            {/* Input Form */}
            <Form add={addNew}/>
            {/* List Component */}
            {/* <ListContainer data={taskList} /> */}
            <SimpleListContainer data={taskList} />
        </div>
    )
}

export default Todo