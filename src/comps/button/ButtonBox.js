import Style from './ButtonBox.module.scss'

export default function ButtonBox({ label, theme = '' }) {
    return (
        <button className={`${Style.btnBox} ${Style[theme]}`}>
            <div></div>
            <span>{label}</span>
        </button>
    )
}
