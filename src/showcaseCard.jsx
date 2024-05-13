import React from "react";

const showcaseCard = ({Height, Width, marginDown, marginUp,children, align}) => {
    return(
        <>
        <div style={{display: "flex", justifyContent: align,alignItems: "center",backgroundColor: "#1D1D20", width: Width, height: Height, border: "1px solid #9D9D9D", borderRadius: "15px", marginBottom: marginDown, marginTop: marginUp}}>
        {children}
        </div>
          
        </>
    )
}

export default showcaseCard