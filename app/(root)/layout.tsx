import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Loayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar></Navbar>    
            {children}
            <Footer></Footer>
        </>
    );
}
 
export default Loayout;