import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex-between fixed bottom-0 w-full py-7 text-black- gap-y-10 border-t border-black-400 px-20 max-md:flex-col">
            <div className="flex gap-x-9">
                <p>© 2024 LUXE. All rights reserved.</p>
                <Link href="/terms">Terms & Conditions</Link>
                <Link href="/privacy">Privacy Policy</Link>
            </div>
        </footer>
    );
}
 
export default Footer;