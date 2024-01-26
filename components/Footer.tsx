import Link from "next/link";
import '@/styles/style.css';

const Footer = () => {
    return (
        <footer className="flex-between fixed bottom-0 w-full py-7 text-black- gap-y-10 border-t border-black-400 px-7 max-md:flex-col">
            <div className="flex flex-row justify-around">
                <div>
                    <h3>How may we help you?</h3>
                </div>
                <div>
                    <h3>Company</h3>
                </div>
                <div>
                    <h3>Services</h3>
                </div>
                <div>
                    <h3>Legal</h3>
                    <Link href="/terms">
                        <p className="hover-underline">
                            Terms & Conditions
                        </p>
                    </Link>
                    <Link href="/privacy">
                        <p className="hover-underline">
                            Privacy Policy
                        </p>
                    </Link>
                </div>
                <p>© 2024 LUXE. All rights reserved.</p>
                
            </div>
        </footer>
    );
}
 
export default Footer;