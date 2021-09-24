import ImageBorderThumb from 'comps/image-border-thumb/ImageBorderThumb'
import Img from 'assets/images/img2.jpg'

export default function CityDetail() {
    return (
        <div className="city-detail">
            <div className="close">
                <div className="close-inner">
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="gallery">
                <div>
                    <ImageBorderThumb image={Img} />
                </div>
                <div>
                    <ImageBorderThumb image={Img} />
                </div>
                <div>
                    <ImageBorderThumb image={Img} />
                </div>
                <div>
                    <ImageBorderThumb image={Img} />
                </div>
                <div>
                    <ImageBorderThumb image={Img} />
                </div>
            </div>
        </div>
    )
}
