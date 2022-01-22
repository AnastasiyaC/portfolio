import React from "react";
import classes from "./header.module.scss";
import Navigation from "../navigation/Navigation";
import MenuBurger from "../menuBurger/MenuBurger";

function Header() {
    return (
        <header className={ classes.Header }>
            <h1 className={ classes['Header-Title'] }>Portfolio</h1>
            <MenuBurger/>
            <Navigation/>
        </header>
    )
}

export default Header;