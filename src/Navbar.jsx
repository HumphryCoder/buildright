import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ bgColor, navStyle, links, textColor, websiteTitle, btnText, btnUrl }) => {

    if (bgColor == null) {
        bgColor = "#000"
    }

    if (websiteTitle == null) {
        websiteTitle = "myWebsite"
    }

    return (
        <>

            {navStyle === "nav1" && (
                <nav style={{ backgroundColor: bgColor, width: "100%", height: "50px", display: "flex", justifyContent: "center", flexDirection: 'column' }}>
                    <ul style={{ display: 'flex', flexDirection: 'row', position: 'relative', left: "100px" }}>
                        {links.map((link, index) => (
                            <li key={index} style={{ listStyle: 'none', marginLeft: "40px" }}>
                                <Link to={link.url} style={{ color: textColor, textDecoration: 'none' }}>
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>

                </nav>
            )}

            {navStyle === "nav2" && (
                <nav style={{ backgroundColor: "rgba(25, 26, 29, 0.25)", borderBottom: "2px solid rgba(59, 60, 63, 0.5)", width: "100%", height: "70px", display: "flex", justifyContent: 'center', flexDirection: 'column', backdropFilter: "blur(10px)" }}>
                    <ul style={{ display: 'flex', flexDirection: 'row', position: 'relative', left: "100px", alignItems: 'center' }}>
                        <labal style={{ fontSize: "22px", fontFamily: "Inter, sans-serif", fontWeight: "600", color: "#F4EEEE" }}>{websiteTitle}</labal>
                        {links.map((link, index) => (
                            <li key={index} style={{
                                listStyle: 'none', position: 'relative', marginLeft: "40px", left: "40px", transition: "color 0.3s ease", cursor: "pointer"
                            }} onMouseEnter={(e) => e.target.style.color = "#24BE78"}
                                onMouseLeave={(e) => e.target.style.color = "#EFEBEB"} >
                                <Link to={link.url} style={{ color: "#EFEBEB", textDecoration: 'none', fontSize: "18px", fontFamily: "Inter, sans-serif", fontWeight: "400" }}>
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                        <Link to={btnUrl} style={{ textDecoration: "none" }}>
                            <button
                                style={{
                                    position: 'relative',
                                    left: "1000px",
                                    width: "170px",
                                    height: "35px",
                                    backgroundColor: "#24BE78",
                                    color: "#fff",
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: "500",
                                    fontSize: "16px",
                                    borderRadius: "16px",
                                    borderStyle: "none",
                                    cursor: "pointer",
                                    transition: "transform 0.1s ease-in-out"
                                }}
                                onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                                onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                            >
                                {btnText}
                            </button>
                        </Link>
                    </ul>

                </nav>
            )}
        </>
    );
};

export default Navbar;