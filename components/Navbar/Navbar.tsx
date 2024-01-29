import Link from "next/link";
import Image from "next/image";
import '@/styles/style.css';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
  } from "@/components/ui/sheet"
import { Button } from "../ui/button";
import NewSheet from "./New/NewSheet";
import GiftsSheet from "./Gifts/GiftsSheet";

const Navbar = () => {
    return (
        <nav className="flex flex-row justify-around w-full text-center border-b-2 text-black border-black-200 py-7">
            {/* Menu */}
            <Sheet>
                {/* Menu Open */}
                <SheetTrigger>
                    <Button>Menu</Button>
                </SheetTrigger>

                <SheetContent side='left'>
                    {/* Menu Close */}
                    <SheetTrigger className="mx-5 p-3 text-xl">
                        × Close
                    </SheetTrigger>

                    <ul className="flex flex-col mx-5 text-3xl gap-y-5 p-3 group">
                        {/* Gift Menu */}
                        <GiftsSheet/>
                        <NewSheet />
                        <li className="max-w-min group-hover:text-gray-500 text-black">
                            <Link href="/women">
                                <p>
                                    <span className="hover-underline">Women</span>
                                </p>
                            </Link>
                        </li>
                        <li className="max-w-min group-hover:text-gray-500 text-black">
                            <Link href="/men">
                                <p>
                                    <span className="hover-underline">Men</span>
                                </p>
                            </Link>
                        </li>
                        <li className="max-w-min group-hover:text-gray-500 text-black">
                            <Link href="/jewelry">
                                <p>
                                    <span className="hover-underline">Jewelry</span>
                                </p>
                            </Link>
                        </li>
                        <li className="max-w-min group-hover:text-gray-500 text-black">
                            <Link href="/watches">
                                <p>
                                    <span className="hover-underline">Watches</span>
                                </p>
                            </Link>
                        </li>
                        <li className="max-w-min group-hover:text-gray-500 text-black">
                            <Link href="/perfumes">
                                <p>
                                    <span className="hover-underline">Perfumes</span>
                                </p>
                            </Link>
                        </li>
                        <li className="max-w-min group-hover:text-gray-500 text-black">
                            <Link href="/makeup">
                                <p>
                                    <span className="hover-underline">Makeup</span>
                                </p>
                            </Link>
                        </li>
                        <li className="max-w-min group-hover:text-gray-500 text-black">
                            <Link href="/services">
                                <p>
                                    <span className="hover-underline">Services</span>
                                </p>
                            </Link>
                        </li>
                        <li className="max-w-min group-hover:text-gray-500 text-black">
                            <Link href="/lux">
                                <p>
                                    <span className="hover-underline">Lux</span>
                                </p>
                            </Link>
                        </li>
                    </ul>
                </SheetContent>
            </Sheet>

            {/* Logo */}
                <Link href="/">
                    <Image src='/lux-text.svg' alt='Logo' width={100} height={100} className='cursor-pointer'></Image>
                </Link>
            <div className="flex flex-row gap-x-10">
                {/* Account */}
                <div><p>Account</p></div>
                {/* Cart */}
                <div><p>Cart</p></div> 
            </div>
        </nav>
    );
}
 
export default Navbar;