import ButtonArrow from 'comps/button/ButtonArrow'
import ButtonBox from 'comps/button/ButtonBox'
import Style from './PriceOffer.module.scss'
import Img2 from 'assets/images/img2.jpg'
import Img1 from 'assets/images/img4.jpg'
import ImageBorderThumb from 'comps/image-border-thumb/ImageBorderThumb'


export default function PriceOfferItem({ url, image, title, description }) {

    const items = [
        {
            title: "Price Offering",
            url: '/',
            theme: 'dark',
            buttonLabel: 'Explore More',
            image: Img1,
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
            image: Img2,
            description: "The City of Angels fell from great heights. But Angelenos are helping LA take flight once more."
        }, {
            title: "Paris",
            theme: 'dark',
            url: '/',
            buttonLabel: 'Explore More',
            description: "Paris attacked the pandemic not only with its doctors and health-care workers, but also with its urban planners."
        }, {
            title: "London",
            theme: 'dark',
            buttonLabel: 'Explore More',
            url: '/',
            description: "As the “capital of capitals”—still waist-deep in an opaque pandemic slurry—negotiates the uncharted, perilous terrain of a post-Brexit world, London continues to reign the planet’s best cities for the sixth year running"
        },
    ]
    return (
        <div className={Style.priceOfferItem}>
            <div className={Style.caption}>
                {title && <h1>{title}</h1>}
                {description && <p>{description}</p>}
                {url && <ButtonBox theme={`dark`} label="Explore More" />}
            </div>
            <div className={Style.images}>
                <div className={Style.imagesInner}>
                    <div>
                        <ButtonArrow className="slider-nav" direction="left" color="dark" />
                        <ButtonArrow className="slider-nav" direction="right" color="dark" />
                        <ImageBorderThumb image={Img1} />
                    </div>
                    <div>
                        <ImageBorderThumb image={Img2} />
                    </div>
                </div>
            </div>
        </div>
    )
}
