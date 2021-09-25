import { useContext } from 'react'
import Style from './CityDetail.module.scss'

import ImageBorderThumb from 'comps/image-border-thumb/ImageBorderThumb'
import ButtonArrow from 'comps/button/ButtonArrow'
import Img1 from 'assets/images/a.png'
import Img2 from 'assets/images/b.png'
import Img3 from 'assets/images/c.png'
import Img4 from 'assets/images/d.png'
import Img5 from 'assets/images/e.png'

import Icon1 from 'assets/images/b (1).png'
import Icon2 from 'assets/images/b (2).png'
import Icon3 from 'assets/images/b (3).png'
import Icon4 from 'assets/images/b (4).png'
import Icon5 from 'assets/images/b (5).png'
import { MainContext } from 'context/MainContext'


export default function CityDetail() {

    const { global, toggleCityDetail } = useContext(MainContext)

    return (
        <div className={`${Style.cityDetail} ${global.showCityDetail ? Style.show : ``}`}>
            <div className={Style.close} onClick={toggleCityDetail}>
                <div className={Style.closeInner}>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className={Style.gallery}>
                <div className={Style.asd}>
                    <ImageBorderThumb image={Img5} />
                </div>
                <div>
                    <ImageBorderThumb image={Img2} />
                </div>
                <div>
                    <ImageBorderThumb image={Img3} />
                </div>
                <div>
                    <ImageBorderThumb image={Img4} />
                </div>
                <div>
                    <ButtonArrow color={`white`} direction={`left`} />
                    <ButtonArrow color={`white`} direction={`right`} />
                    <ImageBorderThumb image={Img1} />
                </div>
            </div>
            <div className={Style.description}>
                <div>
                    <h1>ROMA, ITALIA</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum repellat iusto voluptates laborum libero natus autem, eligendi soluta odio non? Quo tenetur labore nobis qui delectus blanditiis, cumque consectetur aperiam.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi a voluptates omnis dolorem? Quae officia animi rem exercitationem necessitatibus inventore.</p>
                    <a href="/">
                        <img src={Icon1} alt="" />
                    </a>
                    <a href="/">
                        <img src={Icon2} alt="" />
                    </a>
                    <a href="/">
                        <img src={Icon3} alt="" />
                    </a>
                    <a href="/">
                        <img src={Icon4} alt="" />
                    </a>
                    <a href="/">
                        <img src={Icon5} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}