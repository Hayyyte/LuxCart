import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";

const NewSheet = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <li className="max-w-min group-hover:text-gray-500 text-black">
                    <p>
                        <span className="hover-underline">New</span>
                    </p>
                </li>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetTrigger className="mx-5 p-3 text-xl">
                    ← Back
                </SheetTrigger>
                <SheetTitle>
                    <Link href="/new">
                        <ul className="max-w-min mx-8 group-hover:text-gray-500 text-black">
                            <li>
                                <span className="hover-underline">New</span>
                            </li>
                        </ul>
                    </Link>
                </SheetTitle>
                <ul className="flex flex-col mx-5 text-3xl gap-y-5 p-3 group">
                    <li className="max-w-max group-hover:text-gray-500 text-black">
                        <Link href="/new/for-her">
                            <p>
                                <span className="hover-underline">For Her</span>
                            </p>
                        </Link>
                    </li>
                    <li className="max-w-max group-hover:text-gray-500 text-black">
                        <Link href="/new/for-him">
                            <p>
                                <span className="hover-underline">For Him</span>
                            </p>
                        </Link>
                    </li>
                    <li className="max-w-max group-hover:text-gray-500 text-black">
                        <Link href="/new/essentials">
                            <p>
                                <span className="hover-underline">New Essentials</span>
                            </p>
                        </Link>
                    </li>
                </ul>
            </SheetContent>
        </Sheet>
    );
}
 
export default NewSheet;