import { InfinityIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { courses } from "@/db/schema";

type Props = {
    activeCourse: typeof courses.$inferSelect;
    hearts: number;
    points: number;
    hasActiveSubscription: boolean;
}

export const UserProgress = ({ activeCourse, points, hearts, hasActiveSubscription }: Props) => {
    return (
        <div className="flex items-center justify-between gap-x-2 w-full">
            <a href="/courses" className="flex items-center gap-x-2">
                <Button variant="ghost">
                    <Image src={activeCourse.imageSrc} alt={activeCourse.title} className="rounded-md" width={32} height={32}/>
                </Button>
            </a>
            <a href="/shop">
                <Button variant="ghost" className="text-orange-500">
                    <Image src="/points.png" height={32} width={32} alt="Points" className="mr-2" />
                    {points}
                </Button>
            </a>
            <a href="/shop">
                <Button variant="ghost" className="text-rose-500">
                    <Image src="/heart.png" height={32} width={32} alt="Hearts" className="mr-2" />
                    {hasActiveSubscription ? <InfinityIcon className="h-4 w-3 stroke-[3]" /> : hearts}
                </Button>
            </a>
        </div>
    );
};