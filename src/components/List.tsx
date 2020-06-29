import React from 'react';
import { Todo, TodoList } from './Main';

interface Props {
    todoList: TodoList;
    removeTodo: (removeId: string) => void;
}

const btn = {
    cursor: 'pointer',
};

const List: React.FC<Props> = (props) => (
    <div className="container">
        <ul>
            {props.todoList.map((todo: Todo, i) => (
                <div key={i}>
                    <div className="box">
                        <label className="checkbox">
                            <input type="checkbox" />
                        </label>
                        {todo.title}
                        <span
                            className="tag is-danger"
                            style={btn}
                            onClick={() => props.removeTodo(todo.id)}
                        >
                            Delete
                            </span>
                    </div>
                </div>
            ))}
        </ul>
    </div >
);

export default List;
