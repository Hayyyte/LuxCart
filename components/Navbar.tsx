import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="flex-center fixed top-0 w-full border-b-2 border-black-200 py-7 text-black">
            <div className="flex justify-between flex-row mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
                {/* Logo */}
                <Link href="/">
                    <Image src='/next.svg' alt='Logo' width={50} height={50} className='cursor-pointer'></Image>
                </Link>
                {/* Hamburger */}
                <Image src='/hamburger-menu.svg' alt='Hamburger Menu' width={50} height={50} className='cursor-pointer block md:hidden'></Image>
                {/* Nav Items */}
                <ul className="flex flex-row justify-between align-middle">
                    <li className="m-3">
                        <Link href="/gifts">
                            <p>Gifts</p>
                        </Link>
                    </li>
                    <li className="m-3">
                        <Link href="/new">
                            <p>New</p>
                        </Link>
                    </li>
                    <li className="m-3">
                        <Link href="/women">
                        <p>Women</p>
                        </Link>
                    </li>
                    <li className="m-3">
                        <Link href="/men">
                        <p>Men</p>
                        </Link>
                    </li>
                    <li className="m-3">
                        <Link href="/jewelry">
                        <p>Jewelry</p>
                        </Link>
                    </li>
                    <li className="m-3">
                        <Link href="/watches">
                        <p>Watches</p>
                        </Link>
                    </li>
                    <li className="m-3">
                        <Link href="/perfumes">
                        <p>Perfumes</p>
                        </Link>
                    </li>
                    <li className="m-3">
                        <Link href="/makeup">
                        <p>Makeup</p>
                        </Link>
                    </li>
                    <li className="m-3">
                        <Link href="/services">
                        <p>Services</p>
                        </Link>
                    </li>
                    <li className="m-3">
                        <Link href="/luxe-queendom">
                        <p>Luxe Queendom</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;