import Link from "next/link";
import '@/styles/style.css';

const Footer = () => {
    return (
        <footer className="flex flex-col py-7 text-black- gap-y-10 border-t border-black-400 px-7">
            <div className="flex flex-row gap-x-10">
                <div id="support">
                    <h3 className="flex flex-col font-semibold">How may we help you?</h3>
                    <ul>
                        <li>
                            <Link href="/contact">
                                <p>
                                    <span className="hover-underline">
                                        Contact Us
                                    </span>
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/order">
                                <p>
                                    <span className="hover-underline">
                                        My Order
                                    </span>
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/faq">
                                <p>
                                    <span className="hover-underline">
                                        FAQs
                                    </span>
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/sitemap">
                                <p>
                                    <span className="hover-underline">
                                        Sitemap
                                    </span>
                                </p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div id="company">
                    <h3 className="font-semibold">Company</h3>
                    <ul>
                        <li>
                            <Link href="/about">
                                <p>
                                    <span className="hover-underline">
                                        About Lux Cart
                                    </span>
                                </p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div id="services">
                    <h3 className="font-semibold">Services</h3>
                </div>
                <div id="legal">
                    <h3 className="font-semibold">Legal</h3>
                    <ul>
                        <li>
                            <Link href="/terms">
                                <p>
                                    <span className="hover-underline">
                                        Terms and Conditions
                                    </span>
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy">
                                <p>
                                    <span className="hover-underline">
                                        Privacy Policy
                                    </span>
                                </p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <p>© 2024 LUX. All rights reserved.</p>
        </footer>
    );
}
 
export default Footer;