import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button"
import Image from "next/image";

export const Header = () => {
    return (
        <header className="h-20 w-full border-b-2 border-slate-200 px-4">
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/eagle.png" height={40} width={40} alt="Eagle Mascot"/>
                    <h1 className="text-2xl font-extrabold text-neutral-600 tracking-wide">Muhabet</h1>
                </div>
            </div>
        </header>
    );
};