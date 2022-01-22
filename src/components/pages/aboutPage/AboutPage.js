import React from "react";
import classes from "./aboutPage.module.scss";
import Arrow from "../../common/arrow/Arrow";
import portfolioImage from "../../../assets/profileImage/profile-image.jpg";
import portfolioData from "../../../datas/profileData";

function AboutPage() {
    return (
        <div className={classes.AboutPage}>
                <div className={ classes['AboutPage-PortfolioPhoto'] }>
                    <div className={ `${classes['AboutPage-Loader']} ${classes.Loader}` }>
                        <div className={ classes['Loader-Outter'] }/>
                        <div className={ classes['Loader-Inner'] }/>
                    </div>
                    <div className={ classes['AboutPage-PhotoContainer'] }>
                        <img
                            src={ portfolioImage }
                            className={ classes['AboutPage-Photo'] }
                            alt='profile-photo'
                        />
                    </div>
                </div>
                <div className={ classes['AboutPage-PortfolioInfo'] }>
                    <h2 className={ classes['AboutPage-Title'] }>
                        Welcome to my portfolio page.
                    </h2>
                    <h3 className={ classes['AboutPage-TitleRepresentation'] }>
                        My name is { portfolioData.about.name }.
                    </h3>
                    <p className={ classes['AboutPage-Description'] }>
                        { portfolioData.about.description }
                        <br/>
                        Feel free to take a look at my projects on the web portfolio page.
                    </p>
                </div>
            <Arrow text='projects' direction='right' path='/projects'/>
        </div>
    )
}

export default AboutPage;