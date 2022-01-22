import React from "react";
import classes from "./navigation.module.scss";
import { useSelector } from "react-redux";
import NavItem from "./navItem/NavItem";

function Navigation() {
    const isMenuOpened = useSelector( state => state.menu.isOpened);
    const navigation = useSelector( state => state.menu.navigation);
    const linkItems = navigation.map( (el) => (
        <NavItem
            name={ el.name }
            path={ el.path}
            key={ el.id }
        />
    ));

    return (
        <nav className={ `${classes.Nav} ${isMenuOpened ? `${classes['Nav_open']}` : ''}` }>
            <ul className={ classes['Nav-List'] }>
                { linkItems }
            </ul>
        </nav>
    )
}

export default Navigation;