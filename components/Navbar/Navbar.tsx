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
        <nav className="flex flex-row justify-around w-full text-center border-b-2 text-black border-black-200 py-7">
            <Sheet>
                {/* Menu Button */}
                <SheetTrigger>
                    <Button>Menu</Button>
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