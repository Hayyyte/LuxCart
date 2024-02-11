import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
const Loayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="overflow-x-hidden">
            <Navbar></Navbar>    
            {children}
            <Footer></Footer>
        </div>
    );
}
 
export default Loayout;