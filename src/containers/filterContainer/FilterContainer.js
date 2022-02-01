import React from "react";
import { useSelector } from "react-redux";
import Filter from "../../components/filter/Filter";

function FilterContainer() {
    const filterButtons = useSelector((state) => state.filter.filterButtons);
    const activeFilter = useSelector((state) => state.filter.activeFilter);

    const filterDescription = activeFilter.toUpperCase() === 'SHOW ALL' ?
            'Showing all projects. Use filter to list them by skill or technology.' :
            `Showing projects filtered by ${activeFilter.toUpperCase()}.`

    return (
        <Filter
            filters={ filterButtons }
            filterDescription={ filterDescription }
        />
    )
}

export default FilterContainer;