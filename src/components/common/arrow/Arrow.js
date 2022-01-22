import React from "react";
import classes from "./arrow.module.scss";
import { NavLink } from "react-router-dom";

function Arrow(props) {
    const { direction, text, path } = props;

    return (
        <NavLink
            to={ path }
            className={ `${classes.Arrow} ${classes['Arrow_direction_' + direction]}` }
        >
            <div className={ classes['Arrow-Line'] }>
                <span className={ classes['Arrow-Text'] }>
                    { text }
                </span>
            </div>
        </NavLink>
    )
}

export default Arrow;