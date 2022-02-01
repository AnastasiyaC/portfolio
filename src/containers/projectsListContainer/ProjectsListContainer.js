import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProjects } from "../../redux/actions";
import ProjectsList from "../../components/pages/projectsPage/projectsList/projectsList";

function ProjectsListContainer() {
    const filter = useSelector(state => state.filter.activeFilter);
    const projects = useSelector(state => state.projects);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(filterProjects(filter));
    }, [filter]);

    return (
        <ProjectsList
            projects={ projects }
        />
    )
}

export default ProjectsListContainer;