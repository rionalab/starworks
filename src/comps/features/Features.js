import React from 'react'
import Img1 from 'assets/images/img1.jpg'
import Img2 from 'assets/images/img2.jpg'
import Img3 from 'assets/images/img3.jpg'

export default function Features() {
    return (
        <div className="features">
            <div className="container">
                <h1>features</h1>
                <h2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus explicabo perspiciatis quae eveniet aspernatur a quisquam suscipit. Eius architecto veritatis quod.
                </h2>
                <div className="content">
                    <div>
                        <div></div>
                        <img src={Img1} alt="" />
                    </div>
                    <div>
                        <div></div>
                        <img src={Img2} alt="" />
                    </div>
                    <div>
                        <div></div>
                        <img src={Img3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
