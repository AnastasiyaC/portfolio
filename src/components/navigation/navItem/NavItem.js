import React from "react";
import classes from "./navItem.module.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleMenuOpened } from "../../../redux/actions";

function NavItem(props) {
    const { path, name } = props;
    const dispatch = useDispatch();

    const onLinkClicked = () => {
        dispatch(toggleMenuOpened());
    }

    return (
        <li className={classes.NavItem}>
            <NavLink
                to={ path }
                className={ (navData) => navData.isActive ?
                    `${classes['NavItem-Link']} ${classes['NavItem-Link_active']}` :
                    classes['NavItem-Link'] }
                onClick={ onLinkClicked }
            >
                { name }
            </NavLink>
        </li>
    )
};

export default NavItem;