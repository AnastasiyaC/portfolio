import React from "react";
import classes from "./projectsList.module.scss";
import ProjectItem from "./projectItem/ProjectItem";

function ProjectsList(props) {
    const projectsItems = props.projects.map( el => (
        <ProjectItem
            name={ el.name }
            description={ el.description }
            demo={ el.demo }
            git={ el.git}
            image={ el.screenshot }
            key={ el.id }
        />
    ));

    return(
        <ul className={ classes.ProjectsList }>
            { projectsItems }
        </ul>
    )
}

export default ProjectsList;