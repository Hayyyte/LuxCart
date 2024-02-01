import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import MouseTrail from "@/components/mouseTrail";

const Loayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="overflow-x-hidden">
            <MouseTrail></MouseTrail>
            <Navbar></Navbar>    
            {children}
            <Footer></Footer>
        </div>
    );
}
 
export default Loayout;