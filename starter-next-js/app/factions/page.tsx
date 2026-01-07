"use client"; // Dit mag NIET worden gewijzigd 

import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";
import FactionCard from "@/components/FactionCard";
import { Faction } from "@/types"
import { factionsCollection } from "@/database/factions";

const FactionsPage = () => {


    return (
        <div className="min-h-screen bg-neutral-900 p-8 font-mono">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8 border-4 border-neutral-700 bg-neutral-800 relative overflow-hidden">
                    <div className="border-b-4 border-neutral-700 bg-neutral-900 p-6 text-center relative">
                        <h1 className="text-4xl font-bold text-green-500 tracking-widest uppercase mt-4 ">
                            Production Sectors
                        </h1>
                        <p className="mt-2 text-sm text-green-500/70 uppercase">
                            "Select a manufacturing division for inspection"
                        </p>
                        <div className="mt-4 flex justify-center gap-4">
                            <Link href="/party" className="inline-block text-xs text-neutral-400 hover:text-green-400 uppercase tracking-wider border border-neutral-600 px-3 py-1 hover:border-green-500 transition-colors">
                                View Active Party &gt;&gt;
                            </Link>
                            <LogoutButton />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {factionsCollection.map((faction) => (
                        <FactionCard faction={faction} />
                    ))}

                </div>

            </div>
        </div>
    );
};

export default FactionsPage;