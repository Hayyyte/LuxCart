import Link from "next/link";

const Legal = () => {
    return (
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
                <li>
                    <p>© 2024 LUX. All rights reserved.</p>
                </li>
            </ul>
        </div>
    );
}
 
export default Legal;