import React from "react";
import classes from "./page.module.scss";

function Page(props) {
    const { title, description, children } = props;
    return (
        <div className={ classes.Page }>
            <div className={ classes['Page-Wrapper'] }>
                <h2 className={ classes['Page-Title'] }>
                    { title }
                </h2>
                <p className={ classes['Page-Description'] }>
                    { description }
                </p>
                { children }
            </div>
        </div>
    )
}

export default Page;