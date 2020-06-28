import React from "react";

const Navbar = (props) => (
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
);

export default Navbar;
