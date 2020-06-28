import React, { useState, useReducer } from "react";
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

const Main = (props) => {
    let [todoList, todoDispatch] = useReducer(todoReducer, []);
    let date = new Date();

    return (
        <main className="columns">
            <div className="submenu column is-2">
            </div>

            <div className="column">
                <section className="section">
                    <Form
                        addTodo={(e) => {
                            e.preventDefault();
                            if (e.target.title.value !== "") {
                                todoDispatch({
                                    type: "add",
                                    title: e.target.title.value,
                                    createdAt: dateToFormatString(
                                        new Date(),
                                        '%YYYY%-%MM%-%DD%-%HH%-%mm%-%ss%')
                                });
                                e.target.title.value = "";
                            }
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
                </section>
            </div>
        </main>
    );
}

export default Main;
