
import { Collection, MongoClient, SortDirection } from "mongodb";
import { Elf } from "@/types"

const client = new MongoClient(process.env.MONGODB_URI!);

export const elfsCollection: Collection<Elf> = client.db("woe").collection<Elf>("elfs");


export const seedElfs = async () => {

    const response = await fetch("https://raw.githubusercontent.com/similonap/json/refs/heads/master/elves/elves.json");
    const data: Elf[] = await response.json();

    let elfs: Elf[] = data;
    await elfsCollection.deleteMany({});
    if (await elfsCollection.countDocuments() === 0) {
        elfsCollection.insertMany(elfs);
        console.log("Seeded elfs collection");
    }
    console.log("Elfs collection seeded!");
}
