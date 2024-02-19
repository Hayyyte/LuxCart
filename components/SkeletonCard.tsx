import { Card, CardContent, CardHeader } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const SkeletonCard = () => {
    return (
        <Card className="flex flex-col justify-between">
            <CardHeader className="flex flex-col">
                <Skeleton className="w-40 h-6 mb-1" />
                <Skeleton className="w-[100%] h-13 mb-4" />
            </CardHeader>
            <CardContent>
                <Skeleton className="w-32 h-6 mb-4" />
                <Skeleton className="w-[100%] h-[300px] mb-2" />
            </CardContent>
        </Card>
    );
}
 
export default SkeletonCard;