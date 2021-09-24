import ArrowW from 'assets/images/right-arrow-white.png'
import ArrowB from 'assets/images/right-arrow-black.png'

export default function ButtonArrow({ direction, className, color }) {
    return (
        <button className={`btn-arrow ${direction} ${color} ${className}`} title={direction}>
            <img src={ArrowW} alt="" className={`arrow-white `} />
            <img src={ArrowB} alt="" className={`arrow-black `} />
        </button>
    )
}
