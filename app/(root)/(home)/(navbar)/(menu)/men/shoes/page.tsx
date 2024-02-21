import UrlTitle from "@/components/urlTitle";
import SkeletonCard from "@/components/SkeletonCard"

const MenShoes = () => {
    return (
        <main className="flex flex-col m-6 gap-6 lg:mx-32 xl:mx-64 2xl:mx-96">
            <UrlTitle />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <SkeletonCard/>
                <SkeletonCard/>
                <SkeletonCard/>
                <SkeletonCard/>
                <SkeletonCard/>
                <SkeletonCard/>
                <SkeletonCard/>
                <SkeletonCard/>
                <SkeletonCard/>
            </div>
        </main>
    );
}
 
export default MenShoes;