import React from "react"
import ShowcaseCard from "./showcaseCard"
import "./button.css"

function button() {
    return (
        <>
            <div className="button-section">
                <h1>Button</h1>
                <h2>Examples</h2>
                <ShowcaseCard
                    Width={"600px"}
                    Height={"100px"}
                    marginDown={"50px"}
                    marginUp={"40px"}
                >
                    <ul className="btn-container-blue">
                        <button className="standardBtn">Button</button>
                        <button className="lightBtn">Button</button>
                        <button className="whiteBtn">Button</button>
                        <button className="borderdBtn">Button</button>
                    </ul>

                </ShowcaseCard>

                <ShowcaseCard
                    Width={"600px"}
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

                <ShowcaseCard
                    Width={"600px"}
                    Height={"100px"}
                    marginDown={"50px"}
                >
                    <ul className="btn-container-red">
                        <button className="standardBtn">Button</button>
                        <button className="lightBtn">Button</button>
                        <button className="whiteBtn">Button</button>
                        <button className="borderdBtn">Button</button>
                    </ul>
                </ShowcaseCard>

                <ShowcaseCard
                    Width={"600px"}
                    Height={"100px"}
                    marginDown={"50px"}
                >
                    <ul className="btn-container-green">
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