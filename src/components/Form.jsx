import React from "react";

const Form = (props) => (
    <div className="container">
        <form className="box" onSubmit={props.addTodo}>
            <label className="label is-large">
                Add a task
            </label>
            <div className="field has-addons">
                <div className="control is-expanded">
                    <input name="title" type="text" className="input" placeholder="What's your new task?" />
                </div>
                <div className="control">
                    <input type="submit" value="Add" className="button is-info" />
                </div>
            </div>
        </form>
    </div>
);

export default Form;