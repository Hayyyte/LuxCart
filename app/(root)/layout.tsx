import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import MouseTrail from "@/components/mouseTrail";

const Loayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <MouseTrail></MouseTrail>
            <Navbar></Navbar>    
            {children}
            <Footer></Footer>
        </>
    );
}
 
export default Loayout;