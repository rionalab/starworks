import Style from './Features.module.scss'
import Img1 from 'assets/images/img1.jpg'
import Img2 from 'assets/images/img2.jpg'
import Img3 from 'assets/images/img3.jpg'
import ImageBorderThumb from 'comps/image-border-thumb/ImageBorderThumb'

export default function Features() {
    return (
        <div className={Style.features}>
            <div className={Style.container}>
                <h1>features</h1>
                <h2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus explicabo perspiciatis quae eveniet aspernatur a quisquam suscipit. Eius architecto veritatis quod.
                </h2>
                <div className={Style.content}>
                    <div>
                        <ImageBorderThumb image={Img1} />
                    </div>
                    <div>
                        <ImageBorderThumb image={Img2} />
                    </div>
                    <div>
                        <ImageBorderThumb image={Img3} />
                    </div>
                </div>
            </div>
        </div>
    )
}
