import React, { useReducer, ChangeEvent, FormEvent } from "react";
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
    currentInput: string,
    todoList: TodoList
}

enum TodoActionType {
    ACTION_INPUT = 'ACTION_INPUT',
    ACTION_ADD = 'ACTION_ADD',
    ACTION_REMOVE = 'ACTION_REMOVE',
}

interface TodoAction {
    type: TodoActionType,
    payload: Todo
}

const todoReducer: React.Reducer<TodoState, TodoAction> = (state: TodoState, action: TodoAction) => {
    switch (action.type) {
        case TodoActionType.ACTION_INPUT:
            return {
                currentInput: action.payload.title,
                todoList: state.todoList
            };
        case TodoActionType.ACTION_ADD:
            return {
                currentInput: "",
                todoList: [...(state.todoList), action.payload]
            };
        case TodoActionType.ACTION_REMOVE:
            return {
                currentInput: state.currentInput,
                todoList: state.todoList.filter((todo: Todo) => todo.id !== action.payload.id)
            };
        default: {
            throw new Error("Invalid TodoActionType");
        }
    };
}

const Main: React.FC = () => {
    const initialState: TodoState = { currentInput: "", todoList: [] };
    let [todoState, todoDispatch] = useReducer(todoReducer, initialState);

    return (
        <main className="columns">
            <div className="submenu column is-2">
            </div>

            <div className="column">
                <section className="section">
                    <Form
                        inputText={todoState.currentInput}
                        handleChange={(event: ChangeEvent<HTMLInputElement>) => {
                            todoDispatch({
                                type: TodoActionType.ACTION_INPUT,
                                payload: {
                                    id: "",
                                    title: event.target.value,
                                    createdAt: ""
                                },
                            });
                        }}
                        handleSubmit={(event: FormEvent<HTMLFormElement>) => {
                            event.preventDefault();
                            if (todoState.currentInput !== "") {
                                todoDispatch({
                                    type: TodoActionType.ACTION_ADD,
                                    payload: {
                                        id: generateUniqueID(),
                                        title: todoState.currentInput,
                                        createdAt: dateToFormatString(new Date(), '%YYYY%-%MM%-%DD%-%HH%-%mm%-%ss%')
                                    },
                                });
                            }
                        }}
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
