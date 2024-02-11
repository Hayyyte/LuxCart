import SkeletonCard from "@/components/SkeletonCard";

const loading = () => {
    return (
        <main className="flex flex-col m-6 gap-6 lg:mx-32 xl:mx-64 2xl:mx-96"> 
            <h1>Bespoke</h1>
            <div className="flex gap-4">

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