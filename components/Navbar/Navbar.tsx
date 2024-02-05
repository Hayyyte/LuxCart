import Link from "next/link";
import Image from "next/image";
import "@/public/hamburger-menu.svg";
import '@/styles/style.css';
import {
    Sheet,
    SheetContent,
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
import { Input } from "../ui/input";

const Navbar = () => {
    return (
        <nav className="flex flex-row justify-around content-center w-full text-center border-b-2 text-black border-black-200 py-7">
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
                    </ul>
                </SheetContent>
            </Sheet>

            {/* Logo */}
                <Link href="/">
                    <Image src='/lux-text.svg' alt='Logo' width={100} height={100} className='cursor-pointer text-center inline-block' />
                </Link>
            <div className="flex flex-row gap-x-10">
                {/* Search */}
                <Input type="text" placeholder="Search"/>
                {/* Account */}
                <div><p>Account</p></div>
                {/* Cart */}
                <div><p>Cart</p></div> 
            </div>
        </nav>
    );
}
 
export default Navbar;