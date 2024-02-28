import Support from "./Support/Support";
import Company from "./Company/Company";
import Legal from "./Legal/Legal";

import '@/styles/style.css';

const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row py-7 text-black- gap-y-10 gap-x-10 border-t border-black-400 px-7">
            <Support></Support>
            <Company></Company>
            <Legal></Legal>
        </footer>
    );
}
 
export default Footer;