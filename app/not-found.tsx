import Link from "next/link";

const NotFound = () => {
    return (
        <main className="flex flex-col justify-center items-center h-screen w-screen">
            <h1>Page Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
            <p>Sowwy :&lt;</p>
            <Link href="/" className="underline hover:text-gray-500 hover:scale-x-150 hover:scale-y-50">Return Home</Link>
        </main>
    );
}
 
export default NotFound;