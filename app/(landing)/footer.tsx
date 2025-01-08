import { Button } from  "@/components/ui/button";
import Image from "next/image";


export const Footer = () => {
    return (
        // footer hidden on mobile devices, but when size reaches large screen, it is rendered
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-creen-lg mx-auto flex item-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/alb.webp" alt="Albania" height={32} width={40} className="mr-4 rounded-md"/>
                    Albanian
                </Button>
            </div>
        </footer>
    );
};