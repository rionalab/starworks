import Facebook from 'assets/images/facebook.png';
import Twitter from 'assets/images/twitter.png';
import Instagram from 'assets/images/instagram.png';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="top">
                    <div className="logo">
                        <h1>StarTRAVELER</h1>
                    </div>
                    <div className="links">
                        <div>
                            <h2>destinations</h2>
                            <ul>
                                <li>
                                    <a href="/">Earth</a>
                                </li>
                                <li>
                                    <a href="/">Moon</a>
                                </li>
                                <li>
                                    <a href="/">Mars</a>
                                </li>
                                <li>
                                    <a href="/">Europa</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2>get help</h2>
                            <ul>
                                <li>
                                    <a href="/">Status</a>
                                </li>
                                <li>
                                    <a href="/">Preorder</a>
                                </li>
                                <li>
                                    <a href="/">Returns</a>
                                </li>
                                <li>
                                    <a href="/">Payment Options</a>
                                </li>
                                <li>
                                    <a href="/">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2>about spaced</h2>
                            <ul>
                                <li>
                                    <a href="/">News</a>
                                </li>
                                <li>
                                    <a href="/">Careers</a>
                                </li>
                                <li>
                                    <a href="/">Story</a>
                                </li>
                                <li>
                                    <a href="/">Sustainable Innovation</a>
                                </li>
                                <li>
                                    <a href="/">Media</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="sosmed">
                        <a href="/"><img src={Facebook} alt="" /></a>
                        <a href="/"><img src={Twitter} alt="" /></a>
                        <a href="/"><img src={Instagram} alt="" /></a>
                    </div>
                </div>
                <div className="bottom">
                    <p>&copy; 2021 StarTRAVELER, Inc. ALl rights reserved.</p>
                    <div>
                        <a href="/">Guides</a>
                        <a href="/">Term of Use</a>
                        <a href="/">Company Details</a>
                        <a href="/">Privacy &amp; Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
