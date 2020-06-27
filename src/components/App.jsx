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
            <header class="navbar">
                <div class="navbar-brand">
                    <span class="navbar-item">
                        <span class="far fa-list-alt"></span> React ToDo
                    </span>
                </div>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="field has-addons">
                            <div class="control">
                                <input class="input" type="text" name="search" placeholder="Search" />
                            </div>
                            <div class="control">
                                <a class="button is-info"><i class="fa fa-search"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="navbar-item">
                    <a href="#"><i class="fa fa-user"></i>Login</a>
                </div>
            </header>

            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title is-bold">
                            React Todo App
                        </h1>
                        <h2 className="subtitle">
                            Manage your tasks.
                        </h2>
                    </div>
                </div>
            </section>

            <main className="columns">

                <div className="submenu column is-3">

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
        </div >
    );
};


export default App;
