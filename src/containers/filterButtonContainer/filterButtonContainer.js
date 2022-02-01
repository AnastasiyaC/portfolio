import React from "react";
import FilterButton from "../../components/filter/filterButton/FilterButton";
import { useDispatch } from "react-redux";
import { toggleFilter } from "../../redux/actions";

function FilterButtonContainer(props) {
    const { name, id, checked } = props;
    const dispatch = useDispatch();

    const onFilterClicked = (id, name) => {
        dispatch(toggleFilter(id, name));
    };

    return (
        <FilterButton
            onFilterClicked={ () => onFilterClicked(id, name) }
            name={ name }
            id={ id }
            checked={ checked }
        />
    )
};

export default FilterButtonContainer;