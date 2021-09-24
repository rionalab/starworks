import Slider from './Slider'

export default function MenuFullscreen() {
    return (
        <div className="menu-fullscreen">
            <div className="btn-close-menu-fullscreen">
                <button>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className="links">
                <a href="/"><span>Benefit</span></a><br />
                <a href="/"><span>Price</span></a><br />
                <a href="/"><span>Features</span></a><br />
                <a href="/"><span>Membership</span></a><br />
                <a href="/"><span>Review</span></a><br />
            </div>
            <div className="promotion">
                <Slider />
            </div>
        </div>
    )
}
