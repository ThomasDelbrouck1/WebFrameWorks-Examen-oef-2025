"use client";

import { Elf } from "@/types";
import AddElfToCollectionButton from "./AddElfToCollectionButton";
import RemoveElfFromCollectionButton from "./RemoveElfFromCollectionButton";

interface ElfCardProps {
    elf: Elf;
}

const ElfCard = ({ elf }: ElfCardProps) => {
    const inCollection = elf.serial_number === "PLACEHOLDER-001"; // De eerste elf is altijd in de collectie voor demo-doeleinden. Dit moet vervangen worden door echte logica.
    return (
        <div className={`border-2 bg-neutral-800 relative group transition-all duration-500 ${inCollection ? 'border-green-500' : 'border-neutral-700 hover:border-green-500/50'}`}>
            {inCollection && (
                <>
                    <div className="absolute top-0 left-0 w-full h-1 bg-green-500 z-20"></div>
                    <div className="absolute top-4 right-4 z-20">
                        <div className="flex items-center gap-2 bg-black/80 border border-green-500 px-2 py-1 rounded-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-[10px] font-bold text-green-500 tracking-widest uppercase">Active</span>
                        </div>
                    </div>
                </>
            )}

            <div className="p-4 relative overflow-hidden">
                
                <div className="relative z-10 flex flex-col items-center">
                    <div className={`w-32 h-32 relative mb-4 border-2 rounded-full overflow-hidden bg-neutral-900 transition-colors ${inCollection ? 'border-green-500' : 'border-neutral-600 group-hover:border-green-500/50'}`}>
                        <img 
                            src={elf.image} 
                            alt={elf.name}
                            className={`object-cover w-full h-full transition-all duration-500`}
                        />
                    </div>
                    <h3 className="text-xl font-bold text-green-400 uppercase tracking-wider">{elf.name}</h3>
                    <p className="text-xs text-neutral-500 font-mono mb-2">{elf.serial_number}</p>
                    
                    <div className="w-full border-t border-neutral-700 my-2"></div>
                    
                    <div className="w-full space-y-1 text-sm">
                        <div className="flex justify-between">
                            <span className="text-neutral-400 uppercase text-xs">Role:</span>
                            <span className="text-green-500/80 font-bold">{elf.role}</span>
                        </div>
                        <div className="flex justify-between h-10">
                            <span className="text-neutral-400 uppercase text-xs">Diagnosis:</span>
                            <span className="text-orange-500/80 text-xs text-right max-w-[60%]">{elf.insanity_diagnosis}</span>
                        </div>
                    </div>

                    <div className="w-full mt-4 bg-neutral-900/50 p-2 border border-neutral-700">
                        <div className="grid grid-cols-3 gap-2 text-center text-xs">
                            <div>
                                <div className="text-neutral-500 uppercase text-[10px]">STR</div>
                                <div className="text-green-400 font-mono">{elf.stats.strength}</div>
                            </div>
                            <div>
                                <div className="text-neutral-500 uppercase text-[10px]">SPD</div>
                                <div className="text-green-400 font-mono">{elf.stats.speed}</div>
                            </div>
                            <div>
                                <div className="text-neutral-500 uppercase text-[10px]">ARM</div>
                                <div className="text-green-400 font-mono">{elf.stats.armor}</div>
                            </div>
                        </div>
                    </div>
                    {!inCollection && (
                        <AddElfToCollectionButton/>
                    )}
                    { inCollection && (
                        <RemoveElfFromCollectionButton/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ElfCard;
