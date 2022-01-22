import React from "react";
import classes from "./contactsPage.module.scss";
import SocialLink from "./socialLink/SocialLink";
import { useSelector } from "react-redux";
import Page from "../../common/page/Page";
import Arrow from "../../common/arrow/Arrow";
import pagesData from "../../../datas/variables";
import portfolioData from "../../../datas/profileData";

function ContactsPage() {
    const social = useSelector( (state) => state.social);

    const socialLinks = social.map( (el) => (
        <SocialLink
            name={ el.name }
            styleClassName={ el.className }
            icon={ el.icon }
            link={ el.link }
            key={ el.id }
        />
    ));

    return (
        <div className={ classes.ContactsPage }>
            <Page
                title={ pagesData.contacts.title }
                description={ pagesData.contacts.description }
            >
                <div className={ classes['ContactsPage-Contacts']}>
                    <span className={ classes['ContactsPage-ContactMail']}>
                        &#9993;  { portfolioData.contacts.mail }
                    </span>
                    <span className={ classes['ContactsPage-ContactPhone']}>
                        &#x260F;  { portfolioData.contacts.phone }
                    </span>
                </div>
                <div className={ `${classes['ContactsPage-SocialNetwork']} ${classes.SocialNetwork}` }>
                    <h3 className={ classes['SocialNetwork-Title'] }>
                        Let's get social.
                    </h3>
                    <div className={ classes['SocialNetwork-Description'] }>
                        Follow or contact me on Facebook and profiles on Instagram, Linkedin and GitHub.
                    </div>
                    <div className={ classes['SocialNetwork-Links'] }>
                        { socialLinks }
                    </div>
                </div>
            </Page>
            <Arrow text='projects' direction='left' path='/projects'/>
        </div>
    )
}

export default ContactsPage;