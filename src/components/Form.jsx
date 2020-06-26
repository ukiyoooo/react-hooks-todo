import React from "react";

const Form = (props) => (
    <div className="container">
        <form className="box" onSubmit={props.addTodo}>
            <div className="field">
                <label className="label is-large">
                    Add a task
                </label>
                <input name="title" type="text" className="input" placeholder="What's your new task?" />
                <input type="submit" value="Add" className="button is-primary" />
            </div>
        </form>
    </div>
);

export default Form;