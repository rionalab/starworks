import Style from './MainSlider.module.scss'
import Slider from 'react-slick'
import ImagePromotion1 from 'assets/images/img1.jpg'
import ImagePromotion2 from 'assets/images/img2.jpg'
import ImagePromotion3 from 'assets/images/img3.jpg'
import ImagePromotion4 from 'assets/images/img4.jpg'
import MainSliderItem from './MainSliderItem'

export default function MainSlider() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: 0,
        slidesToScroll: 1
    };

    const mainSliders = [
        {
            title: "welcoming you here",
            url: '/',
            theme: 'dark',
            buttonLabel: 'Explore More',
            image: ImagePromotion1,
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
        <div className={Style.mainSlider}>
            <Slider {...settings}>
                {
                    mainSliders.map((item, i) => (
                        <MainSliderItem {...item} key={i} />
                    ))
                }
            </Slider>
        </div>
    )
}
