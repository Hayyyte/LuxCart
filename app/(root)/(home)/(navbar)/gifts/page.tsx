import Link from "next/link";
import Image from "next/image";

const Gifts = () => {
    return (
        <main> 
            <div className="flex flex-col justify-center gap-9 my-4">
                <div className="flex bg-black items-center justify-center h-screen w-full cursor-default">
                    <h1 className="text-5xl text-white">Gifts</h1>
                </div>

                <div className="relative brightness-75 hover:brightness-105 hover:scale-105 transition-transform duration-300">
                    <Link href="/gifts/bespoke">
                        <Image src='/gift-bespoke.png' alt="Bespoke Gifts" width={2000} height={750} />
                        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl sm:text-5xl md:text-6xl lg:text-7xl text-white bg-black bg-opacity-50 p-3">Bespoke Gifts</h2>
                    </Link>
                </div>

                <div className="flex flex-col justify-center gap-4 sm:flex-row">

                    <div className="brightness-75 hover:brightness-105 hover:scale-105 transition-transform duration-300 relative">
                        <Link href="/gifts/designer-sets">
                            <h2 className="absolute text-2xl text-white top-2 left-2">Designer Sets</h2>
                            <Image src='/designer-sets.png' alt="Designer Sets" width={500} height={750}></Image>
                        </Link>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">  
                        <div className="brightness-75 hover:brightness-105 hover:scale-105 transition-transform duration-300 relative">
                            <Link href="/gifts/for-her">
                                <h2 className="absolute text-2xl text-white top-2 left-2">For Her</h2>
                                <Image src='/gift-her.png' alt="Gifts for her" width={500} height={750}></Image>
                            </Link>
                        </div>
                        <div className="brightness-75 hover:brightness-105 hover:scale-105 transition-transform duration-300 relative">
                            <Link href="/gifts/for-him">
                                <h2 className="absolute text-2xl text-white top-2 left-2">For Him</h2>
                                <Image src='/gift-him.png' alt="Gifts for him" width={500} height={750}></Image>
                            </Link>
                        </div>
                    </div>

                    <div className="brightness-75 hover:brightness-105 hover:scale-105 transition-transform duration-300 relative">
                        <Link href="/gifts/opulent-gadgets">
                            <h2 className="absolute text-2xl text-white top-2 left-2">Opulent Gadgets</h2>
                            <Image src='/opulent-gadgets.png' alt="Opulent Gadgets" width={500} height={750}></Image>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
    
export default Gifts;