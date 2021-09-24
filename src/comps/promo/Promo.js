import ButtonArrow from 'comps/button/ButtonArrow'
import PromoSlider from 'comps/promo-slider/PromoSlider'
import Quote from 'assets/images/left-quote.png'
import ButtonBox from 'comps/button/ButtonBox'

export default function Promo() {
    return (
        <div className="promo">
            <div className="container">
                <div className="header">
                    <div><h1>We promise it won't get boring.</h1></div>
                    <div>
                        <p>Are you ready to go on adventures that will take your breath away? Climb the Olympus Mons, the tallest mountain on any planet or explore the Deep Ice Caves of Europa. The possibilities are endless.</p>
                    </div>
                    <div>
                        <div>
                            <span>Explore Experiences</span>
                            <ButtonArrow direction="right" color="white" />
                        </div>
                    </div>
                </div>
                <div className="content">
                    <PromoSlider />
                </div>
                <div className="footer">
                    <div>
                        <p className="quote">
                            <img src={Quote} alt="" />
                            Somewhere, something incredible is<br />waiting to be known.
                        </p>
                        <p className="name">
                            <span></span>
                            <span>Carl Sagan</span>
                        </p>
                    </div>
                    <div>
                        <ButtonBox theme="white" label="Find Your Trip" />
                    </div>
                </div>
            </div>
        </div>
    )
}
