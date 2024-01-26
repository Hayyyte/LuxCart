import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="flex-center fixed top-0 w-full border-b-2 border-black-200 py-7 text-black">
            <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
                <Link href="/">
                    <Image src='/next.svg' alt='Logo' width={50} height={50} className='cursor-pointer'></Image>
                </Link>
                <Image src='/hamburger-menu.svg' alt='Hamburger Menu' width={50} height={50} className='cursor-pointer block md:hidden'></Image>
                <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
                    <li>
                        <Link href="/account">
                            Account
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;