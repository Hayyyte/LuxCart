import Filters from "@/components/Filters";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import giftsData from "@/data/giftsData.json";

const Bespoke = () => {
    return (
        <main className="flex flex-col mx-64 my-12 gap-5"> 
            <h1>Bespoke</h1>
            <div className="flex gap-4">
                <Filters />
                <Input type="text" placeholder="Search"/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {giftsData.bespoke.map((gift) => (
                    <Card key={gift.id} className="cursor-pointer user-select-none hover:scale-105 transition-transform duration-300">
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