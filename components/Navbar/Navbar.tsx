import Link from "next/link";
import Image from "next/image";
import "@/public/hamburger-menu.svg";
import '@/styles/style.css';
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetTrigger,
  } from "@/components/ui/sheet";
import NavbarV2 from "../Navbar-v2/Navbar-v2";

const Navbar = () => {
    return (
        <nav className="grid grid-cols-3 w-full border-b-2 text-black border-black-200 py-7">
            <div className="flex justify-center">
                {/* Navbar v2 */}
                <Sheet>
                    <SheetTrigger>
                        <button>Menu</button>
                    </SheetTrigger>
                    <SheetContent side='left' className="w-[400px]">
                        <NavbarV2 />
                    </SheetContent>
                </Sheet>
                <div>&nbsp;</div>
            </div>
            
            {/* Logo */}
            <Link href="/" className="flex justify-center">
                <Image src='/lux-text.svg' alt='Logo' width={100} height={100} className='cursor-pointer text-center inline-block' />
            </Link>

            <div className="hidden gap-5 sm:flex sm:justify-center">
                {/* Account */}
                <p>Account</p>
                {/* Cart */}
                <p>Cart</p>
            </div>
        </nav>
    );
}
 
export default Navbar;