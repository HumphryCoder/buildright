import React from "react";
import { Link } from 'react-router-dom';
import "./subheading.css"; // Import the CSS file

const Subheading = ({ text, btnUrl, btnText }) => {
    if (text == null) {
        text = "put your hero text here"
    }
    
    return (
        <>

            <h2 className="text1">{text}</h2>
            <Link to={btnUrl} style={{ textDecoration: "none" }}>
                <button className="button">{btnText}</button>
            </Link>


        </>
    );
};

export default Subheading;
