import React from "react";
import classes from "./projectsPage.module.scss";
import Page from "../../common/page/Page";
import Arrow from "../../common/arrow/Arrow";
import pagesData from "../../../datas/variables"
import FilterContainer from "../../../containers/filterContainer/FilterContainer";
import ProjectsListContainer from "../../../containers/projectsListContainer/ProjectsListContainer";

function ProjectsPage() {
    return (
        <div className={ classes.ProjectsPage }>
            <Page
                title={ pagesData.projects.title }
                description={ pagesData.projects.description }
            >
                <FilterContainer/>
                <ProjectsListContainer/>
            </Page>
            <Arrow text='about' direction='left' path='/'/>
            <Arrow text='contacts' direction='right' path='/contacts'/>
        </div>
    )
};

export default ProjectsPage;