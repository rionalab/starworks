import React from 'react'
import Style from './ImageBorderThumb.module.scss'

export default function ImageBorderThumb({ handleClick, roundTop, active, description, title, image }) {
    return (
        <div className={`${Style.ImageBorderThumb} ${active ? Style.active : ''} ${roundTop ? Style.roundTop : ''}`}>
            <div className={Style.border}></div >
            <div className={Style.image}>
                <div className={Style.imageInner}>
                    <div className={Style.imageCaption}>
                        <h3>{title}</h3>
                        <h4>{description}</h4>
                        {handleClick && <button onClick={handleClick}>Visit</button>}
                    </div>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    )
}
