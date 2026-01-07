import { Faction } from "@/types";
import Image from "next/image";

interface FactionCardProps {
    faction: Faction;
}

const FactionCard = ({ faction }: FactionCardProps) => {
    return (
        <div className="group relative block">
            <div className="relative flex flex-col items-center gap-4 border-2 border-neutral-700 bg-neutral-900 p-6 transition-all duration-300 group-hover:bg-neutral-800">

                <div className="relative z-10 w-full aspect-video overflow-hidden border-2 border-neutral-600 group-hover:border-orange-500/50 transition-colors">
                    <Image
                        src={faction.image}
                        alt={faction.name}

                        className="h-full w-full object-cover transition-transform duration-500"
                    />
                </div>

                <div className="w-full border-t border-neutral-700 pt-4 mt-2">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold text-neutral-300 group-hover:text-orange-400 transition-colors uppercase tracking-wider font-mono">
                            {faction.name}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FactionCard;