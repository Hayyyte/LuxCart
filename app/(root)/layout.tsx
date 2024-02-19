import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
const Loayout = ({ children }: { children: React.ReactNode }) => {
    // Todo: Toggle footer when on the login/register page
    const footer = false;
    return (
        <div className="overflow-x-hidden">
            <Navbar></Navbar>    
            {children}
            {footer && <Footer></Footer>}
        </div>
    );
}
 
export default Loayout;