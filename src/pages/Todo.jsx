import React, { useState } from 'react'
import Form from '../components/Form/Form'
import ListContainer from '../components/ListContainer/ListContainer';
import SimpleListContainer from '../components/ListContainer/SimpleListContainer';

function Todo() {

    const [taskList, setTaskList] = useState(['bingo', 'chicken', 'make music']);


    return (
        <div className="todo-container">
            <h1>Todo</h1>
            {/* Input Form */}
            <Form />
            {/* List Component */}
            {/* <ListContainer data={taskList} /> */}
            <SimpleListContainer data={taskList} />
        </div>
    )
}

export default Todo