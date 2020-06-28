import React from "react";

const Navbar: React.FC = () => (
    <header className="navbar">
        <div className="navbar-brand">
            <span className="navbar-item">
                <span className="far fa-list-alt"></span> React ToDo
                    </span>
        </div>
        <div className="navbar-end">
            <div className="navbar-item">
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" type="text" name="search" placeholder="Search" />
                    </div>
                    <div className="control">
                        <a className="button is-info"><i className="fa fa-search"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="navbar-item">
            <a href="#"><i className="fa fa-user"></i>Login</a>
        </div>
    </header>
);

export default Navbar;
