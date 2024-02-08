"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";


const ItemCard: React.FC<{ gift: any }> = ({ gift }) => {
        return (
            <Card key={gift.id} className="cursor-pointer min-w-[200px] user-select-none hover:scale-105 transition-transform duration-300">
                <Link href={`${gift.url}`}>
                    <CardHeader>
                        <CardTitle>{gift.name}</CardTitle>
                        <CardDescription>{gift.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Price: {gift.price}</p>
                        {/* <p>Tags: {gift.tags.join(', ')}</p> */}
                        <img src={gift.image} alt={gift.name} height={150} width={150} />
                    </CardContent>
                </Link>
            </Card>
        );
    };
 
export default ItemCard;