import Filters from "@/components/Filters";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import giftsData from "@/data/giftsData.json";

const Bespoke = () => {
    return (
        <main className="flex flex-col m-6 gap-6 lg:mx-32 xl:mx-64 2xl:mx-96"> 
            <h1>Bespoke</h1>
            <div className="flex gap-4">
                <Filters />
                <Input type="text" placeholder="Search"/>
            </div>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {giftsData.bespoke.map((gift) => (
                    <Card key={gift.id} className="cursor-pointer min-w-[200px] user-select-none hover:scale-105 transition-transform duration-300">
                        <CardHeader>
                            <CardTitle>{gift.name}</CardTitle>
                            <CardDescription>{gift.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Price: {gift.price}</p>
                            {/* <p>Tags: {gift.tags.join(', ')}</p> */}
                            <img src={gift.image} alt={gift.name} height={150} width={150} />
                        </CardContent>
                    </Card>
                    ))}
            </div>
        </main>
    );
}
 
export default Bespoke;