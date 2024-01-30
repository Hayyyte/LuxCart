import Link from "next/link";
import Image from "next/image";

const Gifts = () => {
    return (
        <main> 
            <h1>Gifts</h1>
            <div className="flex flex-row justify-center gap-4 group">

                <div className="hover:scale-105 transition-transform duration-300 brightness-75 hover:brightness-105 relative">
                    <Link href="/gifts/designer-sets">
                        <h2 className="absolute text-2xl text-white top-2 left-2">Designer Sets</h2>
                        <Image src='/gift-her.png' alt="Gifts for her" width={500} height={750}></Image>
                    </Link>
                </div>

                <div className="hover:scale-105 transition-transform duration-300 brightness-75 hover:brightness-105 relative">
                    <Link href="/gifts/for-her">
                        <h2 className="absolute text-2xl text-white top-2 left-2">For Her</h2>
                        <Image src='/gift-her.png' alt="Gifts for her" width={500} height={750}></Image>
                    </Link>
                </div>

                <div className="hover:scale-105 transition-transform duration-300 brightness-75 hover:brightness-105 relative">
                    <Link href="/gifts/for-him">
                        <h2 className="absolute text-2xl text-white top-2 left-2">For Him</h2>
                        <Image src='/gift-him.png' alt="Gifts for him" width={500} height={750}></Image>
                    </Link>
                </div>

                <div className="hover:scale-105 transition-transform duration-300 brightness-75 hover:brightness-105 relative">
                    <Link href="/gifts/opulent-gadgets">
                        <h2 className="absolute text-2xl text-white top-2 left-2">Opulent Gadgets</h2>
                        <Image src='/gift-her.png' alt="Gifts for her" width={500} height={750}></Image>
                    </Link>
                </div>

            </div>
        </main>
    );
}
    
export default Gifts;