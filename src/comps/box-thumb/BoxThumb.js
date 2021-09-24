import ButtonBox from 'comps/button/ButtonBox'
import React from 'react'

export default function BoxThumb({ image, imageDesc, buttonLabel, theme, url, title, description }) {
    return (
        <div className={`box-thumb ${theme}`}>
            <div className="caption">
                {title && <h1>{title}</h1>}
                {description && <h2>{description}</h2>}
                {url && <ButtonBox url={url} style={theme} label={buttonLabel ? buttonLabel : "Read More"} />}
            </div>
            <div className="image">
                <div>
                    <div className="border"></div>
                    {imageDesc &&
                        <div className="image-desc">
                            <h3>{imageDesc.title}</h3><br />
                            <h4>{imageDesc.description}</h4><br />
                            <button>Visit</button>
                        </div>
                    }
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    )
}
