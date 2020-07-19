import React, { useReducer, FormEvent } from "react";
import Form from "./Form";
import List from "./List";
import { generateUniqueID, dateToFormatString } from "../util";

export interface Todo {
    readonly id: string,
    readonly title: string,
    readonly createdAt: String
}

export type TodoList = Todo[];

interface TodoState {
    todoList: TodoList
}

enum TodoActionType {
    ACTION_ADD = 'ACTION_ADD',
    ACTION_REMOVE = 'ACTION_REMOVE',
}

interface TodoAction {
    type: TodoActionType,
    payload: Todo
}

const todoReducer: React.Reducer<TodoState, TodoAction> = (state: TodoState, action: TodoAction) => {
    switch (action.type) {
        case TodoActionType.ACTION_ADD:
            return {
                todoList: [...(state.todoList), action.payload]
            };
        case TodoActionType.ACTION_REMOVE:
            return {
                todoList: state.todoList.filter((todo: Todo) => todo.id !== action.payload.id)
            };
        default: {
            throw new Error("Invalid TodoActionType");
        }
    };
}

const Main: React.FC = () => {
    const initialState: TodoState = { todoList: [] };
    let [todoState, todoDispatch] = useReducer(todoReducer, initialState);

    return (
        <main className="columns">
            <div className="submenu column is-3">
            </div>

            <div className="column">
                <section className="container is-fluid">
                    <Form
                        addTodo={
                            (event: FormEvent<HTMLFormElement>, inputValue: string) => {
                                event.preventDefault();
                                if (inputValue !== "") {
                                    todoDispatch({
                                        type: TodoActionType.ACTION_ADD,
                                        payload: {
                                            id: generateUniqueID(),
                                            title: inputValue,
                                            createdAt: dateToFormatString(new Date(), '%YYYY%-%MM%-%DD%-%HH%-%mm%-%ss%')
                                        },
                                    });
                                }
                            }
                        }
                    />
                    <List
                        todoList={todoState.todoList}
                        removeTodo={(removeId: string) => {
                            todoDispatch({
                                type: TodoActionType.ACTION_REMOVE,
                                payload: {
                                    id: removeId,
                                    title: "",
                                    createdAt: ""
                                }
                            });
                        }}
                    />
                </section>
            </div>
        </main>
    );
}

export default Main;
