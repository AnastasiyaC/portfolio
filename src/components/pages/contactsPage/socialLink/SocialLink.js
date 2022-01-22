import React from "react";
import classes from "./socialLink.module.scss";

function SocialLink(props) {
    const { link, styleClassName, name, icon } = props;

    return (
        <a
            href={ link }
            target='_blank'
            rel="noopener noreferrer"
            className={ classes.SocialLink}
        >
            <div className={ `${classes['SocialLink-Network']} ${classes['SocialLink-Network_' + styleClassName]}` }>
                <div className={classes['SocialLink-Tooltip'] }>
                    { name }
                </div>
                <div className={classes['SocialLink-IconContainer'] }>
                    <img
                        src={ icon }
                        className={ classes['SocialLink-Icon'] }
                        alt='network-icon'
                    />
                </div>
            </div>
        </a>
    )
};

export default SocialLink;