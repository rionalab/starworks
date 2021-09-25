export default function RoundedTopThumb({ image, imageDesc, buttonLabel, theme, url, title, description }) {
    return (
        <div className={`rounded-top-thumb ${theme}`}>
            <div className="border"></div>

            <div className="image">
                <div>
                    {imageDesc &&
                        <div>
                            <h3>{imageDesc.title}</h3><br />
                            <h4>{imageDesc.description}</h4><br />
                            {imageDesc.handleClick && <button onClick={imageDesc.handleClick}>Visit</button>}
                        </div>
                    }
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    )
}
