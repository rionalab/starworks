import { useContext } from 'react'
import { MainContext } from 'context/MainContext'
import Style from './MainSliderItem.module.scss'
import ButtonBox from 'comps/button/ButtonBox'
import ImagePromotion1 from 'assets/images/img1.jpg'
import ImagePromotion2 from 'assets/images/img2.jpg'
import ImageBorderThumb from 'comps/image-border-thumb/ImageBorderThumb'
import ButtonArrow from 'comps/button/ButtonArrow'


export default function MainSliderItem({ image, imageDesc, buttonLabel, theme, url, title, description }) {

    const { toggleCityDetail } = useContext(MainContext)

    const handleClick = () => {
        toggleCityDetail()
    }

    const arrImages = [
        {
            title: 'Roma, Italia',
            url: '/',
            theme: 'dark',
            active: true,
            roundTop: true,
            buttonLabel: 'Explore More',
            description: 'San Francisco was founded in 1776 by the Spanish',
            image: ImagePromotion1,
            handleClick,
        }, {
            title: 'Roma, Italia',
            roundTop: true,
            url: '/',
            theme: 'dark',
            buttonLabel: 'Explore More',
            description: 'San Francisco was founded in 1776 by the Spanish',
            image: ImagePromotion2,
            handleClick,
        }
    ]

    return (
        <div className={Style.mainSliderItem}>
            <div className={`globalCaption ${Style.caption}`}>
                <div>
                    {title && <h1>{title}</h1>}
                    {description && <h2>{description}</h2>}
                    {url && <ButtonBox url={url} theme={theme} label={buttonLabel ? buttonLabel : "Read More"} />}
                </div>
            </div>
            <div className={Style.images}>
                <div className={Style.imagesInner}>
                    <div className={Style.dots}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    {
                        arrImages.map((img, i) => (
                            <div className={Style.imageC} key={i}>
                                {
                                    i < 1 && (
                                        <>
                                            <ButtonArrow className="slider-nav" direction="left" color="dark" />
                                            <ButtonArrow className="slider-nav" direction="right" color="dark" />
                                        </>
                                    )
                                }
                                <ImageBorderThumb {...img} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}