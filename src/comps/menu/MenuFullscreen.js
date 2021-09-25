import Slider from './Slider'
import ButtonArrow from 'comps/button/ButtonArrow'
import { useContext } from 'react'
import { MainContext } from 'context/MainContext'
import Style from './MenuFullscreen.module.scss'
import ButtonBox from 'comps/button/ButtonBox'
import ImageBorderThumb from 'comps/image-border-thumb/ImageBorderThumb'
import Img from 'assets/images/a.jpg'

export default function MenuFullscreen() {

    const { global, toggleMenu } = useContext(MainContext)

    return (
        <div className={`${Style.menuFullscreen} ${global.showMenu ? Style.show : ''}`}>
            <div className={Style.btnClose} onClick={toggleMenu}>
                <button>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className={Style.links}>
                <a href="/"><span>Benefit</span></a><br />
                <a href="/"><span>Price</span></a><br />
                <a href="/"><span>Features</span></a><br />
                <a href="/"><span>Membership</span></a><br />
                <a href="/"><span>Review</span></a><br />
            </div>
            <div className={Style.promotion}>
                <ButtonArrow direction="top" color="white" />
                <ButtonArrow direction="down" color="white" />

                <div className={Style.caption}>
                    <h3>SANS FRANSISCO</h3>
                    <p>Feugiat ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, a, placeat aliquid error amet assumenda fugiat debitis beatae magni autem molestiae numquam! Aperiam vel earum quod, autem facere molestiae.</p>
                    <ButtonBox label="Read More" />
                </div>
                <div className={Style.image}>
                    <ImageBorderThumb roundTop image={Img} />
                </div>
                <div className={Style.pagination}>
                    <p>
                        <span>News</span>
                        <span>01</span>
                        <span>/</span>
                        <span>08</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
