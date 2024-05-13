import React from 'react';
import "./heading.css"

const Heading = ({text}) => {

   if(text == null) {
    text = "put your hero text here"
   }

   

    return(
        <>
   
       
            <h1 className="heading">
              {text}
            </h1>
       


        </>
    )
}

export default Heading;