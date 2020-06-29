import React from 'react';
import { Todo } from './Main';

interface Props {
    todo: Todo;
    removeTodo: (removeId: string) => void;
}

const btn = {
    cursor: 'pointer',
};

const TodoItem: React.FC<Props> = (props) => (
    <div>
        <label className="checkbox mr-3">
            <input type="checkbox" />
        </label>
        {props.todo.title}
        <span
            className="tag is-danger"
            style={btn}
            onClick={() => props.removeTodo(props.todo.id)}>
            Delete
        </span>
    </div>
);

export default TodoItem;
