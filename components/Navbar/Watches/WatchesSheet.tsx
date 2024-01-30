import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetClose } from "@/components/ui/sheet";
import Link from "next/link";

const WatchesSheet = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <li className="max-w-min group-hover:text-gray-500 text-black">
                    <p>
                        <span className="hover-underline">Watches</span>
                    </p>
                </li>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetClose className="mx-5 p-3 text-xl">
                    ← Back
                </SheetClose>
                <SheetTitle>
                    <Link href="/watches">
                        <SheetClose>
                            <ul className="max-w-min mx-8 group-hover:text-gray-500 text-black">
                                    <li>
                                        <span className="hover-underline">Watches</span>
                                    </li>
                            </ul>
                        </SheetClose>
                        </Link>
                </SheetTitle>
                <ul className="flex flex-col mx-5 text-3xl gap-y-5 p-3 group">
                    <li className="max-w-max group-hover:text-gray-500 text-black">
                        <Link href="/gifts/for-her">
                            <SheetClose>
                                <p>
                                    <span className="hover-underline">For Her</span>
                                </p>
                            </SheetClose>
                        </Link>
                    </li>
                    <li className="max-w-max group-hover:text-gray-500 text-black">
                        <Link href="/gifts/for-him">
                            <SheetClose>
                                <p>
                                    <span className="hover-underline">For Him</span>
                                </p>
                            </SheetClose>
                        </Link>
                    </li>
                    <li className="max-w-max group-hover:text-gray-500 text-black">
                        <Link href="/gifts/for-children">
                            <SheetClose>
                                <p>
                                    <span className="hover-underline">For Children</span>
                                </p>
                            </SheetClose>
                        </Link>
                    </li>
                    <li className="max-w-max group-hover:text-gray-500 text-black">
                        <Link href="/gifts/custom">
                            <SheetClose>
                                <p>
                                    <span className="hover-underline">Custom</span>
                                </p>
                            </SheetClose>
                        </Link>
                    </li>
                    <li className="max-w-max group-hover:text-gray-500 text-black">
                        <Link href="/gifts/holiday">
                            <SheetClose>
                                <p>
                                    <span className="hover-underline">Holiday</span>
                                </p>
                            </SheetClose>
                        </Link>
                    </li>
                </ul>
            </SheetContent>
        </Sheet>
    );
}
 
export default WatchesSheet;