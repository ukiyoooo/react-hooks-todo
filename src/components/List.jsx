import React from "react";

let style = {
    maxWidth: '700px',
};

let btn = {
    cursor: 'pointer'
};

const List = (props) => (
    <div className="content">
        <ul>
            {
                props.todoList.map((todo, i) => (
                    <li key={i} className="" style={style}>{todo.title} <span className="tag is-danger" style={btn} onClick={() => props.removeTodo(todo.id)}>Delete</span></li>)
                )
            }
        </ul>

    </div>
);

export default List;