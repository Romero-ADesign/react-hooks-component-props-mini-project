import React from "react";
import blogData from "../data/blog";

function About(imagesource, ) {
    return (
        <aside>
            <img src={blogData.image} alt="blog logo"/>
            <p>{blogData.about}</p>
        </aside>
    )
};

About.defaultProps={

}


export default About;