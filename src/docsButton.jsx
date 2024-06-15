import React from "react"
import ShowcaseCard from "./showcaseCard"
import "./docsButton.css"

function button() {
    return (
        <>
            <div className="button-section">
                <h1>Button</h1>
                <p>Interactive way for users to exectue actions</p>


                <h2>Sizes</h2>
                <ShowcaseCard
                    Width={"800px"}
                    Height={"300px"}
                    marginDown={"50px"}

                >
                    <ul className="btn-container-sizes">
                        <ul className="btn-container-small">
                            <button className="small1Btn">small</button>
                            <button className="small2Btn">small</button>
                            <button className="small3Btn">small</button>
                        </ul>

                        <ul className="btn-container-medium">
                            <button className="medium1Btn">medium</button>
                            <button className="medium2Btn">medium</button>
                            <button className="medium3Btn">medium</button>
                        </ul>

                        <ul className="btn-container-large">
                            <button className="large1Btn">large</button>
                            <button className="large2Btn">large</button>
                            <button className="large3Btn">large</button>
                        </ul>
                    </ul>
                </ShowcaseCard>


                <h2>Colors</h2>
                <ShowcaseCard
                    Width={"800px"}
                    Height={"100px"}
                    marginDown={"50px"}
                >
                    <ul className="btn-container-colors">
                        <button className="defualtBtn">Default</button>
                        <button className="attentionBtn">Attention</button>
                        <button className="importantBtn">important</button>
                        <button className="confirmBtn">Confirm</button>
                    </ul>
                </ShowcaseCard>

                <h2>Theme Examples</h2>

                <ShowcaseCard
                    Width={"800px"}
                    Height={"100px"}
                    marginDown={"50px"}
                >
                    <ul className="btn-container-pink">
                        <button className="standardBtn">Button</button>
                        <button className="lightBtn">Button</button>
                        <button className="whiteBtn">Button</button>
                        <button className="borderdBtn">Button</button>
                    </ul>
                </ShowcaseCard>




            </div>
        </>
    )
}

export default button