import React from "react";
import classes from "./filter.module.scss";
import FilterButton from "./filterButton/FilterButton";
import {  useSelector} from "react-redux";

function Filter() {
    const buttons = useSelector((state) => state.filter.filterButtons);
    const activeFilter = useSelector((state) => state.filter.activeFilter);

    const filterButtons = buttons.map( (el) => (
        <FilterButton
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
                {activeFilter.toUpperCase() === 'SHOW ALL' ?
                'Showing all projects. Use filter to list them by skill or technology.' :
                    `Showing projects filtered by ${activeFilter.toUpperCase()}.`
                }
            </div>
        </div>
    )
}

export default Filter;