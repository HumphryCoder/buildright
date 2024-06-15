import Navbar from "./Navbar";
import Heading from "./heading";
import Subheading from "./subheading";
import Frame from "./frame";
import React from "react";
import "./landing.css"

function landingpage() {

    const links = [
        { text: 'Docs', url: '/docs/introduction' },
        { text: 'Testing', url: '/testing' },
        { text: 'Pricing', url: '/docs' }
    ]

    return (
        <>

            <Navbar
                links={links}
                websiteTitle={"BuildRight"}
                btnText={"Get Started"}
                btnUrl={'/docs'}
                hideOnScroll={true}
                homeUrl={"/landingpage"}
            />



            <span className="bubble1"></span>
            <span className="bubble2"></span>
            <span className="bubble3"></span>

            <Heading
                text={"Developing your own frontend has never been easier"}
            />

            <Subheading
                text={"Don't let time-consuming homepage development hold you back. Experience the power of BuildRight and take your projects to new heights. Get started today and revolutionize the way you build homepages!"}
                btnText={"Get Started"}
            />

            <Frame />



        </>
    )
}

export default landingpage;