import Link from "next/link";
import Image from "next/image";
import '@/styles/style.css';

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
                            <p className="hover-underline">Gifts</p>
                        </Link>
                    </li>
                    <li className="m-3">
                        <Link href="/new">
                            <p className="hover-underline">New</p>
                        </Link>
                    </li>
                    <li className="m-3">
                        <Link href="/women">
                        <p className="hover-underline">Women</p>
                        </Link>
                    </li>
                    <li className="m-3">
                        <Link href="/men">
                        <p className="hover-underline">Men</p>
                        </Link>
                    </li>
                    <li className="m-3">
                        <Link href="/jewelry">
                        <p className="hover-underline">Jewelry</p>
                        </Link>
                    </li>
                    <li className="m-3">
                        <Link href="/watches">
                        <p className="hover-underline">Watches</p>
                        </Link>
                    </li>
                    <li className="m-3">
                        <Link href="/perfumes">
                        <p className="hover-underline">Perfumes</p>
                        </Link>
                    </li>
                    <li className="m-3">
                        <Link href="/makeup">
                        <p className="hover-underline">Makeup</p>
                        </Link>
                    </li>
                    <li className="m-3">
                        <Link href="/services">
                        <p className="hover-underline">Services</p>
                        </Link>
                    </li>
                    <li className="m-3">
                        <Link href="/luxe-queendom">
                        <p className="hover-underline">Luxe Queendom</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;