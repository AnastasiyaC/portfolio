import React from "react";
import classes from "./header.module.scss";
import MenuBurger from "../menuBurger/MenuBurger";
import Navigation from "../navigation/Navigation";

function Header() {
    return (
        <header className={ classes.Header }>
            <h1 className={ classes['Header-Title'] }>Portfolio</h1>
            <MenuBurger/>
            <Navigation/>
        </header>
    )
};

export default Header;