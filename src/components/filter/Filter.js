import React from "react";
import classes from "./filter.module.scss";
import FilterButtonContainer from "../../containers/filterButtonContainer/filterButtonContainer";

function Filter(props) {
    const { filters, filterDescription } = props;
    const filterButtons = filters.map( (el) => (
        <FilterButtonContainer
            name={ el.name }
            checked={ el.checked}
            key={ el.id }
            id={ el.id }
        />
    ));

    return (
        <div className={ classes.Filter }>
            <div className={ classes['Filter-Buttons'] }>
                { filterButtons }
            </div>
            <div className={ classes['Filter-Description'] }>
                { filterDescription }
            </div>
        </div>
    )
}

export default Filter;