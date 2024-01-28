import Link from "next/link";

const Company = () => {
    return (
        <div className="flex flex-col gap-x-10" id="company">
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
    );
}
 
export default Company;