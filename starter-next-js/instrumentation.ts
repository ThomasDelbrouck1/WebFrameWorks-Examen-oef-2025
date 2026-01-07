import { seedElfs } from "./database/elfs";
import { seedFactions } from "./database/factions";


export function register() {
    seedElfs().catch(err => console.error("Error seeding elfs:", err));
    seedFactions().catch(err => console.error("Error seeding elfs:", err));
}