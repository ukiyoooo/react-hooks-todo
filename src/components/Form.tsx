import React, { ChangeEvent, FormEvent } from "react";

interface Props {
    inputText: string,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<Props> = (props) => (
    <div className="container">
        <form className="box" onSubmit={props.handleSubmit}>
            <label className="label is-large">
                Add a task
            </label>
            <div className="field has-addons">
                <div className="control is-expanded">
                    <input name="title" type="text" className="input" placeholder="What's your new task?" onChange={props.handleChange} value={props.inputText} />
                </div>
                <div className="control">
                    <input type="submit" value="Add" className="button is-info" />
                </div>
            </div>
        </form>
    </div>
);

export default Form;
