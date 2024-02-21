import Link from "next/link";
import UrlTitle from "@/components/urlTitle";

const Gifts = () => {
    return (
        <main className="flex flex-col m-6 gap-6 lg:mx-32 xl:mx-64 2xl:mx-96"> 
            <div className="flex flex-col justify-center gap-9 my-4">
                <UrlTitle />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <Link href={"/men/clothing"}>Clothing</Link>
                    <Link href={"/men/shoes"}>Shoes</Link>
                    <Link href={"/men/bags"}>Bags</Link>
                    <Link href={"/men/watches"}>Watches</Link>
                    <Link href={"/men/grooming"}>Grooming</Link>
                    <Link href={"/men/suits"}>Suits</Link>
                </div>
            </div>
        </main>
    );
}
    
export default Gifts;