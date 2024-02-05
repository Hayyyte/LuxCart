import Filters from "@/components/Filters";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Bespoke = () => {
    return (
        <main className="mx-12"> 
            <h1>Bespoke</h1>
            <Input type="text" placeholder="Search"/>
            <Filters />
        </main>
    );
}
 
export default Bespoke;