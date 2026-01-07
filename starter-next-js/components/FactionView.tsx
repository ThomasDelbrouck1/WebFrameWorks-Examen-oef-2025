import { getFactions } from "@/database/factions"
import FactionCard from "./FactionCard";


export const FactionView = async () => {
    const factions = await getFactions();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {factions.map((faction, i) => (
                <FactionCard faction={faction} key={i} />
            ))}

        </div>
    )
}