import React from "react";

const Form = (props) => (
    <form className="box" onSubmit={props.addTodo}>
        <div className="field">
            <label className="label is-large">
                Your todo.
            </label>
            <input name="title" type="text" className="input" placeholder="What's your new task?" />
            <input type="submit" value="Add" className="button is-primary" />
        </div>
    </form>
);

export default Form;