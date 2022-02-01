import React from "react";
import classes from "./filterButton.module.scss";

function FilterButton(props) {
    const { name, id, checked, onFilterClicked } = props;

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