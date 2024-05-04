import React from "react"
import { Link } from 'react-router-dom';

const Subheading = ({ text, textColor, subStyle, btnUrl, btnText }) => {

    if (text == null) {
        text = "put your hero text here"
    }

    if (textColor == null) {
        textColor = "#FFFFFF"
    }

    return (
        <>

            {subStyle === "text1" && (
                <>
                <h2 style={{ fontSize: "26px", fontFamily: "Inter, sans-serif", fontWeight: "300", color: 'transparent',backgroundImage: "linear-gradient(100deg, #E5E5E5, #999999)",backgroundClip: "text", position: "absolute", left: "1000px", bottom: "380px", width: "530px" }}>
                    {text}
                </h2>
                  <Link to={btnUrl} style={{ textDecoration: "none" }}>
                  <button
                      style={{
                          position: "absolute",
                          left: "1000px",
                          top: "560px",
                          width: "120px",
                          height: "40px",
                          backgroundColor: "#24BE78",
                          color: "#fff",
                          fontFamily: "Inter, sans-serif",
                          fontWeight: "500",
                          fontSize: "15px",
                          borderRadius: "12px",
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
              </>
            )}

        </>
    )
}

export default Subheading