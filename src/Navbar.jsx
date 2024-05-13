import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";

const Navbar = ({ links, websiteTitle, btnText, btnUrl, hideOnScroll, homeUrl }) => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (hideOnScroll) {
            const handleScroll = () => {
                const currentScrollPos = window.scrollY;
                const visible = prevScrollPos > currentScrollPos || currentScrollPos === 0;

                setPrevScrollPos(currentScrollPos);
                setVisible(visible);
            };

            window.addEventListener('scroll', handleScroll);

            return () => window.removeEventListener('scroll', handleScroll);
        }

    }, [prevScrollPos]);

    return (
        <nav className={visible ? 'navbar' : 'navbar hidden'}>
            <ul style={{ display: 'flex', flexDirection: 'row', position: 'relative', marginLeft: "200px", alignItems: 'center' }}>
                <Link to={homeUrl} style={{textDecoration: "none", fontSize: "22px", fontFamily: "Inter, sans-serif", fontWeight: "600", color: "#F4EEEE" }}>{websiteTitle}</Link>
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
                <Link to={btnUrl} style={{ textDecoration: "none", marginLeft: "auto", marginRight: "100px" }}>
                    <button
                        style={{
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
    );
};

export default Navbar;
