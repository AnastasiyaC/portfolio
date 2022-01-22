import React from "react";
import classes from "./menuBurger.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenuOpened } from "../../redux/actions";

function MenuBurger() {
    const isMenuOpened = useSelector( state => state.menu.isOpened);
    const dispatch = useDispatch();

    const onMenuClicked = () => {
        dispatch(toggleMenuOpened());
    }

    return (
        <button
            className={ `${classes.Menu} ${isMenuOpened ? `${classes['Menu_open']}` : ''}` }
            onClick={ onMenuClicked }
        >
            <div className={ `${classes['Menu-Line']} ${classes['Menu-Line_position_top']}` }/>
            <div className={ `${classes['Menu-Line']} ${classes['Menu-Line_position_center']}` }/>
            <div className={ `${classes['Menu-Line']} ${classes['Menu-Line_position_bottom']}` }/>
        </button>
    )
}

export default MenuBurger;