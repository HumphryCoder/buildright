import React from "react";

const showcaseCard = ({Height, Width, marginDown, marginUp,children, align}) => {
    return(
        <>
        <div style={{display: "flex", justifyContent: align,alignItems: "center",backgroundColor: "#060606", width: Width, height: Height, border: "1px solid #111111", borderRadius: "15px", marginBottom: marginDown, marginTop: marginUp}}>
        {children}
        </div>
          
        </>
    )
}

export default showcaseCard