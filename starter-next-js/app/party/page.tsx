import Link from "next/link";
import ElfCard from "@/components/ElfCard";
import LogoutButton from "@/components/LogoutButton";
import PartyStats from "@/components/PartyStats";
import { PLACEHOLDER_PARTY } from "@/dummy-data";

const PartyPage = () => {
    return (
        <div className="min-h-screen bg-neutral-900 p-8 font-mono">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8 border-4 border-neutral-700 bg-neutral-800 relative overflow-hidden">
                    <div className="border-b-4 border-neutral-700 bg-neutral-900 p-6 text-center relative">
                        <h1 className="text-4xl font-bold text-green-500 tracking-widest uppercase mt-4">
                            Active Party Manifest
                        </h1>
                        <p className="mt-2 text-sm text-green-500/70 uppercase">
                            "Listing deployed units under operator command."
                        </p>
                        <PartyStats partyElves={PLACEHOLDER_PARTY} />
                        <div className="mt-4 flex justify-center gap-4">
                            <Link href="/factions" className="inline-block text-xs text-neutral-400 hover:text-green-400 uppercase tracking-wider border border-neutral-600 px-3 py-1 hover:border-green-500 transition-colors">
                                &lt;&lt; Browse Factions
                            </Link>
                            <LogoutButton />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PLACEHOLDER_PARTY.map((elf) => (
                        <ElfCard key={elf.serial_number} elf={elf}/>
                    ))}
                </div>
                
                <div className="text-center p-12 border-2 border-dashed border-neutral-700 text-neutral-500 uppercase tracking-widest bg-neutral-800/50">
                    <p className="mb-4">No units assigned to party.</p>
                    <Link href="/factions" className="inline-block mt-4 text-xs text-neutral-400 hover:text-green-400 uppercase tracking-wider border border-neutral-600 px-3 py-1 hover:border-green-500 transition-colors">
                        [INITIATE RECRUITMENT PROTOCOLS]
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PartyPage;
