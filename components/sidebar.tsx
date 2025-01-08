import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "@/components/sidebar-item";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react"; 

type Props = {
    className?: string;
}

export const Sidebar = ({ className }: Props) => {
    return (
        <div className={cn("h-full lg:w-[245px] lg:fixed flex left-0 top-0 px-4 border-r-2 flex-col", className)}>
            <Link href="/learn">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/eagle.png" height={40} width={40} alt="Eagle Mascot"/>
                    <h1 className="text-2xl font-extrabold text-neutral-600 tracking-wide">Muhabet</h1>
                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem label="Learn" href="/learn" iconSrc="/learn.png" />
                <SidebarItem label="Leaderboard" href="/leaderboard" iconSrc="/trophy.webp" />
                <SidebarItem label="Quests" href="/quests" iconSrc="/target.png"/>
                <SidebarItem label="Shop" href="/shop" iconSrc="/shop.png"/>
            </div>

            <div className="p-4">
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton />
                </ClerkLoaded>
            </div>
        </div>
    )
}