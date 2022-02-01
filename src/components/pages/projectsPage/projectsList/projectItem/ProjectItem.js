import React, { useEffect } from "react";
import classes from "./projectItem.module.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProjectItem(props) {
    const { name, image, description, demo, git } = props;

    useEffect( () => {
        AOS.init();
    }, [])

    return (
        <li className={ classes.ProjectItem }
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="500"
            data-aos-offset="10"
            data-aos-easing="ease-in-out"
        >
            <div className={ classes['ProjectItem-Title'] }>
                { name }
            </div>
            <div className={ classes['ProjectItem-Main'] }>
                <div className={ classes['ProjectItem-ImageContainer']}>
                    <img
                        src={ image }
                        className={ classes['ProjectItem-Image'] }
                        alt='project-image'
                    />
                </div>
                <div className={ classes['ProjectItem-Description']}>
                    <div className={ classes['ProjectItem-DescriptionText']}>
                        { description }
                    </div>
                    <div className={ classes['ProjectItem-Links'] }>
                        <a
                           href={ demo }
                           target='_blank'
                           rel="noopener noreferrer"
                           className={ classes['ProjectItem-Link']}
                        >
                            demo
                        </a>
                        <a
                            href={ git }
                            target='_blank'
                            rel="noopener noreferrer"
                            className={ classes['ProjectItem-Link']}
                        >
                            git
                        </a>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ProjectItem;