import React, { useState, useReducer } from 'react';
import Form from "./Form";
import List from "./List";
import { generateUniqueID, dateToFormatString } from "../util";


const todoReducer = (state, action) => {
    if (action.type === 'add') {
        return [...state, {
            "id": generateUniqueID(),
            "title": action.title,
            "createdAt": action.createdAt
        }];
    } else if (action.type === 'remove') {
        return state.filter(todo => todo.id !== action.removeId);
    } else {
        throw 'invalid type: ${action.type}';
    }
};

const App = () => {
    let [todoList, todoDispatch] = useReducer(todoReducer, []);
    let date = new Date();

    return (
        <div>
            <div className="box">
                <h1 className="title title-strong-weight is-spaced has-text-black">
                    React Todo App
                </h1>
                <h2 className="subtitle">
                    Manage your tasks.
                </h2>
            </div>
            <Form
                addTodo={(e) => {
                    e.preventDefault();
                    todoDispatch({
                        type: "add",
                        title: e.target.title.value,
                        createdAt: dateToFormatString(
                            new Date(),
                            '%YYYY%-%MM%-%DD%-%HH%-%mm%-%ss%')
                    });
                    e.target.title.value = "";
                }}

            />
            <List
                todoList={todoList}
                removeTodo={(removeId) => {
                    todoDispatch({
                        type: "remove",
                        removeId: removeId
                    });
                }}
            />
        </div>
    );
};


export default App;
