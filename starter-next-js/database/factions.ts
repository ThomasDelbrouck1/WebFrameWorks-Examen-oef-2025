
import { Collection, MongoClient } from "mongodb";
import { Faction } from "@/types"

const client = new MongoClient(process.env.MONGODB_URI!);

export const factionsCollection: Collection<Faction> = client.db("woe").collection<Faction>("factions");


export const seedFactions = async () => {

    const response = await fetch("https://raw.githubusercontent.com/similonap/json/refs/heads/master/elves/factions.json");
    const data: Faction[] = await response.json();

    let factions: Faction[] = data;
    await factionsCollection.deleteMany({});
    if (await factionsCollection.countDocuments() === 0) {
        factionsCollection.insertMany(factions);
        console.log("Seeded factions collection");
    }
    console.log("Factions collection seeded!");
}

export const getFactions = async () => {
    const response = await fetch("https://raw.githubusercontent.com/similonap/json/refs/heads/master/elves/factions.json");
    const data: Faction[] = await response.json();

    let factions: Faction[] = data;

    return factions;
}