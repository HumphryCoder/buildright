import Navbar from "./Navbar";
import Heading from "./heading";
import Subheading from "./subheading";
import Frame from "./frame";
import React from "react";
import "./landing.css"

function landingpage() {

    const links = [
        { text: 'Docs', url: '/docs' },
        { text: 'Changelog', url: '/docs' },
        { text: 'Pricing', url: '/docs' }
    ]

    return (
        <>
           
                <Navbar
                    navStyle={"nav2"}
                    links={links}
                    textColor={"white"}
                    websiteTitle={"BuildRight"}
                    btnText={"Get Started"}
                    btnUrl={'/docs'}
                />

                <span className="bubble1"></span>
                <span className="bubble2"></span>
                <span className="bubble3"></span>

                <Heading
                    headStyle={"text1"}
                    text={"Developing your own frontend has never been easier"}
                />

                <Subheading
                    subStyle={"text1"}
                    text={"Don't let time-consuming homepage development hold you back. Experience the power of BuildRight and take your projects to new heights. Get started today and revolutionize the way you build homepages!"}
                    textColor={"#CBC7C7"}
                    btnText={"Get Started"}
                />
            
            <Frame />
            
            
            
        </>
    )
}

export default landingpage;