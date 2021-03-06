import Style from './PromoSlider.module.scss'

export default function PromoThumb({ image, className, imageDesc, buttonLabel, theme, url, title, description }) {
    return (
        <div className={`${Style.promoThumbItem} ${Style[className]}`}>
            <img src={image} alt="" />
            <div className="caption">
                {title && <h1>{title}</h1>}
                {description && <h2>{description}</h2>}
            </div>
        </div>
    )
}
