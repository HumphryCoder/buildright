import Frame from "./frame";
import React from "react";
import Navbar from "./Navbar";
import Docsnavbar from "./docsnavbar";
import { Outlet } from "react-router-dom";
import "./docs.css"

function docs() {

    const links = [
        { text: 'Docs', url: '/docs' },
        { text: 'Changelog', url: '/docs' },
        { text: 'Pricing', url: '/docs' }
    ]

    return (
        <>
            <Navbar
                links={links}
                websiteTitle={"BuildRight"}
                btnText={"Get Started"}
                btnUrl={'/docs'}
                hideOnScroll={false}
                homeUrl={"/landingpage"}
            />
            <span className="bubble1docs"></span>
            <span className="bubble2docs"></span>
            <Docsnavbar />

            <div className="content-area">
                <Outlet />
            </div>
        </>
    )
}

export default docs