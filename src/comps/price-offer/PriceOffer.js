import Slider from 'react-slick'
import RoundedTopThumb from 'comps/rounded-top-thumb/RoundedTopThumb'
import ImagePromotion1 from 'assets/images/img1.jpg'
import ImagePromotion2 from 'assets/images/img2.jpg'
import ImagePromotion3 from 'assets/images/img3.jpg'
import ImagePromotion4 from 'assets/images/img4.jpg'
import ButtonArrow from 'comps/button/ButtonArrow'
import BoxThumb from 'comps/box-thumb/BoxThumb'

export default function PriceOffer() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: 200,
        slidesToScroll: 1
    };

    const items = [
        {
            title: "Price Offering",
            url: '/',
            theme: 'dark',
            buttonLabel: 'Explore More',
            image: ImagePromotion1,
            imageDesc: {
                title: 'Roma, Italia',
                url: '/',
                description: 'San Francisco was founded in 1776 by the Spanish',
            },
            description: "San Francisco was founded in 1776 by the Spanish conquerors. It was called Hierba Buena which is Spanish for Good Herb."
        }, {
            title: "Los Angeles",
            theme: 'dark',
            url: '/',
            buttonLabel: 'Explore More',
            image: ImagePromotion2,
            description: "The City of Angels fell from great heights. But Angelenos are helping LA take flight once more."
        }, {
            title: "Paris",
            theme: 'dark',
            url: '/',
            buttonLabel: 'Explore More',
            image: ImagePromotion3,
            description: "Paris attacked the pandemic not only with its doctors and health-care workers, but also with its urban planners."
        }, {
            title: "London",
            theme: 'dark',
            buttonLabel: 'Explore More',
            url: '/',
            image: ImagePromotion4,
            description: "As the “capital of capitals”—still waist-deep in an opaque pandemic slurry—negotiates the uncharted, perilous terrain of a post-Brexit world, London continues to reign the planet’s best cities for the sixth year running"
        },
    ]

    return (
        <div className="price-offer-slider">
            <Slider {...settings}>
                {
                    items.map(item => (
                        <div className="price-offer-slider-item" key={item.title}>
                            <ButtonArrow className="slider-nav" direction="left" color="dark" />
                            <ButtonArrow className="slider-nav" direction="right" color="dark" />
                            <BoxThumb {...item} />
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}
