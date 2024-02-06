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
import NewSheet from "./New/NewSheet";
import GiftsSheet from "./Gifts/GiftsSheet";
import WomenSheet from "./Women/WomenSheet";
import MenSheet from "./Men/MenSheet";
import JewelrySheet from "./Jewelry/JewelrySheet";
import WatchesSheet from "./Watches/WatchesSheet";
import PerfumesSheet from "./Perfumes/PerfumesSheet";
import MakeupSheet from "./Makeup/MakeupSheet";
import ServicesSheet from "./Services/ServicesSheet";
import LuxSheet from "./Lux/LuxSheet";

const Navbar = () => {
    return (
        <nav className="grid grid-cols-3 w-full border-b-2 text-black border-black-200 py-7">
            <div className="flex justify-center">
                <Sheet>
                    {/* Menu Button */}
                    <SheetTrigger>
                        <Image src='/hamburger-menu.svg' alt='Menu' width={50} height={50} className="hover:scale-125 transition-transform duration-200"/>
                    </SheetTrigger>
                    <SheetContent side='left'>
                        <SheetTrigger className="mx-5 p-3 text-xl">
                            × Close
                        </SheetTrigger>
                        {/* Menu Items */}
                        <ul className="flex flex-col mx-5 text-3xl gap-y-5 p-3 group">
                            <GiftsSheet />
                            <NewSheet />
                            <WomenSheet />
                            <MenSheet />
                            <JewelrySheet />
                            <WatchesSheet />
                            <PerfumesSheet />
                            <MakeupSheet />
                            <ServicesSheet />
                            <LuxSheet />
                            <ul className="flex flex-col justify-items-end gap-y-5 mt-10 sm:hidden">
                                <li>Account</li>
                                <li>Cart</li>
                            </ul>
                        </ul>
                    </SheetContent>
                </Sheet>
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