import React from "react";

let style = {
    maxWidth: '700px',
};

let btn = {
    cursor: 'pointer'
};

const List = (props) => (
    <div className="container">
        <ul>
            {
                props.todoList.map((todo, i) => (
                    <div key={i}>
                        <div className="box">
                            <label className="checkbox">
                                <input type="checkbox" />
                                {todo.title} <span className="tag is-danger" style={btn} onClick={() => props.removeTodo(todo.id)}>Delete</span>
                            </label>
                        </div>
                    </div>
                ))
            }
        </ul>
    </div>
);

export default List;