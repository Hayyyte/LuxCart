import Link from "next/link";
import UrlTitle from "@/components/urlTitle";

const Gifts = () => {
    return (
        <main className="flex flex-col m-6 gap-6 lg:mx-32 xl:mx-64 2xl:mx-96"> 
            <div className="flex flex-col justify-center gap-9 my-4">
                <UrlTitle />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <Link href={"/women/bags"}>Bags</Link>
                    <Link href={"/women/beauty"}>Beauty</Link>
                    <Link href={"/women/clothing"}>Clothing</Link>
                    <Link href={"/women/dresses"}>Dresses</Link>
                    <Link href={"/women/jewelry"}>Jewelry</Link>
                    <Link href={"/women/shoes"}>Shoes</Link>
                </div>
            </div>
        </main>
    );
}
    
export default Gifts;