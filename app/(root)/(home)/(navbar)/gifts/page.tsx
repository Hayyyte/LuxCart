import Link from "next/link";
import Image from "next/image";

const Gifts = () => {
    return (
        <main> 
            <h1>Gifts</h1>
            <div className="flex flex-row justify-center gap-4 group">
                <div className="border-2 border-black">
                    <Link href="/gifts/for-her">
                        <p>For Her</p>
                        <Image src='/gift-her.png' alt="Gifts for her" width={500} height={100}></Image>
                    </Link>
                </div>
                <div className="border-2 border-black">
                    <Link href="/gifts/for-him">
                        <p>For Him</p>
                        <Image src='/gift-him.png' alt="Gifts for him" width={500} height={100}></Image>
                    </Link>
                </div>
            </div>
            <Link href="/gifts/holiday">
                <p>Holiday</p>
            </Link>
        </main>
    );
}
    
export default Gifts;