import Style from './Navbar.module.scss'

export default function Navbar() {
    return (
        <nav className={Style.navbar}>
            <div className={Style.container}>
                <div className={Style.logo}>
                    <a className={Style.logoText} href="/">StarTRAVELER</a>
                </div>
                <div className={Style.links}>
                    <a className={Style.linkItem} href="/">Benefit</a>
                    <a className={Style.linkItem} href="/">Price</a>
                    <a className={Style.linkItem} href="/">Features</a>
                    <a className={Style.linkItem} href="/">Membership</a>
                    <a className={Style.linkItem} href="/">Review</a>
                </div>
            </div>
        </nav>
    )
}
