import ShowcaseCard from "./showcaseCard"
import jordan1Image from "./images/jordan3.png"
import jordan2Image from "./images/jordan2.png"
import "./docsCards.css"

function docscards() {
    return (
        <>
            <div className="cards-section">
                <h1>Cards</h1>
                <p>Cards are used to display information to users using text or a image.</p>


                <div className="exampleCards" >


                    <div className="ecommerceCard">
                        <img src={jordan1Image} alt="Air Jordan 1 Low blue" />

                        <h6>bestseller</h6>
                        <h7>Air Jordan 1 low</h7>
                        <h8>2 colors</h8>
                        <h9>$100</h9>


                    </div>

                    <div className="ecommerceCard">
                        <img src={jordan2Image} alt="Air Jordan 1 Low blue" />

                        <h6>bestseller</h6>
                        <h7>Air Jordan 1 low</h7>
                        <h8>2 colors</h8>
                        <h9>$100</h9>


                    </div>


                </div>







            </div>

        </>
    )
}

export default docscards