import { useContext } from 'react'
import { MainContext } from 'context/MainContext'
import Style from './Burger.module.scss'

export default function Burger() {

    const { toggleMenu } = useContext(MainContext)

    return (
        <div className={Style.burger} onClick={toggleMenu}>
            <div></div>
            <div></div>
        </div>
    )
}
