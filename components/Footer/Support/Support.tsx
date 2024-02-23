import Link from "next/link";

const Support = () => {
    return (
        <div className="flex flex-col gap-x-10 border-2 rounded-lg" id="support">
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
    );
}
 
export default Support;