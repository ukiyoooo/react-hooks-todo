import React from 'react';
import { Todo, TodoList } from './Main';
import TodoItem from './TodoItem';

interface Props {
    todoList: TodoList;
    removeTodo: (removeId: string) => void;
}

const List: React.FC<Props> = (props) => (
    <div className="container">
        <div className="panel is-primary">
            <p className="panel-heading">
                Tasks
            </p>

            <ul>
                {props.todoList.map((todo: Todo, i: number) => (
                    <label className="panel-block">
                        <TodoItem key={i} todo={todo} removeTodo={props.removeTodo} />
                    </label>
                ))}
            </ul>

        </div >
    </div>
);

export default List;
