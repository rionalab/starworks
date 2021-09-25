import ButtonArrow from 'comps/button/ButtonArrow'
import RoundedTopThumb from 'comps/rounded-top-thumb/RoundedTopThumb'
import ImagePromotion from 'assets/images/img1.jpg'

export default function Slider() {

    const promoThumbProps = {
        title: "San Francisco",
        url: '/',
        image: ImagePromotion,
        description: "San Francisco was founded in 1776 by the Spanish conquerors. It was called Hierba Buena which is Spanish for Good Herb."
    }

    return (
        <div className="menu-fullscreen-slider">

            <div className="slider-c">
                <RoundedTopThumb {...promoThumbProps} />
            </div>
            <div className="pagination">
                <p>
                    <span>News</span>
                    <span>01</span>
                    <span>/</span>
                    <span>08</span>
                </p>
            </div>
        </div>
    )
}
