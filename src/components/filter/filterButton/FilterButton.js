import React from "react";
import classes from "./filterButton.module.scss";
import { useDispatch } from "react-redux";
import { toggleFilter } from "../../../redux/actions";

function FilterButton(props) {
    const { name, id, checked } = props;
    const dispatch = useDispatch();

    const onFilterClicked = () => {
        dispatch(toggleFilter(id, name));
    }

    return (
        <>
            <input
                id={ id }
                type="radio"
                className={ classes.InputRadio }
                name="selector"
                value={ name }
                checked={ checked }
                onChange={ onFilterClicked }
            />
            <label
                htmlFor={ id }
                className={ `${classes['InputRadio-Label']} ${checked ? `${classes['InputRadio-Label_active']}` : ''}` }
            >
                <span className={ classes['InputRadio-Text'] }>{ name }</span>
            </label>
        </>
    )
}

export default FilterButton;