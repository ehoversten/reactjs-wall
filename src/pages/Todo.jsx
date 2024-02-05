import React, { useState } from 'react'
import Form from '../components/Form/Form'
import ListContainer from '../components/ListContainer/ListContainer';
import SimpleListContainer from '../components/ListContainer/SimpleListContainer';

const todoData = [
    { id: 1, title: 'bingo', description: 'bingo chicken', completed: false }, 
    { id: 2, title: 'music', description: 'make more music', completed: false }
]

function Todo() {
    const [taskList, setTaskList] = useState(todoData);

    // --> What Actions need to be allowed(?) -- // 
    // Add new TODO - X
    // Remove TODO (by ID) - X
    // Mark Completed - 

    const addNew = (data) => {
        let newTodo = {
            id: taskList.length + 1, // random ID(?)
            title: data,
            // description: data.description,
            completed: false,
            created: Date.now()
        }
        console.log("new: ", newTodo)
        setTaskList(prev => [...prev, newTodo]);
    }

    const update = (id, data) => {
        let updated = taskList.map(task => {
            if(task.id === id) {
                task.title = data;
            }
            return task;
        });
        console.log('Updated Todo')
        setTaskList(updated);
    }

    const remove = (id) => {
        const filtered = taskList.filter(task => {
            if(task.id !== id) {
                return task;
            }
        })
        setTaskList(filtered);
    }

    const completed = (id) => {
        console.log("Running complete with id of ", id)
        const updatedTasks = taskList.map(task => {
            if(task.id == id) {
                task.completed = !task.completed;
            }
            return task
        })
        // toggle completed
        // completedItem[0].completed ? false : true;
        // update dataset 
        setTaskList(updatedTasks)

    }

    return (
        <div className="todo-container">
            <h2>Todo</h2>
            {/* Input Form */}
            <Form add={addNew}/>
            {/* List Component */}
            {/* <ListContainer data={taskList} /> */}
            <SimpleListContainer 
                data={taskList} 
                remove={remove} 
                edit={update}
                complete={completed} />
        </div>
    )
}

export default Todo