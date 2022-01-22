import React, { useEffect } from "react";
import classes from "./projectsPage.module.scss";
import ProjectItem from "./projectItem/ProjectItem";
import { useDispatch, useSelector} from "react-redux";
import Page from "../../common/page/Page";
import Filter from "../../filter/Filter";
import Arrow from "../../common/arrow/Arrow";
import { filterProjects } from "../../../redux/actions";
import pagesData from "../../../datas/variables"

function ProjectsPage() {
    const filter = useSelector(state => state.filter.activeFilter);
    const projects = useSelector(state => state.projects);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(filterProjects(filter));
      }, [filter]);

    const projectsItems = projects.map( el => (
        <ProjectItem
            name={ el.name }
            description={ el.description }
            demo={ el.demo }
            git={ el.git}
            image={ el.screenshot }
            key={ el.id }
    />
    ));

    return (
        <div className={ classes.ProjectsPage }>
            <Page
                title={ pagesData.projects.title }
                description={ pagesData.projects.description }
            >
                <Filter/>
                <ul className={ classes['ProjectsPage-List'] }>
                    { projectsItems }
                </ul>
            </Page>
            <Arrow text='reducer' direction='left' path='/'/>
            <Arrow text='contacts' direction='right' path='/contacts'/>
        </div>
    )
};

export default ProjectsPage;