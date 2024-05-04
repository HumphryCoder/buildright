import React from 'react';

const Heading = ({text, textColor, headStyle}) => {

   if(text == null) {
    text = "put your hero text here"
   }

   if(textColor == null) {
    textColor = "#FFFFFF"
   }

    return(
        <>
   
         {headStyle === "text1" && (
            <h1 style={{fontSize: "56px", fontFamily: "Inter, sans-serif", fontWeight: "600", color: 'transparent',backgroundImage: "linear-gradient(180deg, #E5E5E5, #999999)",backgroundClip: "text", position: 'absolute', left: "300px", bottom: "360px" ,  width: "600px"}}>
              {text}
            </h1>
         )}


        </>
    )
}

export default Heading;