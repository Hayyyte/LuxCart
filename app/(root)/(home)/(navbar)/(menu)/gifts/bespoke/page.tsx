import Filters from "@/components/Filters";
import ItemCard from "@/components/itemCard";
import { Input } from "@/components/ui/input";
import UrlTitle from "@/components/urlTitle";
import giftsData from "@/data/giftsData.json";

const Bespoke = () => {
    return (
        <main className="flex flex-col m-6 gap-6 lg:mx-32 xl:mx-64 2xl:mx-96"> 
            <UrlTitle />
            <div className="flex gap-4">
                <Filters />
                <Input type="text" placeholder="Search"/>
            </div>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* Enters giftsData, but only for 'bespoke' */}
                {/* Maps through the 'bespoke' array and renders ItemCard for each gift */}
                {giftsData.bespoke.map((gift) => (
                    <ItemCard key={gift.id} gift={gift} />
                    ))}
            </div>
        </main>
    );
}
 
export default Bespoke;