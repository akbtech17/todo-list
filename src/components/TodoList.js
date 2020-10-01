import React from 'react';
//importing components
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filterTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
            {
                filterTodos.map(todo => (<Todo 
                    todo={todo} 
                    todo_id={todo.id} 
                    text={todo.text} 
                    key={todo.id} 
                    todos={todos} 
                    setTodos={setTodos}
                />))
            }   
            </ul>
        </div>
    )
}

export default TodoList;