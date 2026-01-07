import { Elf } from "@/types";

interface PartyStatsProps {
    partyElves: Elf[];
}

const PartyStats = ({partyElves} : PartyStatsProps) => {

    const totalStrength = partyElves.reduce((sum, elf) => sum + elf.stats.strength, 0);
    const totalSpeed = partyElves.reduce((sum, elf) => sum + elf.stats.speed, 0);
    const totalArmor = partyElves.reduce((sum, elf) => sum + elf.stats.armor, 0);

    const combatRating = Math.floor((totalStrength + totalSpeed + totalArmor) / (partyElves.length || 1));

    return (
        <div className="mt-6 flex justify-center gap-8 border-t border-b border-neutral-800 py-4 bg-black/20">
                        <div className="text-center">
                            <div className="text-[10px] text-neutral-500 uppercase tracking-widest">Total STR</div>
                            <div className="text-2xl font-bold text-green-400 font-mono">{totalStrength}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-[10px] text-neutral-500 uppercase tracking-widest">Total SPD</div>
                            <div className="text-2xl font-bold text-green-400 font-mono">{totalSpeed}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-[10px] text-neutral-500 uppercase tracking-widest">Total ARM</div>
                            <div className="text-2xl font-bold text-green-400 font-mono">{totalArmor}</div>
                        </div>
                        <div className="text-center border-l border-neutral-700 pl-8">
                            <div className="text-[10px] text-neutral-500 uppercase tracking-widest">Combat Rating</div>
                            <div className="text-2xl font-bold text-yellow-500 font-mono">{combatRating}</div>
                        </div>
                    </div>
    )
};

export default PartyStats;