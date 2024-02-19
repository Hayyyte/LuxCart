import SkeletonCard from "@/components/SkeletonCard";
import UrlTitle from "@/components/urlTitle";
import Filters from "@/components/Filters";
import { Input } from "@/components/ui/input";

const loading = () => {
    return (
        <main className="flex flex-col m-6 gap-6 lg:mx-32 xl:mx-64 2xl:mx-96"> 
            <UrlTitle />
            <div className="flex gap-4">
                <Filters />
                <Input type="text" placeholder="Search"/>
            </div>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {"123456789".split("").map(i => (
                    <SkeletonCard key={i} />
                ))}
            </div>
        </main>
    );
}
 
export default loading;